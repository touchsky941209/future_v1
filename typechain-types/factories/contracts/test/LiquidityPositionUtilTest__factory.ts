/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LiquidityPositionUtilTest,
  LiquidityPositionUtilTestInterface,
} from "../../../contracts/test/LiquidityPositionUtilTest";

const _abi = [
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
        components: [
          {
            internalType: "uint128",
            name: "margin",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "entryUnrealizedLoss",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryRealizedProfitGrowthX64",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "entryTime",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        internalType: "struct IPoolLiquidityPosition.LiquidityPosition",
        name: "_positionCache",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "lastZeroLossTime",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "liquidityTimesUnrealizedLoss",
            type: "uint256",
          },
        ],
        internalType:
          "struct IPoolLiquidityPosition.GlobalUnrealizedLossMetrics",
        name: "_metricsCache",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "_globalLiquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_unrealizedLoss",
        type: "uint256",
      },
    ],
    name: "calculatePositionUnrealizedLoss",
    outputs: [
      {
        internalType: "uint128",
        name: "positionUnrealizedLoss",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "netSize",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidationBufferNetSize",
            type: "uint128",
          },
          {
            internalType: "uint160",
            name: "entryPriceX96",
            type: "uint160",
          },
          {
            internalType: "Side",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "realizedProfitGrowthX64",
            type: "uint256",
          },
        ],
        internalType: "struct IPoolLiquidityPosition.GlobalLiquidityPosition",
        name: "_positionCache",
        type: "tuple",
      },
      {
        internalType: "Side",
        name: "_side",
        type: "uint8",
      },
      {
        internalType: "uint160",
        name: "_tradePriceX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "_sizeDelta",
        type: "uint128",
      },
    ],
    name: "calculateRealizedPnLAndNextEntryPriceX96",
    outputs: [
      {
        internalType: "int256",
        name: "realizedPnL",
        type: "int256",
      },
      {
        internalType: "uint160",
        name: "entryPriceAfterX96",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "margin",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "entryUnrealizedLoss",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryRealizedProfitGrowthX64",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "entryTime",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        internalType: "struct IPoolLiquidityPosition.LiquidityPosition",
        name: "_positionCache",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "netSize",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidationBufferNetSize",
            type: "uint128",
          },
          {
            internalType: "uint160",
            name: "entryPriceX96",
            type: "uint160",
          },
          {
            internalType: "Side",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "realizedProfitGrowthX64",
            type: "uint256",
          },
        ],
        internalType: "struct IPoolLiquidityPosition.GlobalLiquidityPosition",
        name: "_globalPositionCache",
        type: "tuple",
      },
    ],
    name: "calculateRealizedProfit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Side",
        name: "_side",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "_netSize",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_netLiquidity",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "_indexPriceX96",
        type: "uint160",
      },
      {
        internalType: "int256",
        name: "_riskBufferFund",
        type: "int256",
      },
    ],
    name: "calculateUnrealizedLoss",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "lastZeroLossTime",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "liquidityTimesUnrealizedLoss",
            type: "uint256",
          },
        ],
        internalType:
          "struct IPoolLiquidityPosition.GlobalUnrealizedLossMetrics",
        name: "_metricsCache",
        type: "tuple",
      },
    ],
    name: "calculateWAMUnrealizedLoss",
    outputs: [
      {
        internalType: "uint256",
        name: "wamUnrealizedLoss",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "_indexPriceX96",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_liquidityDelta",
        type: "uint128",
      },
    ],
    name: "decreaseRiskBufferFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deleteMetrics",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "margin",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "entryUnrealizedLoss",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryRealizedProfitGrowthX64",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "entryTime",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        internalType: "struct IPoolLiquidityPosition.LiquidityPosition",
        name: "_positionCache",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "lastZeroLossTime",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "liquidityTimesUnrealizedLoss",
            type: "uint256",
          },
        ],
        internalType:
          "struct IPoolLiquidityPosition.GlobalUnrealizedLossMetrics",
        name: "_metricsCache",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "_globalLiquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_unrealizedLoss",
        type: "uint256",
      },
    ],
    name: "getGasCostCalculatePositionUnrealizedLoss",
    outputs: [
      {
        internalType: "uint256",
        name: "gasCost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "netSize",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidationBufferNetSize",
            type: "uint128",
          },
          {
            internalType: "uint160",
            name: "entryPriceX96",
            type: "uint160",
          },
          {
            internalType: "Side",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "realizedProfitGrowthX64",
            type: "uint256",
          },
        ],
        internalType: "struct IPoolLiquidityPosition.GlobalLiquidityPosition",
        name: "_positionCache",
        type: "tuple",
      },
      {
        internalType: "Side",
        name: "_side",
        type: "uint8",
      },
      {
        internalType: "uint160",
        name: "_tradePriceX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "_sizeDelta",
        type: "uint128",
      },
    ],
    name: "getGasCostCalculateRealizedPnLAndNextEntryPriceX96",
    outputs: [
      {
        internalType: "uint256",
        name: "gasCost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "_indexPriceX96",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_liquidityDelta",
        type: "uint128",
      },
    ],
    name: "getGasCostDecreaseRiskBufferFundPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "gasCost",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_liquidityDelta",
        type: "uint128",
      },
    ],
    name: "getGasCostIncreaseRiskBufferFundPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "gasCost",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "globalLiquidityPosition",
    outputs: [
      {
        internalType: "uint128",
        name: "netSize",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidationBufferNetSize",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "entryPriceX96",
        type: "uint160",
      },
      {
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "realizedProfitGrowthX64",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalRiskBufferFund",
    outputs: [
      {
        internalType: "int256",
        name: "riskBufferFund",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "_indexPriceX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "_riskBufferFundDelta",
        type: "uint128",
      },
    ],
    name: "govUseRiskBufferFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_liquidityDelta",
        type: "uint128",
      },
    ],
    name: "increaseRiskBufferFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "metrics",
    outputs: [
      {
        internalType: "uint64",
        name: "lastZeroLossTime",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "liquidityTimesUnrealizedLoss",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "positionLiquidityAfter",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "riskBufferFundAfter",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    ],
    name: "riskBufferFundPositions",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "unlockTime",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_liquidity",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_netSize",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "_entryPriceX96",
        type: "uint160",
      },
      {
        internalType: "Side",
        name: "_side",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_realizedProfitGrowthX64",
        type: "uint256",
      },
    ],
    name: "setGlobalLiquidityPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_riskBufferFund",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_liquidity",
        type: "uint256",
      },
    ],
    name: "setGlobalRiskBufferFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_liquidity",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "_unlockTime",
        type: "uint64",
      },
    ],
    name: "setRiskBufferFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTimeAfter",
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
        internalType: "uint256",
        name: "_currentUnrealizedLoss",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_currentTimestamp",
        type: "uint64",
      },
      {
        internalType: "int256",
        name: "_liquidityDelta",
        type: "int256",
      },
      {
        internalType: "uint64",
        name: "_liquidityDeltaEntryTime",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "_liquidityDeltaEntryUnrealizedLoss",
        type: "uint256",
      },
    ],
    name: "updateUnrealizedLossMetrics",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657611da4908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b6000803560e01c806302816b2c146112535780630dc670431461122657806325840c331461110057806333b35d5014610f8657806339c341b914610e105780633bcb9f8714610dce578063578cb6ca14610c675780635de835af14610be15780636dfc2fcc146109d45780637eed9edf146108c15780637f23b5061461083c57806380ce9a83146107115780638348e2b7146106d9578063882ace5e146105e757806389d09b2f146105985780638ea80263146104855780638f89b28d146104615780639095e2a614610424578063a04748f6146103bd578063a85fc2a914610325578063a861f99a146102e4578063d3fe364b14610296578063e6814a0b1461025d5763fd4337581461012857600080fd5b3461025a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025a5761015e61137e565b90606061016961135f565b925a956101e3865195869384937f9a634e9600000000000000000000000000000000000000000000000000000000855284019092916fffffffffffffffffffffffffffffffff60609173ffffffffffffffffffffffffffffffffffffffff6080850196600686526008602087015216604085015216910152565b038173__$6ec17ac29a7318fe877a8bd1e5b329a481$__5af490811561024f57509261021991602094610220575b505a906115e9565b9051908152f35b6102419060603d606011610248575b61023981836112fa565b81019061165f565b5050610211565b503d61022f565b8351903d90823e3d90fd5b80fd5b503461025a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025a578080558060015580f35b5090346102e057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e05760209067ffffffffffffffff60095460801c169051908152f35b5080fd5b50919034610321577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e0573560065560243560075580f35b8280fd5b5091903461032157827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103215760c092506002549060ff6fffffffffffffffffffffffffffffffff938460035491541692600554948151968116875260801c602087015273ffffffffffffffffffffffffffffffffffffffff82169086015260a01c166060840152608083015260a0820152f35b5090346102e057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e0576060915490600154906fffffffffffffffffffffffffffffffff81519367ffffffffffffffff81168552821c166020840152820152f35b5090346102e057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e057602090600a549051908152f35b5090346102e05760209061021961021161047a366114b0565b919392935a946118c7565b50913461032157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610321576fffffffffffffffffffffffffffffffff6104ce61137e565b73ffffffffffffffffffffffffffffffffffffffff6104eb61135f565b9160028651957fe7be6b350000000000000000000000000000000000000000000000000000000087528601526006602486015216604484015216606482015260208160848173__$6ec17ac29a7318fe877a8bd1e5b329a481$__5af491821561058f5750829161055d575b50600a5580f35b90506020813d602011610587575b81610578602093836112fa565b810103126102e0575138610556565b3d915061056b565b513d84823e3d90fd5b5090346102e057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e0576020906fffffffffffffffffffffffffffffffff600954169051908152f35b503461025a5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025a57823560ff811681036102e05761062b61135f565b61063361133b565b916064359173ffffffffffffffffffffffffffffffffffffffff831683036106d5579061067792916fffffffffffffffffffffffffffffffff6084359516916119ba565b8282820192831291129080158216911516176106a957602093508181126106a15750905b51908152f35b90039061069b565b6024826011867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8480fd5b5090346102e0576020906fffffffffffffffffffffffffffffffff610709610700366114b0565b929190916118c7565b915191168152f35b509190346103215760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103215761074b61137e565b9061075461135f565b906044359267ffffffffffffffff808516809503610838578251958684019182118783101761080c57509073ffffffffffffffffffffffffffffffffffffffff9183526fffffffffffffffffffffffffffffffff809416865260208601948552168552600860205284209251167fffffffffffffffff00000000000000000000000000000000000000000000000077ffffffffffffffff000000000000000000000000000000008454935160801b1692161717905580f35b8760416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8680fd5b503461025a5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025a57815192610878846112de565b3567ffffffffffffffff811681036102e0578352602435906fffffffffffffffffffffffffffffffff8216820361025a5750826102199160208095015260443583820152611890565b5082346102e05760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e0578035906fffffffffffffffffffffffffffffffff8083168093036109d05761091861135f565b6044359373ffffffffffffffffffffffffffffffffffffffff85168095036109cc576064359060ff82168203610838577fffffffffffffffffffffff0000000000000000000000000000000000000000009374ff000000000000000000000000000000000000000093600354967fffffffffffffffffffffffffffffffff0000000000000000000000000000000093848254161790551690600254161760025560a01b169116171760035560843560055580f35b8580fd5b8380fd5b5091346103215760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610321576024359167ffffffffffffffff8084168094036106d557604435916064359180831680930361083857608435928535610a6c575050505050507fffffffffffffffff0000000000000000000000000000000000000000000000008254161781558060015580f35b909192939496809650549182161080610bd8575b610a8e575b50505050905080f35b84841315610b5a57508354901c6fffffffffffffffffffffffffffffffff90811683821601908111610b2e57610b2093945090610b13610b1893927fffffffffffffffff00000000000000000000000000000000ffffffffffffffff77ffffffffffffffffffffffffffffffff00000000000000006000549260401b16911617600055565b611870565b600154611883565b6001555b8038808080610a85565b6024846011877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b90939450610bcb91928503936fffffffffffffffffffffffffffffffff8092818716921c1603167fffffffffffffffff00000000000000000000000000000000ffffffffffffffff77ffffffffffffffffffffffffffffffff00000000000000006000549260401b16911617600055565b0260015403600155610b24565b50831515610a80565b5090346102e05760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e057809173ffffffffffffffffffffffffffffffffffffffff610c3161137e565b1681526008602052205467ffffffffffffffff8251916fffffffffffffffffffffffffffffffff8116835260801c166020820152f35b5091903461032157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610321576060610ca261137e565b610caa61135f565b83517f9a634e9600000000000000000000000000000000000000000000000000000000815260069581019586526008602087015273ffffffffffffffffffffffffffffffffffffffff90921660408601526fffffffffffffffffffffffffffffffff1660608501529283908190608001038173__$6ec17ac29a7318fe877a8bd1e5b329a481$__5af490811561058f5750829083928491610da9575b50600a557fffffffffffffffff00000000000000000000000000000000000000000000000077ffffffffffffffff000000000000000000000000000000006fffffffffffffffffffffffffffffffff60095493169360801b169116171760095580f35b915050610dc5915060603d6060116102485761023981836112fa565b91909138610d46565b503461025a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025a575060065460075482519182526020820152f35b503461025a577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360161018081126102e05760c01361025a57815192610e5584611293565b35906fffffffffffffffffffffffffffffffff9182811681036102e05784526024359382851685036102e05760208101948552604435848201526060810191606435835260843567ffffffffffffffff811681036102e057608083015260a43573ffffffffffffffffffffffffffffffffffffffff9283821682036103215760a0015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3c36011261025a57845191610f0e83611293565b60c435858116810361032157835260e43585811681036103215760208401526101043590811681036102e057858301526101243560ff811681036102e05760608301526101443590848216820361025a5750602095928260a09260806102199795015261016435928391015251900391511690611b4e565b509190346103215760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103215780610fc161137e565b610fc961148d565b93611059610fd561133b565b845196879485947f8698ec8600000000000000000000000000000000000000000000000000000000865285019193926fffffffffffffffffffffffffffffffff9060a09260c085019660028652600660208701526008604087015273ffffffffffffffffffffffffffffffffffffffff809216606087015216608085015216910152565b038173__$6ec17ac29a7318fe877a8bd1e5b329a481$__5af480156110f6576fffffffffffffffffffffffffffffffff92849285926110c5575b5050600a55167fffffffffffffffffffffffffffffffff00000000000000000000000000000000600954161760095580f35b6110e8935080919250903d106110ef575b6110e081836112fa565b810190611642565b3880611093565b503d6110d6565b81513d85823e3d90fd5b503461025a5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025a5761113861137e565b908261114261148d565b9261114b61133b565b956111d55a97845196879485947f8698ec8600000000000000000000000000000000000000000000000000000000865285019193926fffffffffffffffffffffffffffffffff9060a09260c085019660028652600660208701526008604087015273ffffffffffffffffffffffffffffffffffffffff809216606087015216608085015216910152565b038173__$6ec17ac29a7318fe877a8bd1e5b329a481$__5af490811561024f5750926102199160209461120a57505a906115e9565b61122090843d86116110ef576110e081836112fa565b50610211565b5090346102e05760209061021961124a61123f366113a1565b919392935a94611693565b50505a906115e9565b503461025a575073ffffffffffffffffffffffffffffffffffffffff61128461127b366113a1565b92919091611693565b83519182529091166020820152f35b60c0810190811067ffffffffffffffff8211176112af57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6060810190811067ffffffffffffffff8211176112af57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176112af57604052565b604435906fffffffffffffffffffffffffffffffff8216820361135a57565b600080fd5b602435906fffffffffffffffffffffffffffffffff8216820361135a57565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361135a57565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc01610120811261135a5760c01361135a576040516113df81611293565b6fffffffffffffffffffffffffffffffff600435818116810361135a578252602435818116810361135a57602083015273ffffffffffffffffffffffffffffffffffffffff91604435838116810361135a57604082015260643560ff8116810361135a576060820152608435828116810361135a57608082015260a43560a08201529260c43560ff8116810361135a579260e435908116810361135a579161010435908116810361135a5790565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361135a57565b907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201610160811261135a5760c01361135a57604051906114f182611293565b6fffffffffffffffffffffffffffffffff91600435838116810361135a578152602435838116810361135a5760208201526044356040820152606435606082015267ffffffffffffffff90608435828116810361135a57608082015260a43573ffffffffffffffffffffffffffffffffffffffff8116810361135a57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3c9160a0606094015295011261135a57604051906115ab826112de565b60c435908116810361135a57815260e435838116810361135a5760208201526101043560408201529161012435908116810361135a57906101443590565b919082039182116115f657565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b51906fffffffffffffffffffffffffffffffff8216820361135a57565b919082604091031261135a57602061165983611625565b92015190565b9081606091031261135a5761167381611625565b91602082015167ffffffffffffffff8116810361135a5760409092015190565b939160009460009273ffffffffffffffffffffffffffffffffffffffff9182604082015116966fffffffffffffffffffffffffffffffff808351168160208501511601928390841515908161185c575b50611809575b50808216918215948515611703575b505050505050505050565b9899979896979660ff166001036117fd5781611720600295611a72565b918217166117405750505050505050505b903880808080808080806116f8565b9793949596971693841560001461175d5750505050505050611731565b1561176e5750505050509050611731565b61179785976117918761178960ff97996001999b168b611870565b921684611870565b90611883565b9501935016036117ef576117aa91611b00565b8181116117b75716611731565b604490604051907f6dfcc65000000000000000000000000000000000000000000000000000000000825260a060048301526024820152fd5b6117f891611ac7565b6117aa565b81611720600195611a72565b9286929a50818b8b838383161160001461184f578291506118318285169687925b838b6119ba565b9d031693168091039314611846575b386116e9565b97508597611840565b611831839296879261182a565b60ff9150606001511660ff861614386116e3565b818102929181159184041417156115f657565b919082018092116115f657565b906000916fffffffffffffffffffffffffffffffff60208201511690816118b5575050565b6118c492935060400151611b00565b90565b939192909260009367ffffffffffffffff80608088015116908251161060001461193b57506040850151808311611901575b505050909150565b6119329450602061192d94966fffffffffffffffffffffffffffffffff91829101511692169203611d21565b611a72565b813880806118f9565b909294916020945061194c82611890565b916fffffffffffffffffffffffffffffffff80968192015116850316928282116000146119a557918561199761192d6119a09694602061192d9701988585808c511692169203611d21565b95511690611d21565b011690565b602001516118c49561192d9550169150611d21565b9192909160ff16600103611a2f5773ffffffffffffffffffffffffffffffffffffffff928184168185161115611a1057926fffffffffffffffffffffffffffffffff91611a0a9403169116611d4b565b60000390565b6118c493910316906fffffffffffffffffffffffffffffffff16611c14565b73ffffffffffffffffffffffffffffffffffffffff92908381168483161015611a1057926fffffffffffffffffffffffffffffffff91611a0a9403169116611d4b565b6fffffffffffffffffffffffffffffffff90818111611a8f571690565b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252608060048301526024820152fd5b8115611ad1570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8115611b445780611b12575050600090565b6001917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b409201611ac7565b0190565b906118c491611ac7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8282099082810292838084109303928084039314611c0b57680100000000000000009183831115611bad570990828211900360c01b910360401c1790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d6174683a206d756c446976206f766572666c6f7700000000000000000000006044820152fd5b50505060401c90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8282099082810292838084109303928084039314611c77576c010000000000000000000000009183831115611bad570990828211900360a01b910360601c1790565b50505060601c90565b917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8284099282810292838086109503948086039514611d145784831115611bad578291096001821901821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b5050906118c49250611ac7565b9190611d2e828285611c80565b928215611ad15709611d3d5790565b600181018091116115f65790565b906c0100000000000000000000000090611d658184611c14565b9209611d3d579056fea2646970667358221220d5d514c1db67770828e5b6bbe6ebdd8e3a83128aa67a89692a2df3693553096264736f6c63430008180033";

type LiquidityPositionUtilTestConstructorParams =
  | [
      linkLibraryAddresses: LiquidityPositionUtilTestLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityPositionUtilTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class LiquidityPositionUtilTest__factory extends ContractFactory {
  constructor(...args: LiquidityPositionUtilTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        LiquidityPositionUtilTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: LiquidityPositionUtilTestLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$6ec17ac29a7318fe877a8bd1e5b329a481\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/LiquidityPositionUtil.sol:LiquidityPositionUtil"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidityPositionUtilTest> {
    return super.deploy(overrides || {}) as Promise<LiquidityPositionUtilTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityPositionUtilTest {
    return super.attach(address) as LiquidityPositionUtilTest;
  }
  override connect(signer: Signer): LiquidityPositionUtilTest__factory {
    return super.connect(signer) as LiquidityPositionUtilTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityPositionUtilTestInterface {
    return new utils.Interface(_abi) as LiquidityPositionUtilTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityPositionUtilTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidityPositionUtilTest;
  }
}

export interface LiquidityPositionUtilTestLibraryAddresses {
  ["contracts/libraries/LiquidityPositionUtil.sol:LiquidityPositionUtil"]: string;
}
