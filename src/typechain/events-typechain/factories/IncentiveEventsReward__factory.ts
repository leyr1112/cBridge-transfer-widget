/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IncentiveEventsReward, IncentiveEventsRewardInterface } from "../IncentiveEventsReward";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_celerTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "IncentiveRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contribution",
        type: "uint256",
      },
    ],
    name: "IncentiveRewardContributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "CELER_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimDeadlines",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimedRewardAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "contributeToRewardPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "drainToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardSigner",
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
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "setClaimDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161165938038061165983398101604081905261002f916100ac565b6000805460ff1916905561004233610053565b6001600160a01b03166080526100dc565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b6000602082840312156100be57600080fd5b81516001600160a01b03811681146100d557600080fd5b9392505050565b60805161154d61010c600039600081816101ef015281816102bb015281816103e90152610781015261154d6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636c19e78311610097578063960dc08a11610066578063960dc08a146101ea578063a5e2c49014610211578063b8d2ce7f1461023c578063f2fde38b1461024f57600080fd5b80636c19e783146101b1578063715018a6146101c45780638456cb59146101cc5780638da5cb5b146101d457600080fd5b8063323f24ab116100d3578063323f24ab146101555780633f4ba83a146101805780635c975abb1461018857806361519f421461019e57600080fd5b80630a300b09146100fa578063145aa1161461010f5780632b5f3ece14610122575b600080fd5b61010d61010836600461130d565b610262565b005b61010d61011d36600461130d565b61032a565b61014261013036600461130d565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b600154610168906001600160a01b031681565b6040516001600160a01b03909116815260200161014c565b61010d610413565b60005460ff16604051901515815260200161014c565b61010d6101ac366004611342565b61047d565b61010d6101bf3660046113d6565b6107f6565b61010d610890565b61010d6108fa565b60005461010090046001600160a01b0316610168565b6101687f000000000000000000000000000000000000000000000000000000000000000081565b61014261021f3660046113f1565b600260209081526000928352604080842090915290825290205481565b61010d61024a36600461141d565b610962565b61010d61025d3660046113d6565b6109d4565b60005460ff16156102ad5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064015b60405180910390fd5b336102e36001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016823085610ab9565b806001600160a01b03167fae26f78c6f6f1b85c2d212321268551fd9253c29c002447a2d5fd92743134e838360405161031e91815260200190565b60405180910390a25050565b60005460ff1661037c5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016102a4565b6000546001600160a01b036101009091041633146103dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b6104106001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610b57565b50565b6000546001600160a01b036101009091041633146104735760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b61047b610b8c565b565b60005460ff16156104c35760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016102a4565b6000848152600360205260409020548061051f5760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206576656e744964000000000000000000000000000000000060448201526064016102a4565b8042111561056f5760405162461bcd60e51b815260206004820152600d60248201527f436c61696d20657870697265640000000000000000000000000000000000000060448201526064016102a4565b60408051466020808301919091526bffffffffffffffffffffffff1930606090811b8216848601527f496e63656e74697665526577617264436c61696d00000000000000000000000060548501528a901b166068830152607c8201889052609c8083018890528351808403909101815260bc830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060dc84015260f880840191909152835180840390910181526101189092019092528051910120600061067685858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050610c289050565b6001549091506001600160a01b038083169116146106d65760405162461bcd60e51b815260206004820152600b60248201527f496e76616c69642073696700000000000000000000000000000000000000000060448201526064016102a4565b60008781526002602090815260408083206001600160a01b038c168452909152812054610703908861143f565b9050600081116107555760405162461bcd60e51b815260206004820152600d60248201527f4e6f206e6577207265776172640000000000000000000000000000000000000060448201526064016102a4565b60008881526002602090815260408083206001600160a01b03808e16855292529091208890556107a8907f0000000000000000000000000000000000000000000000000000000000000000168a83610b57565b886001600160a01b03167f249ef50521b37da6ff1df71d2ffd77cba3ab9bb155803daa7ae14a8870f532d4826040516107e391815260200190565b60405180910390a2505050505050505050565b6000546001600160a01b036101009091041633146108565760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000546001600160a01b036101009091041633146108f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b61047b6000610c4c565b6000546001600160a01b0361010090910416331461095a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b61047b610cbc565b6000546001600160a01b036101009091041633146109c25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b60009182526003602052604090912055565b6000546001600160a01b03610100909104163314610a345760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a4565b6001600160a01b038116610ab05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102a4565b61041081610c4c565b6040516001600160a01b0380851660248301528316604482015260648101829052610b519085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610d37565b50505050565b6040516001600160a01b038316602482015260448101829052610b8790849063a9059cbb60e01b90606401610aed565b505050565b60005460ff16610bde5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016102a4565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6000806000610c378585610e1c565b91509150610c4481610e8c565b509392505050565b600080546001600160a01b038381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b60005460ff1615610d025760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016102a4565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c0b3390565b6000610d8c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110479092919063ffffffff16565b805190915015610b875780806020019051810190610daa9190611464565b610b875760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102a4565b600080825160411415610e535760208301516040840151606085015160001a610e4787828585611060565b94509450505050610e85565b825160401415610e7d5760208301516040840151610e7286838361114d565b935093505050610e85565b506000905060025b9250929050565b6000816004811115610ea057610ea0611486565b1415610ea95750565b6001816004811115610ebd57610ebd611486565b1415610f0b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102a4565b6002816004811115610f1f57610f1f611486565b1415610f6d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102a4565b6003816004811115610f8157610f81611486565b1415610fda5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102a4565b6004816004811115610fee57610fee611486565b14156104105760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102a4565b60606110568484600085611195565b90505b9392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156110975750600090506003611144565b8460ff16601b141580156110af57508460ff16601c14155b156110c05750600090506004611144565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611114573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661113d57600060019250925050611144565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831660ff84901c601b0161118787828885611060565b935093505050935093915050565b60608247101561120d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102a4565b843b61125b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102a4565b600080866001600160a01b0316858760405161127791906114c8565b60006040518083038185875af1925050503d80600081146112b4576040519150601f19603f3d011682016040523d82523d6000602084013e6112b9565b606091505b50915091506112c98282866112d4565b979650505050505050565b606083156112e3575081611059565b8251156112f35782518084602001fd5b8160405162461bcd60e51b81526004016102a491906114e4565b60006020828403121561131f57600080fd5b5035919050565b80356001600160a01b038116811461133d57600080fd5b919050565b60008060008060006080868803121561135a57600080fd5b61136386611326565b94506020860135935060408601359250606086013567ffffffffffffffff8082111561138e57600080fd5b818801915088601f8301126113a257600080fd5b8135818111156113b157600080fd5b8960208285010111156113c357600080fd5b9699959850939650602001949392505050565b6000602082840312156113e857600080fd5b61105982611326565b6000806040838503121561140457600080fd5b8235915061141460208401611326565b90509250929050565b6000806040838503121561143057600080fd5b50508035926020909101359150565b60008282101561145f57634e487b7160e01b600052601160045260246000fd5b500390565b60006020828403121561147657600080fd5b8151801515811461105957600080fd5b634e487b7160e01b600052602160045260246000fd5b60005b838110156114b757818101518382015260200161149f565b83811115610b515750506000910152565b600082516114da81846020870161149c565b9190910192915050565b602081526000825180602084015261150381604085016020870161149c565b601f01601f1916919091016040019291505056fea264697066735822122047bc4a50c2f00908a89b8a3a06374e4d6a96cf3bd237b7d1406a0c51cd71c61264736f6c634300080b0033";

export class IncentiveEventsReward__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _celerTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<IncentiveEventsReward> {
    return super.deploy(_celerTokenAddress, overrides || {}) as Promise<IncentiveEventsReward>;
  }
  getDeployTransaction(
    _celerTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_celerTokenAddress, overrides || {});
  }
  attach(address: string): IncentiveEventsReward {
    return super.attach(address) as IncentiveEventsReward;
  }
  connect(signer: Signer): IncentiveEventsReward__factory {
    return super.connect(signer) as IncentiveEventsReward__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncentiveEventsRewardInterface {
    return new utils.Interface(_abi) as IncentiveEventsRewardInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IncentiveEventsReward {
    return new Contract(address, _abi, signerOrProvider) as IncentiveEventsReward;
  }
}
