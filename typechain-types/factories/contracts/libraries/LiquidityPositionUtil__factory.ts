/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LiquidityPositionUtil,
  LiquidityPositionUtilInterface,
} from "../../../contracts/libraries/LiquidityPositionUtil";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredLiquidity",
        type: "uint256",
      },
    ],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "unrealizedLoss",
        type: "int256",
      },
      {
        internalType: "uint128",
        name: "requiredRiskBufferFund",
        type: "uint128",
      },
    ],
    name: "InsufficientRiskBufferFund",
    type: "error",
  },
  {
    inputs: [],
    name: "RiskBufferFundLoss",
    type: "error",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeCastOverflowedUintToInt",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "requiredUnlockTime",
        type: "uint64",
      },
    ],
    name: "UnlockTimeNotReached",
    type: "error",
  },
] as const;

const _bytecode =
  "0x6080806040523461001c5761091a908161002282393081600a0152f35b600080fdfe6080604090808252307f000000000000000000000000000000000000000000000000000000000000000014916004928336101561003b57600080fd5b600092833560e01c9081638698ec86146103a3575080639a634e96146101e15763e7be6b351461006a57600080fd5b6101dd5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101dd576024359280356100a6610604565b906100ff6100b261062c565b9260018301549254926100dc6fffffffffffffffffffffffffffffffff94858160801c911661064b565b60ff73ffffffffffffffffffffffffffffffffffffffff83169260a01c166106d3565b85811261017e575061011885915b8754931680936106ba565b9461013961012683886106ba565b61013360018a015461078e565b906106ba565b1261014c57505050816020935551908152f35b60449351927fe92a6c1b0000000000000000000000000000000000000000000000000000000084528301526024820152fd5b7f800000000000000000000000000000000000000000000000000000000000000081146101b1576101189086039161010d565b6024866011867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5080fd5b506101dd5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101dd5782359061021b610604565b61022361062c565b936fffffffffffffffffffffffffffffffff918286169060018601805490838201809211610377575573ffffffffffffffffffffffffffffffffffffffff16825260243560205283822080549661027c9085891661064b565b9367ffffffffffffffff94854211610342576276a7008642160194868611610316575060609950906103039392911697887fffffffffffffffff00000000000000000000000000000000000000000000000077ffffffffffffffff000000000000000000000000000000008760801b169216171790556102fd86549161078e565b9061069e565b8094558251948552166020840152820152f35b8060118c7f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b60448a888051917f6dfcc650000000000000000000000000000000000000000000000000000000008352820152426024820152fd5b60248560118c7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b838587856101dd5760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101dd57606435916024359173ffffffffffffffffffffffffffffffffffffffff916044358235848716870361060057608435968588168098036105fc5760a435906fffffffffffffffffffffffffffffffff92838316978884036105f8578a8752856020528c8c88208d820167ffffffffffffffff928110838211176105cc578e52548681168f5260801c1660208e018190524281101561059d5750848d5116898110610568575091816104af9360ff61049b60016104a89601549354898160801c911661064b565b9183169260a01c166106d3565b885461069e565b94846104c360018a0197610133895461078e565b126105415750816104fc9798999a511603169688881560001461050b57508252602052868120555b81815403905561013383549161078e565b80915582519182526020820152f35b929190825260205220857fffffffffffffffffffffffffffffffff000000000000000000000000000000008254161790556104eb565b89517fadbae2df000000000000000000000000000000000000000000000000000000008152fd5b888a6044928f51927fa17e11d50000000000000000000000000000000000000000000000000000000084528301526024820152fd5b886024918e51917f93221bd2000000000000000000000000000000000000000000000000000000008352820152fd5b60248a60418d7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8680fd5b8380fd5b8280fd5b6044359073ffffffffffffffffffffffffffffffffffffffff8216820361062757565b600080fd5b606435906fffffffffffffffffffffffffffffffff8216820361062757565b9190916fffffffffffffffffffffffffffffffff8080941691160191821161066f57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9190916000838201938412911290801582169115161761066f57565b8181039291600013801582851316918412161761066f57565b9192909160ff1660010361074b5773ffffffffffffffffffffffffffffffffffffffff92818416818516111561072957926fffffffffffffffffffffffffffffffff9161072394031691166108b3565b60000390565b61074893910316906fffffffffffffffffffffffffffffffff166107e9565b90565b73ffffffffffffffffffffffffffffffffffffffff9290838116848316101561072957926fffffffffffffffffffffffffffffffff9161072394031691166108b3565b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81116107b85790565b602490604051907f24775e060000000000000000000000000000000000000000000000000000000082526004820152fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82820990828102928380841093039280840393146108aa576c01000000000000000000000000918383111561084c570990828211900360a01b910360601c1790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d6174683a206d756c446976206f766572666c6f7700000000000000000000006044820152fd5b50505060601c90565b906c01000000000000000000000000906108cd81846107e9565b92096108d65790565b6001810180911161066f579056fea2646970667358221220778ef6a6880e414bc8ed991ae8e4b640b4be448883e59a3f56b52037ff450c3864736f6c63430008180033";

type LiquidityPositionUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityPositionUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityPositionUtil__factory extends ContractFactory {
  constructor(...args: LiquidityPositionUtilConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidityPositionUtil> {
    return super.deploy(overrides || {}) as Promise<LiquidityPositionUtil>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityPositionUtil {
    return super.attach(address) as LiquidityPositionUtil;
  }
  override connect(signer: Signer): LiquidityPositionUtil__factory {
    return super.connect(signer) as LiquidityPositionUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityPositionUtilInterface {
    return new utils.Interface(_abi) as LiquidityPositionUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityPositionUtil {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidityPositionUtil;
  }
}
