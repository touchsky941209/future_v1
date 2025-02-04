/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILiquidator,
  ILiquidatorInterface,
} from "../../../../contracts/plugins/interfaces/ILiquidator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "ExecutorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IPool",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationExecutionFee",
        type: "uint64",
      },
    ],
    name: "PositionClosedByLiquidator",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "feeReceiver",
        type: "address",
      },
    ],
    name: "liquidateLiquidityPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "feeReceiver",
        type: "address",
      },
    ],
    name: "liquidatePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "updateExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILiquidator__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidatorInterface {
    return new utils.Interface(_abi) as ILiquidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILiquidator {
    return new Contract(address, _abi, signerOrProvider) as ILiquidator;
  }
}
