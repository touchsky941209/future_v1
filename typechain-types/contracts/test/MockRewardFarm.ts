/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MockRewardFarmInterface extends utils.Interface {
  functions: {
    "collectLiquidityRewardBatch(address[],address,address)": FunctionFragment;
    "collectReferralReward(uint256,address)": FunctionFragment;
    "collectReferralRewardBatch(address[],uint256[],address)": FunctionFragment;
    "collectRiskBufferFundRewardBatch(address[],address,address)": FunctionFragment;
    "rewardDebtRes()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "collectLiquidityRewardBatch"
      | "collectReferralReward"
      | "collectReferralRewardBatch"
      | "collectRiskBufferFundRewardBatch"
      | "rewardDebtRes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collectLiquidityRewardBatch",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "collectReferralReward",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "collectReferralRewardBatch",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "collectRiskBufferFundRewardBatch",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardDebtRes",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "collectLiquidityRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectReferralReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectReferralRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectRiskBufferFundRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardDebtRes",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockRewardFarm extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockRewardFarmInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    collectLiquidityRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectReferralReward(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectReferralRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectRiskBufferFundRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewardDebtRes(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  collectLiquidityRewardBatch(
    arg0: PromiseOrValue<string>[],
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectReferralReward(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectReferralRewardBatch(
    arg0: PromiseOrValue<string>[],
    arg1: PromiseOrValue<BigNumberish>[],
    arg2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectRiskBufferFundRewardBatch(
    arg0: PromiseOrValue<string>[],
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewardDebtRes(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    collectLiquidityRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectReferralReward(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectReferralRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectRiskBufferFundRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardDebtRes(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    collectLiquidityRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectReferralReward(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectReferralRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectRiskBufferFundRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewardDebtRes(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    collectLiquidityRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectReferralReward(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectReferralRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectRiskBufferFundRewardBatch(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewardDebtRes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
