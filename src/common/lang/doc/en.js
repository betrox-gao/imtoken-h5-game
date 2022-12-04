import { nfts } from './nfts.js';
import qa from '../qa/qaEn.js'
export default {
  // 首页
  game_name: `Play and Earn`,
  begin: 'BEGIN',
  userPrefix: 'Explorer',
  choice: 'SINGLE CHOICE',
  robotPrefix: 'Challenger',
  player: 'PLAYER',
  role: 'Explorer',
  reSubmit: 'I KONW',
  err: 'Data Error',
  loading: 'Match the Challenger...',
  // 供应商页面
  supply_title: 'Activity Period: 2022/10/10 15:00 - 2022/10/16/ 23:00 (SGT)',
  supply_rule: 'RULES',
  supply_status: 'NFT STATUS',
  illegal: 'Please do not use ENS or other domain name as your wallet address',
  nft_rule: {
    items: [
      {
        text: "If you score 80 points or more, you will get a tribute NFT blind box, 8 NFTs in total.",
        link: false,
        children: [],
      },
      {
        text: "Tribute NFTs will auto-upgrade as the number of claimable NFTs increases.",
        link: false,
        children: [],
      },
      {
        text: "The more NFTs you have (up to 8), the better your chances of winning.",
        link: false,
        children: [],
      },
      {
        text: "The prize pool will also increase with the climbing number of claimable NFTs.",
        link: false,
        children: [
          "If the number of claimable NFTs is less than 10k, the prize pool is 2000 USDC.",
          "If the number of claimable NFTs reaches 30k, the prize pool will increase to 5000 USDC.",
          "If the number of claimable NFTs reaches 80k, the prize pool will increase to 10,000 USDC.",
          "In addition to USDC, there are also other prizes: 2000 LONs, 10 imKey hardware wallets."
        ],
      },
    ],
    contract:
      'If you have any questions, please join <a style="color: #1cbbff" href="https://discord.com/invite/imToken">imToken Discord</a> to contact us.',
    coins: [
      {
        name: `CLAIMABLE
        NFT`,
        options: ["10k", "30k", "80k"],
      },
      {
        name: `NFT
        GRADE`,
        options: ["level1", "level2", "level3"],
      },
      {
        name: `PRIZE
        POOL`,
        options: ["2000 USDC", "5000 USDC", "10000 USDC"],
      },
      {
        name: `WININNING
        PLACES`,
        options: [100, 260, 400],
      },
    ],
  },
  nft_status: {
    description: 'Tribute NFTs will auto-upgrade as the number of claimable NFTs  increases. You can follow the number of claimable NFTs and the corresponding NFT levels on this page.',
    nfts
  },
  suppliers: [
    {
      id: "Beginner",
      title: "Beginner: L2, Rollup, Plasma",
      enter: "Play",
      icon: require("../../../assets/images/supply/Beginner.png"),
      bg: require("../../../assets/images/supply/devcon-bg.png"),
    },
    {
      id: "Intermediate",
      title: "Intermediate: Bridge, ZK, Fraud Proof",
      enter: "Play",
      icon: require("../../../assets/images/supply/Intermediate.png"),
      bg: require("../../../assets/images/supply/ethereum-bg.png"),
    },
    {
      id: "Advanced",
      title: "Advanced: How to use L2 in imToken?",
      enter: "Play",
      icon: require("../../../assets/images/supply/Advanced.png"),
      bg: require("../../../assets/images/supply/imtoken-bg.png"),
    },
    {
      id: "Expert",
      title: "Expert: Deep Dive into L2",
      enter: "Play",
      icon: require("../../../assets/images/supply/Expert.png"),
      bg: require("../../../assets/images/supply/arbitrum-bg.png"),
    },
    {
      id: "Arbitrum",
      title: "How big is the Arbitrum?",
      enter: "Play",
      icon: require("../../../assets/images/supply/arbitrum.png"),
      bg: require("../../../assets/images/supply/tokenlon-bg.png"),
    },
    {
      id: "Optimism",
      title: "How does the Optimistic Rollup work?",
      enter: "Play",
      icon: require("../../../assets/images/supply/Optimism.png"),
      bg: require("../../../assets/images/supply/imKey-bg.png"),
    },
    {
      id: "zkSync",
      title: "How does the zkRollup work?",
      enter: "Play",
      icon: require("../../../assets/images/supply/zkSync.png"),
      bg: require("../../../assets/images/supply/ePotter-bg.png"),
    },
    {
      id: "imToken",
      title: "How to stay safe on L2?",
      enter: "Play",
      icon: require("../../../assets/images/supply/imtoken.png"),
      bg: require("../../../assets/images/supply/mask-network-bg.png"),
    },
  ],
  ports: [
    {
      unique: "AIRSHIP #1",
      class: 'one',
      order: 1,
      img: require("../../../assets/images/port1.png"),
    },
    {
      unique: "AIRSHIP #2",
      class: 'two',
      order: 2,
      img: require("../../../assets/images/port2.png"),
    },
    {
      unique: "AIRSHIP #3",
      class: 'three',
      order: 3,
      img: require("../../../assets/images/port3.png"),
    },
    {
      unique: "AIRSHIP #4",
      class: 'four',
      order: 4,
      img: require("../../../assets/images/port4.png"),
    },
    {
      unique: "AIRSHIP #5",
      class: 'five',
      order: 5,
      img: require("../../../assets/images/port5.png"),
    },
    {
      unique: "AIRSHIP #6",
      class: 'six',
      order: 6,
      img: require("../../../assets/images/port6.png"),
    },
  ],
  questionList: qa,
  result_win: 'YOU WIN',
  result_lose: 'YOU LOSE',
  result_win_btn: 'TRY CONTINUE',
  last_btn: 'BACK',
  result_lose_btn: 'TRY AGAIN',
  award_nft_type: 'TRIBUTE NFT',
  award_address: 'Enter your Ethereum wallet address',
  award_submit: 'SUBMIT',
  done_text: 'Submitted, Join imToken Discord for the latest news.',
  done_btn: 'DONE',
  record: 'RECORD',
  time: 'TIME',
  score: 'SCORE'
}