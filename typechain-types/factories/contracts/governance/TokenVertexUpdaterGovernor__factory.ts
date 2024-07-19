/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenVertexUpdaterGovernor,
  TokenVertexUpdaterGovernorInterface,
} from "../../../contracts/governance/TokenVertexUpdaterGovernor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenVertexUpdater",
        type: "address",
      },
      {
        internalType: "contract IPoolFactory",
        name: "_poolFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "timestamp",
        type: "uint64",
      },
    ],
    name: "StaleConfig",
    type: "error",
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
    name: "ADMIN_ROLE",
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
    name: "TOKEN_VERTEX_UPDATER_ROLE",
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
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
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
    inputs: [],
    name: "maxUpdateTimeDeviation",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFactory",
    outputs: [
      {
        internalType: "contract IPoolFactory",
        name: "",
        type: "address",
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
        internalType: "uint64",
        name: "_maxUpdateTimeDeviation",
        type: "uint64",
      },
    ],
    name: "setMaxUpdateTimeDeviation",
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
        internalType: "PackedValue",
        name: "_packedTokenTimestamp",
        type: "uint256",
      },
      {
        internalType: "PackedValue",
        name: "_packedBalanceRates",
        type: "uint256",
      },
    ],
    name: "updateTokenVertexConfigBalanceRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "PackedValue",
        name: "_packedTokenTimestamp",
        type: "uint256",
      },
      {
        internalType: "PackedValue",
        name: "_packedPremiumRates",
        type: "uint256",
      },
    ],
    name: "updateTokenVertexConfigPremiumRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0346200024e57601f62002e7338819003918201601f191683019291906001600160401b03841183851017620002535781606092849260409687528339810103126200024e57620000518162000269565b90602090836200006383830162000269565b910151926001600160a01b039283851685036200024e57600190603c60018060401b03198354161782557fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775946000958087528683528389882001948186549655817fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9681888b80a4817f0833596c19f8afe7d32bf2c778d80a2e2b0dcaa54c9ed6c8df6d646a481f4f8996878a5287878d8c20019183835493558b80a4818852828a8920911690818952845260ff8a892054161562000216575b5050838652858252878620941693848652815260ff878620541615620001dc575b868660805251612bd490816200027f823960805181818161020d0152818161030a015281816103fb01528181610494015281816105d20152818161068801528181610843015281816111c5015281816115540152818161165101528181611740015281816117d9015281816118f9015281816119ad0152611b680152f35b82855284815286852090848652528584209060ff1982541617905560008051602062002e53833981519152339380a438808080806200015e565b8188528784528988208189528452898820805460ff191686179055339160008051602062002e538339815191528980a438806200013d565b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200024e5756fe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714611eda575080630ccc0d0a14611e8157806312cb6f2d14611e3b57806313fcf50114611417578063248a9ca3146113ca5780632f2ff15d146112cd57806336568abe146111e95780634219dc401461117a57806375b238fc1461112157806391d14854146110a8578063a217fddf1461106e578063ac9650d814610e20578063b306459414610da6578063b61d27f614610bfe578063d547741f14610ba15763f267478f146100cf57600080fd5b346108aa576100dd36611f96565b6100e5612214565b67ffffffffffffffff8260a01c1667ffffffffffffffff4211610b6a5767ffffffffffffffff4281168281811115610b625703165b67ffffffffffffffff8060015416911611610b31575060405161013c81612053565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051916101868361209f565b6000835260006020840152600060408401526000606084015260006080840152600060a08401526040517f1b69dc5f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526101208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561065b5760009060009060009360009187600092600092600091600091600091610a75575b509463ffffffff67ffffffffffffffff9a958b9560c087849c9b9785809c9881809a166101008701521660e0850152169101521660a08d01521660808b01521660608901521660408701521660208501521682526040517fbc27dd4d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260c08160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561065b57600090600092600091876000926000926000916109d7575b5063ffffffff96938780969394819560a0838096169101521660808c01521660608a015216604088015216602086015216835260405161038a816120bb565b6000815260006020820152606060408201526040517f8aecdba300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8616600482015260408160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa801561065b57600090610990575b60ff91501660208201526040517fa4063dbc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8616600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561065b57600091610940575b5060c073ffffffffffffffffffffffffffffffffffffffff916004604051809481937fa85fc2a9000000000000000000000000000000000000000000000000000000008352165afa801561065b576000906108af575b6fffffffffffffffffffffffffffffffff1682525061053861279f565b9360005b600760ff821610156106675763ffffffff8460ff8360051b161c1661056460ff8316886121d1565b5152604080517fbb2809f000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8916600482015260ff8316602482015290818060448101038173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa91821561065b5760ff9260019260009161062a575b5063ffffffff602061061d8685168c6121d1565b510191169052011661053c565b61064c915060403d604011610654575b6106448183612107565b810190612817565b905038610609565b503d61063a565b6040513d6000823e3d90fd5b5092915092604084015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163b156108aa5760a073ffffffffffffffffffffffffffffffffffffffff94939263ffffffff61010081946040519889987f1788bd17000000000000000000000000000000000000000000000000000000008a5216600489015267ffffffffffffffff815116602489015282602082015116604489015282604082015116606489015267ffffffffffffffff60608201511660848901528260808201511660a489015282858201511660c489015267ffffffffffffffff60c08201511660e48901528260e082015116610104890152015116610124860152828151166101448601528260208201511661016486015282604082015116610184860152826060820151166101a4860152826080820151166101c48601520151166101e483015261022061020483015260406102848301916fffffffffffffffffffffffffffffffff81511661022485015260ff6020820151166102448501520151906060610264840152815180915260206102a4840192019060005b81811061087c5784600081808703818373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af1801561065b5761087157005b61087a906120d7565b005b919350916020604060019263ffffffff8388518281511684520151168382015201940191019184939261081c565b600080fd5b5060c0813d60c011610938575b816108c960c09383612107565b810103126108aa576108da81612850565b506108e760208201612850565b50604081015173ffffffffffffffffffffffffffffffffffffffff8116036108aa5761093360808261092c60606fffffffffffffffffffffffffffffffff950161286d565b5001612850565b61051b565b3d91506108bc565b90506020813d602011610988575b8161095b60209383612107565b810103126108aa575173ffffffffffffffffffffffffffffffffffffffff811681036108aa5760c06104c5565b3d915061094e565b506040813d6040116109cf575b816109aa60409383612107565b810103126108aa576109ca6020826109c360ff94612850565b500161286d565b61042b565b3d915061099d565b965050505050505060c0813d60c011610a6d575b816109f860c09383612107565b810103126108aa578063ffffffff610a108193612806565b9181610a1e60208301612806565b9381610a2c60408501612806565b9381610a3a60608301612806565b938c60a083610a5682610a4f60808901612806565b9701612806565b939b9997959396505050949750945050939661034b565b3d91506109eb565b9950505050505050505050610120813d61012011610b29575b81610a9c6101209383612107565b810103126108aa57610aad8161283b565b610ab960208301612806565b90610ac660408401612806565b85610ad36060860161283b565b610adf60808701612806565b95610aec60a08201612806565b96610af960c0830161283b565b95610b0660e08401612806565b9261010001610b1490612806565b95989097969395919490939092909138610257565b3d9150610a8e565b602490604051907fcb4a0ea40000000000000000000000000000000000000000000000000000000082526004820152fd5b90031661011a565b60446040517f6dfcc65000000000000000000000000000000000000000000000000000000000815260406004820152426024820152fd5b346108aa5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5761087a600435610bde611fca565b90806000526000602052610bf9600160406000200154612663565b61287b565b346108aa5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5760043573ffffffffffffffffffffffffffffffffffffffff811681036108aa576024359067ffffffffffffffff6044358181116108aa57366023820112156108aa5780600401359182116108aa5736602483830101116108aa57610c9d91610c936124ec565b602436920161219a565b9060405191610cab836120bb565b602983527f416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c60208401527f7565206661696c656400000000000000000000000000000000000000000000006040840152834710610d225760008161087a956020839451920190855af1610d1c61291b565b91612ad2565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152fd5b346108aa5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5760043567ffffffffffffffff81168091036108aa57610df26124ec565b7fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000006001541617600155600080f35b346108aa576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5760043567ffffffffffffffff8082116108aa57366023830112156108aa578160040135908082116108aa5760246005923660248260051b870101116108aa5792610e9984612148565b94610ea76040519687612107565b8486527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610ed486612148565b018760005b82811061105f575050506000917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd82360301925b868110610f9057604080518a81528951818c01819052600092600582901b83018101918c8e01918e9085015b828710610f465785850386f35b909192938280610f80837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08a600196030186528851612010565b9601920196019592919092610f39565b8481831b84010135848112156108aa5783019085820135918783116108aa576044019180360383136108aa578a600080610fd160019661104395369161219a565b60405193610fde856120bb565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c818601527f206661696c656400000000000000000000000000000000000000000000000000604086015281519101305af461103c61291b565b9030612ad2565b61104d828b6121d1565b52611058818a6121d1565b5001610f0d565b60608982018301528101610ed9565b346108aa5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa57602060405160008152f35b346108aa5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa576110df611fca565b600435600052600060205273ffffffffffffffffffffffffffffffffffffffff60406000209116600052602052602060ff604060002054166040519015158152f35b346108aa5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5760206040517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b346108aa5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346108aa5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa57611220611fca565b3373ffffffffffffffffffffffffffffffffffffffff8216036112495761087a9060043561287b565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152fd5b346108aa5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa57600435611307611fca565b816000526000602052611321600160406000200154612663565b81600052600060205273ffffffffffffffffffffffffffffffffffffffff60406000209116908160005260205260ff604060002054161561135e57005b816000526000602052604060002081600052602052604060002060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a4005b346108aa5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5760043560005260006020526020600160406000200154604051908152f35b346108aa5761142536611f96565b61142d612214565b67ffffffffffffffff8260a01c1667ffffffffffffffff4211610b6a5767ffffffffffffffff4281168281811115611e335703165b67ffffffffffffffff8060015416911611610b31575060405161148481612053565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516114cd8161209f565b6000815260006020820152600060408201526000606082015260006080820152600060a08201526040517f1b69dc5f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526101208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561065b5760009060009060009360009187600092600092600091600091600091611d77575b509463ffffffff67ffffffffffffffff9a958b9560c087849c9b9785809c9881809a166101008701521660e0850152169101521660a08d01521660808b01521660608901521660408701521660208501521682526040517fbc27dd4d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260c08160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561065b57600090600092600091600091600091600091611cde575b509263ffffffff809693818096948180961660a08c01521660808a01521660608801521660408601521660208401521681526040516116cf816120bb565b6000815260006020820152606060408201526040517f8aecdba300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8616600482015260408160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa801561065b57600090611c9e575b60ff91501660208201526040517fa4063dbc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8616600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561065b57600091611c4e575b5060c073ffffffffffffffffffffffffffffffffffffffff916004604051809481937fa85fc2a9000000000000000000000000000000000000000000000000000000008352165afa801561065b57600090611bc4575b6fffffffffffffffffffffffffffffffff1682525061187d61279f565b9160005b600760ff8216101561198d57604080517fbb2809f000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8916600482015260ff8316602482015290818060448101038173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa91821561065b5760ff9260019260009161196d575b5063ffffffff611942858416896121d1565b519116905263ffffffff88848360051b161c166020611963858416896121d1565b5101520116611881565b611986915060403d604011610654576106448183612107565b508a611930565b50838693604084015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163b156108aa5760a073ffffffffffffffffffffffffffffffffffffffff94939263ffffffff61010081946040519889987f1788bd17000000000000000000000000000000000000000000000000000000008a5216600489015267ffffffffffffffff815116602489015282602082015116604489015282604082015116606489015267ffffffffffffffff60608201511660848901528260808201511660a489015282858201511660c489015267ffffffffffffffff60c08201511660e48901528260e082015116610104890152015116610124860152828151166101448601528260208201511661016486015282604082015116610184860152826060820151166101a4860152826080820151166101c48601520151166101e483015261022061020483015260406102848301916fffffffffffffffffffffffffffffffff81511661022485015260ff6020820151166102448501520151906060610264840152815180915260206102a4840192019060005b818110611b965784600081808703818373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af1801561065b5761087157005b919350916020604060019263ffffffff83885182815116845201511683820152019401910191849392611b41565b5060c0813d60c011611c46575b81611bde60c09383612107565b810103126108aa57611bef81612850565b50611bfc60208201612850565b50604081015173ffffffffffffffffffffffffffffffffffffffff8116036108aa57611c4160808261092c60606fffffffffffffffffffffffffffffffff950161286d565b611860565b3d9150611bd1565b90506020813d602011611c96575b81611c6960209383612107565b810103126108aa575173ffffffffffffffffffffffffffffffffffffffff811681036108aa5760c061180a565b3d9150611c5c565b506040813d604011611cd6575b81611cb860409383612107565b810103126108aa57611cd16020826109c360ff94612850565b611770565b3d9150611cab565b9550505050505060c0813d60c011611d6f575b81611cfe60c09383612107565b810103126108aa578063ffffffff611d168193612806565b9181611d2460208301612806565b9381611d3260408501612806565b9381611d4060608301612806565b9381611d5a60a0611d5360808701612806565b9501612806565b91999795939195985050945050939650611691565b3d9150611cf1565b9950505050505050505050610120813d61012011611e2b575b81611d9e6101209383612107565b810103126108aa57611daf8161283b565b611dbb60208301612806565b90611dc860408401612806565b85611dd56060860161283b565b611de160808701612806565b95611dee60a08201612806565b96611dfb60c0830161283b565b95611e0860e08401612806565b9261010001611e1690612806565b9598909796939591949093909290918e61159e565b3d9150611d90565b900316611462565b346108aa5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa57602067ffffffffffffffff60015416604051908152f35b346108aa5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa5760206040517f0833596c19f8afe7d32bf2c778d80a2e2b0dcaa54c9ed6c8df6d646a481f4f898152f35b346108aa5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108aa57600435907fffffffff0000000000000000000000000000000000000000000000000000000082168092036108aa57817f7965db0b0000000000000000000000000000000000000000000000000000000060209314908115611f6c575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483611f65565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60409101126108aa576004359060243590565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036108aa57565b60005b8381106120005750506000910152565b8181015183820152602001611ff0565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209361204c81518092818752878088019101611fed565b0116010190565b610120810190811067ffffffffffffffff82111761207057604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60c0810190811067ffffffffffffffff82111761207057604052565b6060810190811067ffffffffffffffff82111761207057604052565b67ffffffffffffffff811161207057604052565b6080810190811067ffffffffffffffff82111761207057604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761207057604052565b67ffffffffffffffff81116120705760051b60200190565b67ffffffffffffffff811161207057601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926121a682612160565b916121b46040519384612107565b8294818452818301116108aa578281602093846000960137010152565b80518210156121e55760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3360009081527fef9918e9f9e4997a18c4af2b1e5d12e951b235fb22a6494f442bcce7d7e047c0602090815260408083205490927f0833596c19f8afe7d32bf2c778d80a2e2b0dcaa54c9ed6c8df6d646a481f4f899160ff16156122785750505050565b6122813361295c565b9184519061228e826120eb565b604282528482019260603685378251156124bf5760308453825190600191600110156124bf5790607860218501536041915b8183116123f45750505061239857604861239493869361235e9361234f98519889937f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008a86015261231a815180928c603789019101611fed565b8401917f206973206d697373696e6720726f6c6520000000000000000000000000000000603784015251809386840190611fed565b01036028810187520185612107565b519283927f08c379a000000000000000000000000000000000000000000000000000000000845260048401526024830190612010565b0390fd5b6064848651907f08c379a000000000000000000000000000000000000000000000000000000000825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015612492577f3031323334353637383961626364656600000000000000000000000000000000901a612431858761294b565b5360041c928015612465577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0191906122c0565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024837f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526032600452fd5b3360009081527f7d7ffb7a348e1c6a02869081a26547b49160dd3df72d1d75a570eb9b698292ec602090815260408083205490927fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217759160ff16156125505750505050565b6125593361295c565b91845190612566826120eb565b604282528482019260603685378251156124bf5760308453825190600191600110156124bf5790607860218501536041915b8183116125f25750505061239857604861239493869361235e9361234f98519889937f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008a86015261231a815180928c603789019101611fed565b909192600f81166010811015612492577f3031323334353637383961626364656600000000000000000000000000000000901a61262f858761294b565b5360041c928015612465577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019190612598565b600090808252602090828252604092838120338252835260ff84822054161561268c5750505050565b6126953361295c565b918451906126a2826120eb565b604282528482019260603685378251156124bf5760308453825190600191600110156124bf5790607860218501536041915b81831161272e5750505061239857604861239493869361235e9361234f98519889937f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008a86015261231a815180928c603789019101611fed565b909192600f81166010811015612492577f3031323334353637383961626364656600000000000000000000000000000000901a61276b858761294b565b5360041c928015612465577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0191906126d4565b6040805167ffffffffffffffff9291906101008101848111828210176120705760405260078152809360005b60e081106127d95750505050565b835190848201918083108484111761207057602092865260008152826000818301528286010152016127cb565b519063ffffffff821682036108aa57565b91908260409103126108aa57612838602061283184612806565b9301612806565b90565b519067ffffffffffffffff821682036108aa57565b51906fffffffffffffffffffffffffffffffff821682036108aa57565b519060ff821682036108aa57565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff6040842054166128b957505050565b8083528260205260408320828452602052604083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b3d15612946573d9061292c82612160565b9161293a6040519384612107565b82523d6000602084013e565b606090565b9081518110156121e5570160200190565b60405190612969826120bb565b602a82526020820160403682378251156121e557603090538151600190600110156121e557607860218401536029905b808211612a075750506129a95790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015612aa4577f3031323334353637383961626364656600000000000000000000000000000000901a612a43848661294b565b5360041c918015612a76577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190612999565b602460007f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b602460007f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b91929015612b4d5750815115612ae6575090565b3b15612aef5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015612b605750805190602001fd5b612394906040519182917f08c379a000000000000000000000000000000000000000000000000000000000835260206004840152602483019061201056fea2646970667358221220bb7cb3c40586de92915c8be8dfc2e55e82bb66d5797dbac994b4b4e568b2c6c864736f6c634300081800332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type TokenVertexUpdaterGovernorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenVertexUpdaterGovernorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenVertexUpdaterGovernor__factory extends ContractFactory {
  constructor(...args: TokenVertexUpdaterGovernorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _admin: PromiseOrValue<string>,
    _tokenVertexUpdater: PromiseOrValue<string>,
    _poolFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenVertexUpdaterGovernor> {
    return super.deploy(
      _admin,
      _tokenVertexUpdater,
      _poolFactory,
      overrides || {}
    ) as Promise<TokenVertexUpdaterGovernor>;
  }
  override getDeployTransaction(
    _admin: PromiseOrValue<string>,
    _tokenVertexUpdater: PromiseOrValue<string>,
    _poolFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _admin,
      _tokenVertexUpdater,
      _poolFactory,
      overrides || {}
    );
  }
  override attach(address: string): TokenVertexUpdaterGovernor {
    return super.attach(address) as TokenVertexUpdaterGovernor;
  }
  override connect(signer: Signer): TokenVertexUpdaterGovernor__factory {
    return super.connect(signer) as TokenVertexUpdaterGovernor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenVertexUpdaterGovernorInterface {
    return new utils.Interface(_abi) as TokenVertexUpdaterGovernorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenVertexUpdaterGovernor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenVertexUpdaterGovernor;
  }
}