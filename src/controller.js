import web3 from "./web3";
const address = "0xBc20FC1b2EcFE46DB9e61B4ad246FA16b1E89DfA";
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      },
      {
        name: "lockTime",
        type: "uint256"
      }
    ],
    name: "lock",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_driver",
        type: "address"
      },
      {
        name: "_ID",
        type: "string"
      },
      {
        name: "_rate",
        type: "uint256"
      }
    ],
    name: "registerDriver",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "tripAccept",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_driverKey",
        type: "address"
      }
    ],
    name: "tripCompletion",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "tripCompletionRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_driverKey",
        type: "address"
      },
      {
        name: "_cost",
        type: "uint256"
      },
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "tripEnd",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_ID",
        type: "string"
      }
    ],
    name: "tripRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_rideNumber",
        type: "uint256"
      },
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_driverKey",
        type: "address"
      },
      {
        name: "_cost",
        type: "uint256"
      }
    ],
    name: "tripStart",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "index",
        type: "uint256"
      },
      {
        name: "_driver",
        type: "address"
      }
    ],
    name: "unlock",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_rate",
        type: "uint256"
      }
    ],
    name: "updateDriverRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "ID",
        type: "string"
      },
      {
        indexed: false,
        name: "passengerAcct",
        type: "address"
      }
    ],
    name: "tripStartRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      },
      {
        indexed: false,
        name: "rate",
        type: "uint256"
      }
    ],
    name: "tripStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "ID",
        type: "string"
      },
      {
        indexed: false,
        name: "passengerAcct",
        type: "address"
      }
    ],
    name: "tripEndRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      },
      {
        indexed: false,
        name: "cost",
        type: "uint256"
      }
    ],
    name: "tripCompleted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      }
    ],
    name: "TransferOwnership",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_driver",
        type: "address"
      }
    ],
    name: "getDriver",
    outputs: [
      {
        name: "ID",
        type: "string"
      },
      {
        name: "successfultrips",
        type: "uint256"
      },
      {
        name: "trips",
        type: "uint256"
      },
      {
        name: "rate",
        type: "uint256"
      },
      {
        name: "tripAccepted",
        type: "bool"
      },
      {
        name: "onTrip",
        type: "bool"
      },
      {
        name: "tripEnded",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_passenger",
        type: "address"
      }
    ],
    name: "getPassenger",
    outputs: [
      {
        name: "passengerAddress",
        type: "address"
      },
      {
        name: "ID",
        type: "string"
      },
      {
        name: "driverMet",
        type: "bool"
      },
      {
        name: "tripEnd",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "locker",
    outputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "unlockAfter",
        type: "uint256"
      },
      {
        name: "amount",
        type: "uint256"
      },
      {
        name: "token",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "rideCount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "rides",
    outputs: [
      {
        name: "rideNumber",
        type: "uint256"
      },
      {
        name: "passengerAcct",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "status",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
