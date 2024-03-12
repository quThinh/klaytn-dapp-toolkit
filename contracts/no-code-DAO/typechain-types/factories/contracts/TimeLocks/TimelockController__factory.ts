/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../../../contracts/TimeLocks/TimelockController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523461001a576040516125db61002082396125db90f35b600080fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806301d5062a146101eb57806301ffc9a7146101e657806307bd0265146101e15780630d3cf6fc146101dc578063134008d3146101d757806313bc9f20146101d2578063150b7a02146101cd578063248a9ca3146101c85780632ab0f529146101c35780632f2ff15d146101be57806331d50750146101b957806336568abe146101b4578063584b153e146101af57806364d62353146101aa5780638065657f146101a55780638f2a0bb0146101a05780638f61f4f51461019b57806391d1485414610196578063a217fddf14610191578063b08e51c01461018c578063b1c5f42714610187578063bc197c8114610182578063c4c4c7b31461017d578063c4d252f514610178578063d45c443514610173578063d547741f1461016e578063e38335e514610169578063f23a6e61146101645763f27a0c920361000e57610b9f565b610b80565b610b22565b610b09565b610aee565b610ad6565b610aba565b6109d2565b6108ab565b610801565b6107e6565b6107ab565b610784565b610762565b6106a6565b61068e565b610673565b61065a565b61063f565b610626565b6105e8565b6105cd565b610593565b610463565b610435565b61039c565b610369565b610331565b6102d4565b6001600160a01b031690565b90565b6001600160a01b0381165b0361021157565b600080fd5b90503590610223826101ff565b565b8061020a565b9050359061022382610225565b909182601f83011215610211578135916001600160401b03831161021157602001926001830284011161021157565b9160c0838303126102115761027c8284610216565b9261028a836020830161022b565b9260408201356001600160401b03811161021157816102aa918401610238565b9290936101fc6102bd846060850161022b565b936102cb816080860161022b565b9360a00161022b565b34610211576102f36102e7366004610267565b959490949391936113a2565b604051005b0390f35b6001600160e01b0319811661020a565b90503590610223826102fc565b90602082820312610211576101fc9161030c565b9052565b34610211576102f861034c610347366004610319565b610fb6565b60405191829182901515815260200190565b600091031261021157565b346102115761037936600461035e565b6102f86000805160206125868339815191525b6040519182918290815260200190565b34610211576103ac36600461035e565b6102f87f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca561038c565b9060a082820312610211576103ea8183610216565b926103f8826020850161022b565b926040810135916001600160401b0383116102115761041c846101fc948401610238565b93909461042c816060860161022b565b9360800161022b565b6102f36104433660046103d5565b9493909392919261195c565b90602082820312610211576101fc9161022b565b34610211576102f861034c61047936600461044f565b611059565b634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b038211176104b557604052565b61047e565b906102236104c760405190565b9283610494565b6001600160401b0381116104b557602090601f01601f19160190565b0190565b90826000939282370152565b9092919261050f61050a826104ce565b6104ba565b9381855260208501908284011161021157610223926104ee565b9080601f83011215610211578160206101fc933591016104fa565b90608082820312610211576105598183610216565b926105678260208501610216565b92610575836040830161022b565b9260608201356001600160401b038111610211576101fc9201610529565b34610211576102f86105b26105a9366004610544565b92919091611dad565b604051918291826001600160e01b0319909116815260200190565b34610211576102f861038c6105e336600461044f565b610c48565b34610211576102f861034c6105fe36600461044f565b611083565b9190604083820312610211576101fc9061061d818561022b565b93602001610216565b34610211576102f3610639366004610603565b90610c7f565b34610211576102f861034c61065536600461044f565b611014565b34610211576102f361066d366004610603565b90610e97565b34610211576102f861034c61068936600461044f565b611040565b34610211576102f36106a136600461044f565b611d11565b34610211576102f861038c6106bc3660046103d5565b94939093929192611134565b909182601f83011215610211578135916001600160401b03831161021157602001926020830284011161021157565b9060c0828203126102115781356001600160401b038111610211578161071e9184016106c8565b92909360208201356001600160401b03811161021157836107409184016106c8565b92909360408201356001600160401b03811161021157816102aa9184016106c8565b34610211576102f36107753660046106f7565b979690969591959492946115d2565b346102115761079436600461035e565b6102f860008051602061256683398151915261038c565b34610211576102f861034c6107c1366004610603565b90610c0f565b6101fc6101fc6101fc9290565b6101fc60006107c7565b6101fc6107d4565b34610211576107f636600461035e565b6102f861038c6107de565b346102115761081136600461035e565b6102f87ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78361038c565b91909160a0818403126102115780356001600160401b03811161021157836108639183016106c8565b92909360208301356001600160401b03811161021157816108859185016106c8565b9290936040810135916001600160401b0383116102115761041c846101fc9484016106c8565b34610211576102f861038c6108c136600461083a565b969590959491949392936112ec565b6001600160401b0381116104b55760208091020190565b909291926108f761050a826108d0565b938185526020808601920283019281841161021157915b83831061091b5750505050565b60208091610929848661022b565b81520192019161090e565b9080601f83011215610211578160206101fc933591016108e7565b91909160a081840312610211576109668382610216565b926109748160208401610216565b9260408301356001600160401b0381116102115782610994918501610934565b9260608101356001600160401b03811161021157836109b4918301610934565b9260808201356001600160401b038111610211576101fc9201610529565b34610211576102f86105b26109e836600461094f565b93929092611de2565b90929192610a0161050a826108d0565b938185526020808601920283019281841161021157915b838310610a255750505050565b60208091610a338486610216565b815201920191610a18565b9080601f83011215610211578160206101fc933591016109f1565b60808183031261021157610a6d828261022b565b9260208201356001600160401b0381116102115783610a8d918401610a3e565b926040830135906001600160401b03821161021157610ab1816101fc938601610a3e565b93606001610216565b34610211576102f3610acd366004610a59565b9291909161223c565b34610211576102f3610ae936600461044f565b61183e565b34610211576102f861038c610b0436600461044f565b6110a0565b34610211576102f3610b1c366004610603565b90610e29565b6102f3610b3036600461083a565b96959095949194939293611a93565b91909160a08184031261021157610b568382610216565b92610b648160208401610216565b92610b72826040850161022b565b926109b4836060830161022b565b34610211576102f86105b2610b96366004610b3f565b93929092611dc7565b3461021157610baf36600461035e565b6102f861038c6110bc565b905b600052602052604060002090565b6101fc906101f0906001600160a01b031682565b6101fc90610bca565b6101fc90610bde565b90610bbc90610be7565b6101fc905b60ff1690565b6101fc9054610bfa565b6101fc916000610c2c610c3293610c24600090565b506065610bba565b01610bf0565b610c05565b6101fc9081565b6101fc9054610c37565b6001610c596101fc92610c24600090565b01610c3e565b9061022391610c75610c7082610c48565b610c89565b9061022391610ee7565b9061022391610c5f565b61022390335b90610d82565b6101fc906107c7565b60005b838110610cb15750506000910152565b8181015183820152602001610ca1565b6104ea610cd992602092610cd3815190565b94859290565b93849101610c9e565b610d206101fc9392610d1a610d1a937f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260170190565b90610cc1565b7001034b99036b4b9b9b4b733903937b6329607d1b815260110190565b610d5e610d676020936104ea93610d52815190565b80835293849260200190565b95869101610c9e565b601f01601f191690565b60208082526101fc92910190610d3d565b90610d94610d908284610c0f565b1590565b610d9c575050565b610e0a916101fc610db8610db2610df294612021565b92610c95565b610dcd602091610dc7836107c7565b90611ed2565b92610de6610dda60405190565b94859384019283610ce2565b90810382520382610494565b60405162461bcd60e51b815291829160048301610d71565b0390fd5b9061022391610e1f610c7082610c48565b9061022391610f5e565b9061022391610e0e565b15610e3a57565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b6102239190610eb8610ea8336101f0565b6001600160a01b03841614610e33565b610f5e565b9060ff905b9181191691161790565b90610edc6101fc610ee392151590565b8254610ebd565b9055565b90610ef5610d908284610c0f565b610efd575050565b610f186001610f13836000610c2c876065610bba565b610ecc565b3390610f4e610f48610f487f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9590565b92610be7565b92610f5860405190565b600090a4565b90610f698183610c0f565b610f71575050565b610f866000610f138382610c2c876065610bba565b3390610f4e610f48610f487ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9590565b630271189760e51b6001600160e01b0319821614908115610fd5575090565b6101fc9150637965db0b60e01b6001600160e01b0319821614908115610ff9575090565b6101fc91506001600160e01b0319166301ffc9a760e01b1490565b6110219060005b506110a0565b61103261102e60006107c7565b9190565b1190565b6101fc60016107c7565b61104b90600061101b565b61103261102e6101fc611036565b61106490600061101b565b61106f6101fc611036565b8111908161107b575090565b429150111590565b61108e90600061101b565b61109c61102e6101fc611036565b1490565b6110b76101fc916110af600090565b506097610bba565b610c3e565b6101fc6098610c3e565b9190610d67816110dd816104ea9560209181520190565b80956104ee565b91611130916102239698979560809561111b6111289461111460a089019560008a01906001600160a01b03169052565b6020880152565b85830360408701526110c6565b966060830152565b0152565b919461115994610de69294611147600090565b506040519788966020880196876110e4565b61116b611164825190565b9160200190565b2090565b506101fc906020810190610216565b818352602090920191906000825b82821061119a575050505090565b909192936111c96111c26001926111b1888661116f565b6001600160a01b0316815260200190565b9560200190565b9392019061118c565b9037565b8183529091602001916001600160fb1b03811161021157829160206104ea92029384916111d2565b906101fc92916110c6565b9035601e1936839003018112156102115701602081359101916001600160401b0382116102115736829003831361021157565b8183529160200190816112526020830284019490565b92836000925b8484106112685750505050505090565b909192939495602061129561128e83856001950388526112888b88611209565b906111fe565b9860200190565b940194019294939190611258565b93956112de61113094610223999b9a986112d0608099956111289760a08b01918b830360008d015261117e565b9188830360208a01526111d6565b91858303604087015261123c565b9394611159969195610de694989398611303600090565b50604051998a9860208a0198896112a3565b61022396959493929190611336600080516020612566833981519152610c89565b919561134b61139d92949686888a8888611134565b9461135682876116d0565b60009661138a6113847f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca9890565b986107c7565b9861139460405190565b968796876110e4565b0390a3565b90610223969594939291611315565b6102239897969594939291906113d4600080516020612566833981519152610c89565b6114e9565b156113e057565b60405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608490fd5b634e487b7160e01b600052601160045260246000fd5b60001981146114565760010190565b611431565b634e487b7160e01b600052603260045260246000fd5b9190811015611481576020020190565b61145b565b356101fc816101ff565b356101fc81610225565b903590601e19368290030182121561021157018035906001600160401b038211610211576020019136829003831361021157565b908210156114815760206114e5920281019061149a565b9091565b949896979596949192918198838a14611501906113d9565b61150c8a8c146113d9565b61151c90898c88878988886112ec565b9561152788886116d0565b61153160006107c7565b8a5b8110156115c4576115bd818b8b8f8b8b6115b58f9387611580918f8f8f9d61157a926115339f61156a836115759561156f93611471565b611486565b98611471565b611490565b956114ce565b9590966115ab7f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca9690565b9661138a8a6107c7565b0390a3611447565b9050611531565b509950505050505050505050565b9061022398979695949392916113b1565b156115ea57565b60405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608490fd5b1561164e57565b60405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608490fd5b9190820180921161145657565b9060001990610ec2565b906116c96101fc610ee3926107c7565b82546116af565b61171261170a610223936116ee6116e9610d9086611014565b6115e3565b6117046116fc6101fc6110bc565b821015611647565b426116a2565b916097610bba565b6116b9565b610223906117447ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610c89565b6117e8565b1561175057565b60405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152608490fd5b9160001960089290920291821b911b610ec2565b91906117d46101fc610ee3936107c7565b9083546117af565b610223916000916117c3565b6117f96117f482611040565b611749565b61180e6000611809836097610bba565b6117dc565b7fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7061183860405190565b600090a2565b61022390611717565b6101f06101fc6101fc9290565b6101fc90611847565b61022395949392919060008051602061258683398151915261188b610d906118856000611854565b83610c0f565b611896575b506118df565b6118a09033610c8f565b38611890565b6118d26101fc95939492946118cb606084019660008501906001600160a01b03169052565b6020830152565b60408185039101526110c6565b9192906118fd6118f6610223978785888689611134565b9586611c41565b61190982858386611b56565b6000926119547fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b589361194161193b8990565b966107c7565b9661194b60405190565b948594856118a6565b0390a3611c83565b90610223959493929161185d565b6102239796959493929190600080516020612586833981519152611994610d906118856000611854565b61199f575b506119af565b6119a99033610c8f565b38611999565b9091959394976119bc8390565b976119c8858a146113d9565b6119d3898b146113d9565b6119e390868b89888c89896112ec565b946119ee9086611c41565b6119f860006107c7565b885b811015611a8057611a7981898989611a358f966119fa97611a2f611575838f8f8f83611a299261156a92611471565b99611471565b946114ce565b929093611a4484868484611b56565b6115b5611a6f7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b589490565b94611941886107c7565b90506119f8565b5097505050509150506102239150611c83565b906102239796959493929161196a565b90916104ea90839080936104ee565b90916101fc92611aa3565b90611aca61050a836104ce565b918252565b3d15611ae957611ade3d611abd565b903d6000602084013e565b606090565b15611af557565b60405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b6064820152608490fd5b61022393600093928493611b75611b6c60405190565b93849283611ab2565b03925af1611b81611acf565b50611aee565b15611b8e57565b60405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b6064820152608490fd5b15611bed57565b60405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608490fd5b90611c56611c5161022393611059565b611b87565b611c636101fc60006107c7565b8114908115611c73575b50611be6565b611c7d9150611083565b38611c6d565b61022390611c93611c5182611059565b61171261170a611036565b15611ca557565b60405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152608490fd5b9081526040810192916102239160200152565b61022390611d3b33611d35611d286101f030610be7565b916001600160a01b031690565b14611c9e565b611d456098610c3e565b817f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d591611d7d611d7460405190565b92839283611cfe565b0390a160986116b9565b611da0611d9a6101fc9263ffffffff1690565b60e01b90565b6001600160e01b03191690565b50505050611db9600090565b506101fc63150b7a02611d87565b5050505050611dd4600090565b506101fc63f23a6e61611d87565b5050505050611def600090565b506101fc63bc197c81611d87565b8181029291811591840414171561145657565b369037565b90610223611e2b611e2584611abd565b936104ce565b601f190160208401611e10565b90611e41825190565b811015611481570160200190565b8015611456576000190190565b610bff6101fc6101fc9290565b6101fc90611e7d61102e6101fc9460ff1690565b901c90565b15611e8957565b60405162461bcd60e51b815280610e0a600482016020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b9190600292611f03611efe611eef84611eea886107c7565b611dfd565b611ef8876107c7565b906116a2565b611e15565b916000906030611f1b611f15846107c7565b86611e38565b53611f53611f4a600f60fb1b92611eea6001998a95871a611f44611f3e886107c7565b8b611e38565b536107c7565b611ef8836107c7565b905b611f77575b506101fc93945090611f7161102e6101fc936107c7565b14611e82565b91611f81866107c7565b831115611fef576f181899199a1a9b1b9c1cb0b131b232b360811b611fa6600f6107c7565b8216906010821015611481578792611fc6611fe392611fe9941a60f81b90565b851a611fd28789611e38565b53611fdd6004611e5c565b90611e69565b93611e4f565b90611f55565b91611f5a565b6101fc9081906001600160a01b031681565b6101fc6014611e5c565b6101fc6101fc6101fc9260ff1690565b61203e6120396101fc92612033606090565b50610bde565b611ff5565b610dc7612049612007565b612011565b6101fc9060081c610bff565b6101fc905461204e565b1561206b57565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b610bff6101fc6101fc9260ff1690565b90610edc6101fc610ee3926120c7565b9061ff009060081b610ec2565b906121046101fc610ee392151590565b82546120e7565b61032d90611e5c565b602081019291610223919061210b565b9261216f9192612137610d90600061205a565b938480612212575b80156121cd575b61214f90612064565b6001958561216661215f89611e5c565b60006120d7565b6121bd57612230565b6121765750565b6121816000806120f4565b6121b87f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498916121af60405190565b91829182612114565b0390a1565b6121c88760006120f4565b612230565b506121e2610d906121dd30610be7565b612557565b8015612146575061214f6121f66000610c05565b61220a6122036001611e5c565b9160ff1690565b149050612146565b5061221d6000610c05565b61222a6122036001611e5c565b1061213f565b906102239392916122cd565b90610223939291612124565b1561224f57565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b906102239392916122c16122bc600061205a565b612248565b906102239392916124ea565b906102239392916122a8565b906102239392916122ed6122bc600061205a565b612330565b906122fb825190565b811015611481576020809102010190565b61032d906107c7565b9160206102239294936111306040820196600083019061230c565b939091907f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5946123608680612504565b6000805160206125668339815191529261237a8785612504565b600080516020612586833981519152926123948885612504565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783976123c0818a612504565b6123d26123cc30610be7565b82610c75565b6000976123e16101f08a611854565b6001600160a01b038216036124da575b50506123fc876107c7565b6124076101fc885190565b811015612455578061243561242f612422612450948b6122f2565b516001600160a01b031690565b88610c75565b61244b612445612422838b6122f2565b8b610c75565b611447565b6123fc565b509350935093909450612467816107c7565b6124726101fc855190565b811015612492578061244b61242f61242261248d94886122f2565b612467565b5092915092506124a38160986116b9565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5916121b86124d160405190565b92839283612315565b6124e391610c75565b38806123f1565b906102239392916122d9565b906116c96101fc610ee39290565b9061250e82610c48565b61252582600161251f866065610bba565b016124f6565b610f4e6125536125537fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9590565b9290565b3b61103261102e60006107c756feb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63a2646970667358221220c4490d0ce55a5496bdeebc04137504bcdd13782acd3002c05cd99580dea6afba64736f6c63430008120033";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockController> {
    return super.deploy(overrides || {}) as Promise<TimelockController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  override connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}