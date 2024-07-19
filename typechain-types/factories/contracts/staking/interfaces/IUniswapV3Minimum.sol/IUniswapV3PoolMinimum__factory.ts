/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3PoolMinimum,
  IUniswapV3PoolMinimumInterface,
} from "../../../../../contracts/staking/interfaces/IUniswapV3Minimum.sol/IUniswapV3PoolMinimum";

const _abi = [
  {
    inputs: [],
    name: "slot0",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "uint16",
        name: "observationIndex",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "observationCardinality",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "observationCardinalityNext",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "feeProtocol",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUniswapV3PoolMinimum__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3PoolMinimumInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolMinimumInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3PoolMinimum {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3PoolMinimum;
  }
}