const qa = {
  Beginner: {
    channel: "Beginner",
    nums: 6,
    questions: [
      {
        id: 1,
        title:
          "相比 Layer1， Layer2 具备哪些优势？",
        options: [
          {
            select: "A",
            des: "Layer2 比 Layer1 交易更快速",
          },
          {
            select: "B",
            des: "Layer2 比 Layer1 交易费用更低",
          },
          {
            select: "C",
            des: "Layer2 可以推动应用大规模普及",
          },
          {
            select: "D",
            des: "以上都是",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "以下关于 Rollup 描述错误的是？",
        options: [
          {
            select: "A",
            des: "Rollup 是 Layer2 方案之一，也叫卷叠",
          },
          {
            select: "B",
            des: "Rollup 按照确保数据有效性的方案，可分为 ZK Rollup 和 Optimistic Rollup",
          },
          {
            select: "C",
            des: "zkSync 项目使用了 Optimistic Rollup 方案",
          },
          {
            select: "D",
            des: "Rollup 将以太坊主网（Layer1） 上的计算和存储转移至 Layer2 处理和压缩",
          },
        ],
        score: 10,
        answer: "C",
        single: true,
      },
      {
        id: 3,
        title: "以下关于 ZK Rollup 描述正确的是？",
        options: [
          {
            select: "A",
            des: "ZK Rollup 是一种采用零知识证明的 Rollup 方案",
          },
          {
            select: "B",
            des: "ZK 是 zero knowledge（零知识）的缩写",
          },
          {
            select: "C",
            des: "zkSync 项目采用了 ZK Rollup 方案",
          },
          {
            select: "D",
            des: "以上都是",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 4,
        title: "以下关于 Optimistic Rollup 描述错误的是？",
        options: [
          {
            select: "A",
            des: "Optimistic Rollup 是一种采用零知识证明的 Rollup 方案",
          },
          {
            select: "B",
            des: "Optimistic Rollup 默认被同步到 Layer1 上的数据是正确的",
          },
          {
            select: "C",
            des: "如果有人认为被同步的数据不正确，可在挑战期内发出挑战",
          },
          {
            select: "D",
            des: "Optimistic Rollup 通过欺诈性证明保证最后同步到 Layer1 的数据是有效的",
          },
        ],
        score: 15,
        answer: "A",
        single: true,
      },
      {
        id: 5,
        title: "以下关于 Plasma 描述错误的是？",
        options: [
          {
            select: "A",
            des: "用户从 Plasma 中取出资金的周期很短",
          },
          {
            select: "B",
            des: "Plasma 主张将多笔交易压缩成一个区块，并将交易的计算和存储搬到 Plasma 链，以此提高交易吞吐量",
          },
          {
            select: "C",
            des: "Plasma 增加了「零知识证明」的退出机制来保障安全",
          },
          {
            select: "D",
            des: "OMG 网络使用了 Plasma 技术",
          },
          {
            select: "E",
            des: "A和C",
          },
        ],
        score: 25,
        answer: "E",
        single: true,
      },
      {
        id: 6,
        title: "为解决以太坊交易速度和成本问题首次被提出的 Layer2 方案是？",
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
        title: "目前，桥可在哪些网络之间转移资产？",
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
        title: "关于 Layer1 /  Layer2 <> Layer2 类型的跨链桥，下列哪个属于常见的资产转移的实现方式？",
        options: [
          {
            select: "A",
            des: "锁定与铸造",
          },
          {
            select: "B",
            des: "销毁与铸造",
          },
          {
            select: "C",
            des: "原子交换",
          },
          {
            select: "D",
            des: "以上都是",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 3,
        title: "下列哪个项目不能实现资产跨链转移？",
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
        title: "以下哪种 Layer2 方案采用了零知识证明的验证方式？",
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
        title: "零知识证明协议需满足哪些条件？",
        options: [
          {
            select: "A",
            des: "零知识",
          },
          {
            select: "B",
            des: "完整",
          },
          {
            select: "C",
            des: "健全",
          },
          {
            select: "D",
            des: "以上都是",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 6,
        title: "关于单轮交互型和多轮交互型欺诈性证明，以下说法错误的是？",
        options: [
          {
            select: "A",
            des: "单轮交互型的链上计算成本更高",
          },
          {
            select: "B",
            des: "单轮交互型的争议窗口期更长",
          },
          {
            select: "C",
            des: "多轮交互型更容易支持复杂的智能合约",
          },
          {
            select: "D",
            des: "两者都需要在 Layer1 上重放一遍有争议的交易",
          },
        ],
        score: 25,
        answer: "B",
        single: true,
      },
    ]
  },
  Advanced: {
    channel: 'Advanced',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "imToken 支持的 Layer2 网络有哪些？",
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
            des: "以上都支持"
          }
        ],
        score: 10,
        answer: "D",
        single: true,
      },
      {
        id: 2,
        title: "如何在 imToken 内开启 zkSync 钱包？",
        options: [
          {
            select: "A",
            des: "点击 ETH 钱包的资产页上方的「Ethereum」，在弹出页面选择「zkSync」即可切换至 zkSync 钱包",
          },
          {
            select: "B",
            des: "打开 imToken App，点击「我」-「探索」开启 zkSync 钱包",
          },
        ],
        score: 20,
        answer: "B",
        single: true,
      },
      {
        id: 3,
        title: "imToken 支持以下哪些 Layer2 跨链桥？",
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
            des: "以上都支持",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 4,
        title: "关于 Layer2 跨链桥的说法正确的是____",
        options: [
          {
            select: "A",
            des: "允许用户在 Layer1 与 Layer2 网络之间转移资产",
          },
          {
            select: "B",
            des: "允许用户在两个不同的 Layer2 网络之间转移资产",
          },
          {
            select: "C",
            des: "不允许用户在两个不同的 Layer2 网络之间转移资产",
          },
          {
            select: "D",
            des: "只有 A 和 B 两个选项是正确的",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 5,
        title: "关于 zkSync 描述正确的是___",
        options: [
          {
            select: "A",
            des: "zkSync 通过零知识证明和链上数据可用性来确保用户的资产安全",
          },
          {
            select: "B",
            des: "zkSync 是基于 zkRollup 的 Ethereum Layer2 扩容方案",
          },
          {
            select: "C",
            des: "zkSync 旨在 Ethereum 上实现高效且低成本的支付",
          },
          {
            select: "D",
            des: "以上都是",
          },
        ],
        score: 15,
        answer: "D",
        single: true,
      },
      {
        id: 6,
        title: "zkSync 如何来确保用户的资金安全？",
        options: [
          {
            select: "A",
            des: "通过零知识证明和链上数据可用性来确保用户的资金安全",
          },
          {
            select: "B",
            des: "通过欺诈证明和链上数据可用性来确保用户的资金安全",
          },
        ],
        score: 15,
        answer: "C",
        single: true,
      },
    ]
  },
  Expert: {
    channel: 'Expert',
    nums: 6,
    questions: [
      {
        id: 1,
        title: "Vitalik Buterin 曾表示用 Layer2 实现 Ethereum 的扩容，其最大的优势是什么？",
        options: [
          {
            select: "A",
            des: "可以保证 Ethereum 的安全性",
          },
          {
            select: "B",
            des: "可以保全 Ethereum 的去中心化",
          },
          {
            select: "C",
            des: "可以最大程度实现扩展",
          },
          {
            select: "D",
            des: "可以提高主网吞吐量和性能",
          },
        ],
        score: 20,
        answer: "B",
        single: true,
      },
      {
        id: 2,
        title: "常见的 Layer2 扩容方案有哪些？",
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
            des: "状态通道",
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
        title: "Plasma 扩容方案具备哪些优点？",
        options: [
          {
            select: "A",
            des: "与主链的交互少，交易速度快",
          },
          {
            select: "B",
            des: "成本低",
          },
          {
            select: "C",
            des: "安全性高且可以实现无监管",
          },
          {
            select: "D",
            des: "没有挑战期，提款可及时到账",
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
        title: "以下关于状态通道说法错误的是哪个？",
        options: [
          {
            select: "A",
            des: "不需要等待区块打包时间，效率高",
          },
          {
            select: "B",
            des: "类似于比特币常用的闪电网络",
          },
          {
            select: "C",
            des: "创建和结算通道的时间和经济成本较高",
          },
          {
            select: "D",
            des: "不需要在支付通道中锁定资金",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 5,
        title: "8 月 5 日，Arbitrum 以超 24 亿美元占据 Layer2 总锁仓量的多少？",
        options: [
          {
            select: "A",
            des: "近 52%",
          },
          {
            select: "B",
            des: "近 32%",
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
        title: "8 月 5 日，Arbitrum 生态中锁仓量最大的项目是什么？",
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
        title: "Arbitrum 是由哪个开发团队推出的？",
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
        title: "Arbitrum 具备哪些特点？",
        options: [
          {
            select: "A",
            des: "极低的交易费用",
          },
          {
            select: "B",
            des: "无需信任",
          },
          {
            select: "C",
            des: "通过加密技术保障资金拥有 Etherum 主网级别的安全性",
          },
          {
            select: "D",
            des: "EVM 兼容",
          },
          {
            select: "E",
            des: "以上都是",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 3,
        title: "Arbitrum 采用哪种类型的欺诈性证明来保证压缩数据的有效性？",
        options: [
          {
            select: "A",
            des: "单轮交互型欺诈性证明",
          },
          {
            select: "B",
            des: "多轮交互型欺诈性证明",
          },
          {
            select: "C",
            des: "零知识证明",
          },
        ],
        score: 20,
        answer: "B",
        single: true,
      },
      {
        id: 4,
        title: "Arbitrum 采用了什么虚拟机？",
        options: [
          {
            select: "A",
            des: "EVM（Etherum 虚拟机）",
          },
          {
            select: "B",
            des: "OVM（Optimistic 虚拟机）",
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
        title: "下列区块链项目中，哪些已经加入了 Arbitrum 生态？",
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
            des: "以上都是",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 6,
        title: "以下哪种方式可以在 imToken 内打开 Arbitrum 钱包？",
        options: [
          {
            select: "A",
            des: "进入 ETH 钱包的资产页，点击页面上方「Ethereum」，在弹出页面选择「Arbitrum」",
          },
          {
            select: "B",
            des: "点击钱包左上角「三条杠」，直接选择「Arbitrum」钱包",
          },
          {
            select: "C",
            des: "点击「我」-「管理钱包」，直接选择「Arbitrum」钱包",
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
        title: "Optimism 是基于哪个 Layer2 方案打造的？",
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
        title: "关于 Optimism， 哪个描述是错误的？",
        options: [
          {
            select: "A",
            des: "Optimism 通过采用基于零知识证明的 Rollup 提升 Ethereum 网络的可扩展性",
          },
          {
            select: "B",
            des: "Optimism 通过加密技术保障资金拥有 Ethereum 主网级别的安全性",
          },
          {
            select: "C",
            des: "Optimism 采用了单轮交互型设计的 Optimistic Rollup 方案",
          },
          {
            select: "D",
            des: "Optimism 的目标是实现对 Ethereum 网络的扩容",
          },
        ],
        score: 20,
        answer: "A",
        single: true,
      },
      {
        id: 3,
        title: "关于 Optimistic Rollup 方案，哪个描述是错误的？",
        options: [
          {
            select: "A",
            des: "Optimistic Rollup 方案中去除了零知识证明，增加了惩罚机制",
          },
          {
            select: "B",
            des: "Optimistic Rollup 方案采用了 OVM（Optimistic 虚拟机）",
          },
          {
            select: "C",
            des: "Optimistic Rollup 方案无法良好支持智能合约",
          },
          {
            select: "D",
            des: "Optimistic Rollup 方案于 2019 年 6 月提出",
          },
        ],
        score: 20,
        answer: "C",
        single: true,
      },
      {
        id: 4,
        title: "关于 Optimism 基金会，哪些描述是正确的？",
        options: [
          {
            select: "A",
            des: "Optimism 基金会是一家营利性公司",
          },
          {
            select: "B",
            des: "Optimism 基金会是一家非营利性公司",
          },
          {
            select: "C",
            des: "Optimism 基金会开发了 Optimism 扩容方案",
          },
          {
            select: "D",
            des: "Optimism 基金会旨在产生公共利益并以可持续的方式运作",
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
        title: "下列区块链项目中，哪些已经加入了 Optimism 生态？",
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
            des: "以上都是",
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
        title: "zkSync 是由哪个开发团队推出的 ？",
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
        title: "zkSync 具备哪些特点？",
        options: [
          {
            select: "A",
            des: "极低的交易费用",
          },
          {
            select: "B",
            des: "无需信任",
          },
          {
            select: "C",
            des: "通过加密技术保障资金拥有 Ethereum 主网级别的安全性",
          },
          {
            select: "D",
            des: "用户资产自持",
          },
          {
            select: "E",
            des: "以上都是",
          },
        ],
        score: 20,
        answer: "E",
        single: true,
      },
      {
        id: 3,
        title: "Rollup 的安全性由哪些因素决定？",
        options: [
          {
            select: "A",
            des: "数据的有效性",
          },
          {
            select: "B",
            des: "数据的可用性",
          },
          {
            select: "C",
            des: "数据的完整性",
          },
          {
            select: "D",
            des: "A 和 B",
          },
        ],
        score: 20,
        answer: "D",
        single: true,
      },
      {
        id: 4,
        title: "zkSync 目前的产品阶段处于路线图的哪一阶段 ？",
        options: [
          {
            select: "A",
            des: "可扩展支付",
          },
          {
            select: "B",
            des: "智能合约",
          },
          {
            select: "C",
            des: "隐私",
          },
          {
            select: "D",
            des: "抗审查",
          },
        ],
        score: 10,
        answer: "A",
        single: true,
      },
      {
        id: 5,
        title: "下列区块链项目中，哪些已经加入了 zkSync 生态？",
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
        title: "以下哪种方式可以在 imToken 内打开 zkSync 钱包？",
        options: [
          {
            select: "A",
            des: "进入 ETH 钱包的资产页，点击页面上方「Ethereum」，在弹出页面选择「zkSync」",
          },
          {
            select: "B",
            des: "点击钱包左上角「三条杠」，直接选择「Arbitrum」钱包",
          },
          {
            select: "C",
            des: "点击「我」-「管理钱包」，直接选择「Arbitrum」钱包",
          },
          {
            select: "D",
            des: "点击「我」-「探索」，向右滑动开启 zkSync 钱包，返回 ETH 钱包首页即可开启",
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
        title: "在 Layer2 生态中，imToken 倾力打造 ____ 的钱包？",
        options: [
          {
            select: "A",
            des: "最安全",
          },
          {
            select: "B",
            des: "最好用",
          },
          {
            select: "C",
            des: "以上都是",
          },
        ],
        score: 10,
        answer: "C",
        single: true,
      },
      {
        id: 2,
        title: "在体验 Layer2 生态之前，你需要先下载安装 imToken。以下哪个是下载 imToken 的正确方式？",
        options: [
          {
            select: "A",
            des: "通过访问 imToken 唯一官网：https://token.im/ 下载",
          },
          {
            select: "B",
            des: "通过朋友发送的链接、海报下载 imToken",
          },
          {
            select: "C",
            des: "通过非小号等第三方网站下载",
          },
          {
            select: "D",
            des: "通过百度搜索 imToken 下载",
          },
        ],
        score: 20,
        answer: "A",
        single: true,
      },
      {
        id: 3,
        title: "imToken 第一个深度集成的 Layer2 网络是？",
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
        title: "Rollup 是当下最为流行的 Layer2 方案，Rollup 主要可分为哪两类？",
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
        title: "以下属于 Optimistic Rollup 的代表项目的是？",
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
        title: "imToken 积极加入 Layer2 生态建设，参与过哪些优秀项目的融资？",
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
            des: "以上都是",
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
