const qa = {
  Beginner: {
    channel: "Beginner",
    nums: 6,
    questions: [
      {
        id: 1,
        title:
          "What are the characteristics of Layer 2?",
        options: [
          {
            select: "A",
            des: "Layer 2 offers faster transaction speed than Layer 1",
          },
          {
            select: "B",
            des: "Layer 2 offers lower gas fees than Layer 1",
          },
          {
            select: "C",
            des: "Layer 2 can drive mass adoption",
          },
          {
            select: "D",
            des: "All of the above",
          },
        ],
        score: 10,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "Which of the following descriptions about Rollup is false?",
        options: [
          {
            select: "A",
            des: "Rollup is one of the Layer 2 solutions",
          },
          {
            select: "B",
            des: "According to the different schemes to ensure the validity of the compressed data, Rollup can be divided into ZK Rollup and Optimistic Rollup",
          },
          {
            select: "C",
            des: "zkSync uses the Optimistic Rollup scheme",
          },
          {
            select: "D",
            des: "Rollup offloads transactions from the Ethereum mainnet (Layer 1) to Layer 2 for processing and compression",
          },
        ],
        score: 10,
        answer: "C",
        single: true,
      },
      {
        id: 3,
        title: "Which of the following descriptions about ZK Rollup is true?",
        options: [
          {
            select: "A",
            des: "ZK Rollup is based on zero-knowledge proof",
          },
          {
            select: "B",
            des: "ZK stands for zero knowledge",
          },
          {
            select: "C",
            des: "zkSync uses the ZK Rollup scheme",
          },
          {
            select: "D",
            des: "All of the above",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 4,
        title: "Which of the following descriptions about Optimistic Rollup is false?",
        options: [
          {
            select: "A",
            des: "Optimistic Rollup is a Rollup scheme that uses zero-knowledge proof",
          },
          {
            select: "B",
            des: "Optimistic Rollup optimistically believes that the data posted to the Ethereum mainnet is correct",
          },
          {
            select: "C",
            des: "If anyone observes that the data is wrong, they can issue a challenge during a period",
          },
          {
            select: "D",
            des: "Optimistic Rollup uses fraud proof to make sure that the data finally posted to the Ethereum mainnet is valid",
          },
        ],
        score: 15,
        answer: "A",
        single: true,
      },
      {
        id: 5,
        title: "Which of the following descriptions about Plasma is false? ",
        options: [
          {
            select: "A",
            des: "Plasma supports fast withdrawal",
          },
          {
            select: "B",
            des: "In order to improve transaction throughput, Plasma compresses multiple transactions into one block, and offloads the calculation and storage of transactions off Ethereum mainnet into Plasma chains."
          },
          {
            select: "C",
            des: "Plasma uses zero-knowledge proof to ensure safety",
          },
          {
            select: "D",
            des: "OMG network is based on Plasma",
          },
          {
            select: "E",
            des: "A and C",
          },
        ],
        score: 25,
        answer: "E",
        single: true,
      },
      {
        id: 6,
        title: "Which one is the first Layer 2 solution proposed to scale the Ethereum network?",
        options: [
          {
            select: "A",
            des: "Rollup",
          },
          {
            select: "B",
            des: "Plasma",
          },
          {
            select: "C",
            des: "State Channels",
          },
          {
            select: "D",
            des: "Validium",
          },
        ],
        score: 15,
        answer: "B",
        single: true,
      }
    ],
  },
  Intermediate: {
    channel: 'Intermediate',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "Bridges can be used to transfer assets between_____",
        options: [
          {
            select: "A",
            des: "Layer1 and Layer1",
          },
          {
            select: "B",
            des: "Layer1 and Layer2",
          },
          {
            select: "C",
            des: "Layer2 and Layer2",
          },
          {
            select: "D",
            des: "All of the above"
          }
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "Which of the following is a common implementation of the Layer1 / Layer2 <> Layer2 type bridge?",
        options: [
          {
            select: "A",
            des: "Lock and mint",
          },
          {
            select: "B",
            des: "Burn and mint",
          },
          {
            select: "C",
            des: "Atomic swap",
          },
          {
            select: "D",
            des: "All of the above",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 3,
        title: "Which of the following DApps can’t be used to transfer assets between different networks?",
        options: [
          {
            select: "A",
            des: "Optimism Gateway",
          },
          {
            select: "B",
            des: "Uniswap",
          },
          {
            select: "C",
            des: "Arbitrum Bridge",
          },
          {
            select: "D",
            des: "Hop Protocol",
          },
        ],
        score: 15,
        answer: "B",
        single: true,
      },
      {
        id: 4,
        title: "Which of the following Layer2 solutions uses zero-knowledge proof?",
        options: [
          {
            select: "A",
            des: "Optimism Rollup",
          },
          {
            select: "B",
            des: "ZK Rollup",
          },
          {
            select: "C",
            des: "State Channels",
          },
          {
            select: "D",
            des: "Plasma",
          },
        ],
        score: 15,
        answer: "B",
        single: true,
      },
      {
        id: 5,
        title: "What are the requirements for zero-knowledge proof?",
        options: [
          {
            select: "A",
            des: "Zero knowledge",
          },
          {
            select: "B",
            des: "Completeness",
          },
          {
            select: "C",
            des: "Soundness",
          },
          {
            select: "D",
            des: "All of the above",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 6,
        title: "Which of the following statements is false about single-round interactive fraud proof and multi-round interactive fraud proof?",
        options: [
          {
            select: "A",
            des: "Higher cost of on-chain computing for single-round interactive fraud proof",
          },
          {
            select: "B",
            des: "Longer challenge period for single-round interactive fraud proof",
          },
          {
            select: "C",
            des: "Multi-round interactive fraud proof is suitable for complex smart contracts",
          },
          {
            select: "D",
            des: "Both require a replay of the disputed transaction on Layer1",
          },
        ],
        score: 25,
        answer: "B",
        single: true,
      },
    ]
  },
  Advanced: {
    channel: 'imKey',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "Which of the following Layer 2 networks does imToken support?",
        options: [
          {
            select: "A",
            des: "Optimism",
          },
          {
            select: "B",
            des: "Arbitrum",
          },
          {
            select: "C",
            des: "zkSync",
          },
          {
            select: "D",
            des: "All of the above"
          }
        ],
        score: 10,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "How do I enable the zkSync wallet in imToken?",
        options: [
          {
            select: "A",
            des: "Open your ETH wallet then click “Ethereum” at the top. Choose “zkSync” in the pop-up to switch to the zkSync network.",
          },
          {
            select: "B",
            des: `Open imToken's ETH wallet, click "My Profile" - "Explore", and enable the Layer 2 function.`,
          },
        ],
        score: 20,
        answer: "B",
        single: true,
      },
      {
        id: 3,
        title: "Which of the following Layer 2 bridges is supported by imToken?",
        options: [
          {
            select: "A",
            des: "cBridge",
          },
          {
            select: "B",
            des: "Multichain",
          },
          {
            select: "C",
            des: "Hop Protocol",
          },
          {
            select: "D",
            des: "以上All of the above都支持",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 4,
        title: "Which statement about the Layer 2 Bridge is true?",
        options: [
          {
            select: "A",
            des: "Users can transfer assets between the Layer 1 blockchain and Layer 2 networks",
          },
          {
            select: "B",
            des: "Users can transfer assets between two different Layer 2  networks",
          },
          {
            select: "C",
            des: "Users can’t to transfer assets between two different Layer 2 networks",
          },
          {
            select: "D",
            des: "Both A and B are correct",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 5,
        title: "Which of the following descriptions about zkSync is true?",
        options: [
          {
            select: "A",
            des: "zkSync users’ asset security is protected by zero-knowledge proof and on-chain data availability",
          },
          {
            select: "B",
            des: "zkSync is a Layer 2 scaling solution for Ethereum based on zkRollup",
          },
          {
            select: "C",
            des: "zkSync is designed to support efficient payment with low costs on the network",
          },
          {
            select: "D",
            des: "All of the above",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 6,
        title: "How does zkSync ensure the security of user funds?",
        options: [
          {
            select: "A",
            des: "zkSync users’ asset security are protected by zero-knowledge proof and on-chain data availability",
          },
          {
            select: "B",
            des: "zkSync users’ asset security are protected by fraud proof and on-chain data availability",
          },
        ],
        score: 15,
        answer: "A",
        single: true,
      },
    ]
  },
  Expert: {
    channel: 'Ethereum',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "Vitalik Buterin once said the biggest advantage of using Layer 2 to achieve Ethereum scaling is",
        options: [
          {
            select: "A",
            des: "the guarantee of security",
          },
          {
            select: "B",
            des: "the preservation of decentralization",
          },
          {
            select: "C",
            des: "the realization of the greatest scalability possible",
          },
          {
            select: "D",
            des: "the improvement of network throughput and performance",
          },
        ],
        score: 20,
        answer: "B",
        single: true,
      },
      {
        id: 2,
        title: "Which of the following is common Layer 2 solution？",
        options: [
          {
            select: "A",
            des: "Rollup",
          },
          {
            select: "B",
            des: "Plasma",
          },
          {
            select: "C",
            des: "State channels",
          },
          {
            select: "D",
            des: "Validium",
          },
          {
            select: "E",
            des: "以上都对",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 3,
        title: "The advantages of Plasma include___",
        options: [
          {
            select: "A",
            des: "High trading speed and fewer interactions with the mainnet",
          },
          {
            select: "B",
            des: "Low costs",
          },
          {
            select: "C",
            des: "Strong security and no supervision",
          },
          {
            select: "D",
            des: "No challenge period",
          },
          {
            select: "E",
            des: "ABC",
          },
        ],
        score: 10,
        answer: "E",
        single: true,
      },
      {
        id: 4,
        title: "Which of the following statements about state channels is false?",
        options: [
          {
            select: "A",
            des: "High efficiency and no need to wait for blocks to be packed",
          },
          {
            select: "B",
            des: "Similar to the Bitcoin Lightning Network",
          },
          {
            select: "C",
            des: "Relatively high time and capital costs for settlement and channel establishment",
          },
          {
            select: "D",
            des: "Funds don’t need to be locked in payment channels",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 5,
        title: "On August 5th, Arbitrum accounts for __ of the total Layer 2 TVL?",
        options: [
          {
            select: "A",
            des: "about 52%",
          },
          {
            select: "B",
            des: "about 32%",
          },
          {
            select: "C",
            des: "40%",
          },
          {
            select: "D",
            des: "51%",
          },
        ],
        score: 10,
        answer: "A",
        single: true,
      },
      {
        id: 6,
        title: "On August 5th, what project had the largest TVL in the Arbitrum ecosystem?",
        options: [
          {
            select: "A",
            des: "Curve",
          },
          {
            select: "B",
            des: "Stargate",
          },
          {
            select: "C",
            des: "GMX",
          },
          {
            select: "D",
            des: "SushiSwap",
          },
        ],
        score: 20,
        answer: "C",
        single: true,
      },
    ]
  },
  Arbitrum: {
    channel: 'Arbitrum',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "The team behind Arbitrum is ____",
        options: [
          {
            select: "A",
            des: "Uniswap Labs",
          },
          {
            select: "B",
            des: "Binance Labs",
          },
          {
            select: "C",
            des: "Offchain Labs",
          },
          {
            select: "D",
            des: "Matter Labs",
          },
        ],
        score: 10,
        answer: "C",
        single: true,
      },
      {
        id: 2,
        title: "What are the characteristics of Arbitrum?",
        options: [
          {
            select: "A",
            des: "Extremely low transaction fees",
          },
          {
            select: "B",
            des: "No need to trust",
          },
          {
            select: "C",
            des: "Ethereum mainnet-level security through encryption technology",
          },
          {
            select: "D",
            des: "EVM compatibility",
          },
          {
            select: "E",
            des: "All of the above",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 3,
        title: "What type of fraud proof does Arbitrum use to guarantee the validity of compressed data?",
        options: [
          {
            select: "A",
            des: "Single round interactive fraud proof",
          },
          {
            select: "B",
            des: "Multi-round interactive fraud proof",
          },
          {
            select: "C",
            des: "zero-knowledge proof",
          },
        ],
        score: 20,
        answer: "B",
        single: true,
      },
      {
        id: 4,
        title: "What virtual machine does Arbitrum use?",
        options: [
          {
            select: "A",
            des: "EVM (Ethereum Virtual Machine)",
          },
          {
            select: "B",
            des: "OVM (Optimistic Virtual Machine)",
          },
          {
            select: "C",
            des: "Oracle VM",
          },
        ],
        score: 10,
        answer: "B",
        single: true,
      },
      {
        id: 5,
        title: "Which of the following projects have joined the Arbitrum ecosystem?",
        options: [
          {
            select: "A",
            des: "Aave",
          },
          {
            select: "B",
            des: "DODO",
          },
          {
            select: "C",
            des: "Celer Bridge",
          },
          {
            select: "D",
            des: "Chainlink",
          },
          {
            select: "E",
            des: "All of the above",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 6,
        title: "Which of the following methods can be used to open the Arbitrum wallet in imToken?",
        options: [
          {
            select: "A",
            des: `Enter the asset page of the ETH wallet, click "Ethereum" at the top of the page, and select "Arbitrum" on the pop-up page`,
          },
          {
            select: "B",
            des: `Click the three bars in the upper left corner of the wallet and select the "Arbitrum" wallet`,
          },
          {
            select: "C",
            des: `Click "My profile" - "Manage Wallet" and select the "Arbitrum" wallet`,
          },
        ],
        score: 20,
        answer: "A",
        single: true,
      },
    ]
  },
  Optimism: {
    channel: 'Optimism',
    nums: 5,
    questions: [
      {
        id: 1,
        title: "Which Layer2 solution is Optimism based on?",
        options: [
          {
            select: "A",
            des: "Plasma",
          },
          {
            select: "B",
            des: "Validium",
          },
          {
            select: "C",
            des: "ZK Rollup",
          },
          {
            select: "D",
            des: "Optimistic Rollup",
          },
        ],
        score: 10,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "Which description is false about Optimism?",
        options: [
          {
            select: "A",
            des: "Optimism scales the Ethereum network by adopting ZK Rollup",
          },
          {
            select: "B",
            des: "Optimism inherits the security of Ethereum mainnet through cryptography technology",
          },
          {
            select: "C",
            des: "Optimism adopts Optimistic Rollup based on single-round interactive fraud proof",
          },
          {
            select: "D",
            des: "Optimism's goal is to scale the Ethereum network",
          },
        ],
        score: 20,
        answer: "A",
        single: true,
      },
      {
        id: 3,
        title: "Which description is false about Optimistic Rollup?",
        options: [
          {
            select: "A",
            des: "The zero-knowledge proof is removed from the Optimistic Rollup scheme and a penalty mechanism is added",
          },
          {
            select: "B",
            des: "Optimistic Rollup uses OVM (Optimistic Virtual Machine)",
          },
          {
            select: "C",
            des: "Optimistic Rollup does not support smart contracts",
          },
          {
            select: "D",
            des: "Optimistic Rollup was proposed in June 2019",
          },
        ],
        score: 20,
        answer: "C",
        single: true,
      },
      {
        id: 4,
        title: "Which descriptions are true about the Optimism Foundation?",
        options: [
          {
            select: "A",
            des: "The Optimism Foundation is a for-profit corporation",
          },
          {
            select: "B",
            des: "The Optimism Foundation is a non-profit corporation",
          },
          {
            select: "C",
            des: "The Optimism Foundation is the development team behind Optimism",
          },
          {
            select: "D",
            des: "The Optimism Foundation aims to generate public interest and operate in a sustainable manner",
          },
          {
            select: "E",
            des: "B C D",
          },
        ],
        score: 25,
        answer: "E",
        single: true,
      },
      {
        id: 5,
        title: "Which of the following projects have joined the Optimism ecosystem?",
        options: [
          {
            select: "A",
            des: "Uniswap",
          },
          {
            select: "B",
            des: "Hop Exchange",
          },
          {
            select: "C",
            des: "1inch",
          },
          {
            select: "D",
            des: "Synthetix",
          },
          {
            select: "E",
            des: "All of the Above",
          },
        ],
        score: 25,
        answer: "E",
        single: true,
      },
    ]
  },
  zkSync: {
    channel: 'zkSync',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "The development team behind zkSync is ____",
        options: [
          {
            select: "A",
            des: "Uniswap Labs",
          },
          {
            select: "B",
            des: "Binance Labs",
          },
          {
            select: "C",
            des: "Offchain Labs",
          },
          {
            select: "D",
            des: "Matter Labs",
          },
        ],
        score: 10,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "What are the features of zkSync?",
        options: [
          {
            select: "A",
            des: "Extremely low transaction fees",
          },
          {
            select: "B",
            des: "No need to trust",
          },
          {
            select: "C",
            des: "It inherits the Ethereum mainnet security",
          },
          {
            select: "D",
            des: "User assets are self-custodial",
          },
          {
            select: "E",
            des: "All of the above",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 3,
        title: "The security of Rollup is determined by_____",
        options: [
          {
            select: "A",
            des: "Data validity",
          },
          {
            select: "B",
            des: "Data availability",
          },
          {
            select: "C",
            des: "Data integrity",
          },
          {
            select: "D",
            des: "A and B",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 4,
        title: "Currently, zkSync is in the ___stage on the roadmap?",
        options: [
          {
            select: "A",
            des: "Scalable payment",
          },
          {
            select: "B",
            des: "Smart contract",
          },
          {
            select: "C",
            des: "Privacy",
          },
          {
            select: "D",
            des: "Censorship resistant",
          },
        ],
        score: 10,
        answer: "A",
        single: true,
      },
      {
        id: 5,
        title: "Which of the following projects have joined the zkSync ecosystem?",
        options: [
          {
            select: "A",
            des: "Aave",
          },
          {
            select: "B",
            des: "Curve",
          },
          {
            select: "C",
            des: "Moonpay",
          },
          {
            select: "D",
            des: "Balancer",
          },
          {
            select: "E",
            des: "以上都是"
          }
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 6,
        title: "Which of the following is the right path to open the zkSync wallet in imToken?",
        options: [
          {
            select: "A",
            des: `Enter the asset page of the ETH wallet, click "Ethereum" at the top, and select "zkSync" on the pop-up page`,
          },
          {
            select: "B",
            des: `Click the three bars in the upper left corner of the wallet and select the "Arbitrum" wallet`,
          },
          {
            select: "C",
            des: `Click "My profile" - "Manage Wallet" and select the "Arbitrum" wallet`,
          },
          {
            select: "D",
            des: `Click "My profile" - "Explore" and enable the Layer 2 function`,
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
    ]
  },
  imToken: {
    channel: 'imToken',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "imToken strive to build ____ wallet in the Layer 2 ecosystem",
        options: [
          {
            select: "A",
            des: "the most secure",
          },
          {
            select: "B",
            des: "easy-to-use",
          },
          {
            select: "C",
            des: "All of the above",
          },
        ],
        score: 10,
        answer: "C",
        single: true,
      },
      {
        id: 2,
        title: "Before trying the Layer 2 ecosystem, you need to download and install imToken. Which of the following is the correct way to download imToken?",
        options: [
          {
            select: "A",
            des: "Download from the official website of imToken: https://token.im/",
          },
          {
            select: "B",
            des: "Download through links and posters sent by friends",
          },
          {
            select: "C",
            des: "Download from third-party websites",
          },
          {
            select: "D",
            des: "Download through search engines",
          },
        ],
        score: 20,
        answer: "A",
        single: true,
      },
      {
        id: 3,
        title: "What is imToken's first deeply integrated Layer 2 network?",
        options: [
          {
            select: "A",
            des: "zkSync",
          },
          {
            select: "B",
            des: "Arbitrum",
          },
          {
            select: "C",
            des: "Optimism",
          },
          {
            select: "D",
            des: "StarkWare",
          },
        ],
        score: 10,
        answer: "A",
        single: true,
      },
      {
        id: 4,
        title: "Rollup is the most popular Layer 2 solution. What are the two main types of Rollup? ",
        options: [
          {
            select: "A",
            des: "EVM",
          },
          {
            select: "B",
            des: "Validium",
          },
          {
            select: "C",
            des: "ZK Rollup",
          },
          {
            select: "D",
            des: "Optimistic Rollup",
          },
          {
            select: "E",
            des: "C 和 D",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 5,
        title: "Which of the following projects are based on Optimistic Rollup?",
        options: [
          {
            select: "A",
            des: "zkSync",
          },
          {
            select: "B",
            des: "Arbitrum",
          },
          {
            select: "C",
            des: "Optimism",
          },
          {
            select: "D",
            des: "StarkWare",
          },
          {
            select: "E",
            des: "B 和 C",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 6,
        title: "imToken actively participates in Layer 2 ecosytem building and has invested some excellent projects inluding ____",
        options: [
          {
            select: "A",
            des: "Aztec",
          },
          {
            select: "B",
            des: "zkSync",
          },
          {
            select: "C",
            des: "StarkWare",
          },
          {
            select: "D",
            des: "All of the above",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
    ]
  },
};

export default qa;
