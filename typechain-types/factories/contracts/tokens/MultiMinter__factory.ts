/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MultiMinter,
  MultiMinterInterface,
} from "../../../contracts/tokens/MultiMinter";

const _abi = [
  {
    inputs: [],
    name: "Forbidden",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMinter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGov",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "ChangeGovStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGov",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "GovChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGov",
        type: "address",
      },
    ],
    name: "changeGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minters",
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
    name: "pendingGov",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class MultiMinter__factory {
  static readonly abi = _abi;
  static createInterface(): MultiMinterInterface {
    return new utils.Interface(_abi) as MultiMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiMinter {
    return new Contract(address, _abi, signerOrProvider) as MultiMinter;
  }
}