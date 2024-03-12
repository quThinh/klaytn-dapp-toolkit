// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AirDrop is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    uint256 public startingTime;
    address private tokenAddress_;
    // Merkle root value
    mapping(uint256 => bytes32) public merkleRoots;
    // Check claimed address
    mapping(uint256 => mapping(address => bool)) public claimed;

    // Id of airdrop batch
    uint256 public tranches;
  IERC20 public token;
    /* ========== EVENTS ========== */
event Claimed(address claimant, uint256 week, uint256 balance);
    event TrancheAdded(uint256 tranche, bytes32 merkleRoot, uint256 totalAmount);
    event TrancheExpired(uint256 tranche);
    event RemovedFunder(address indexed _address);

    constructor(
        uint256 _startingTime,
        address _tokenAddress
    ) public {
        startingTime = _startingTime;
        token = IERC20(_tokenAddress);
    }

    // Init airdrop
    function seedNewAllocations(
        bytes32[] memory _users,
        uint256 _totalAllocation
    ) public onlyOwner returns (uint256 trancheId) {
        token.safeTransferFrom(msg.sender, address(this), _totalAllocation);

        trancheId = tranches;
        merkleRoots[trancheId] = MerkleProof.getMerkleRoot(_users);

        tranches = tranches.add(1);

        emit TrancheAdded(trancheId, merkleRoots[trancheId], _totalAllocation);
    }

    function claimWeek(
        address _liquidityProvider,
        uint256 _tranche,
        uint256 _balance,
        bytes32[] memory _merkleProof
    ) public {
        require(block.timestamp >= startingTime, "Too early");
        _claimWeek(_liquidityProvider, _tranche, _balance, _merkleProof);
        _disburse(_liquidityProvider, _balance);
    }

    function claimWeeks(
        address _liquidityProvider,
        uint256[] memory _tranches,
        uint256[] memory _balances,
        bytes32[][] memory _merkleProofs
    ) public {
        uint256 len = _tranches.length;
        require(
            len == _balances.length && len == _merkleProofs.length,
            "Mismatching inputs"
        );

        uint256 totalBalance = 0;
        for (uint256 i = 0; i < len; i++) {
            _claimWeek(
                _liquidityProvider,
                _tranches[i],
                _balances[i],
                _merkleProofs[i]
            );
            totalBalance = totalBalance.add(_balances[i]);
        }
        _disburse(_liquidityProvider, totalBalance);
    }

    // Check if user address have claimed and tranches id is valid
    function _claimWeek(
        address _liquidityProvider,
        uint256 _tranche,
        uint256 _balance,
        bytes32[] memory _merkleProof
    ) private {
        require(_tranche < tranches, "Week cannot be in the future");

        require(
            !claimed[_tranche][_liquidityProvider],
            "LP has already claimed"
        );
        require(
            _verifyClaim(_liquidityProvider, _tranche, _balance, _merkleProof),
            "Incorrect merkle proof"
        );

        claimed[_tranche][_liquidityProvider] = true;

        emit Claimed(_liquidityProvider, _tranche, _balance);
    }

    // Verifi valid address in airdrop batch
    function _verifyClaim(
        address _liquidityProvider,
        uint256 _tranche,
        uint256 _balance,
        bytes32[] memory _merkleProof
    ) private view returns (bool valid) {
        bytes32 leaf = keccak256(
            abi.encodePacked(_liquidityProvider, _balance)
        );
        return MerkleProof.verify(_merkleProof, merkleRoots[_tranche], leaf);
    }

// Send token to user when all conditions
    function _disburse(address _liquidityProvider, uint256 _balance) private {
        if (_balance > 0) {
            token.safeTransfer(_liquidityProvider, _balance);
        } else {
            revert("No balance would be transferred - not going to waste your gas");
        }
    }

    
    function setTokenAddress(address _tokenAddress) external onlyOwner {
        tokenAddress_ = _tokenAddress;
    }

    /* ========== EMERGENCY ========== */
    receive() external payable {}

    function rescueStuckErc20(address _token) external onlyOwner {
        require(
            block.timestamp >= startingTime + 14 days,
            "only can withdraw token at least 14 days after starting time"
        );
        IERC20(_token).safeTransfer(
            msg.sender,
            IERC20(_token).balanceOf(address(this))
        );
    }

    function rescueStuckKlay() external onlyOwner {
        require(
            block.timestamp >= startingTime + 14 days,
            "only can withdraw KLAY at least 14 days after starting time"
        );
        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to withdraw KLAY left");
    }
}
