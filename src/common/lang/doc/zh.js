import { nfts } from './nfts.js';
import qa from '../qa/qaZh.js'
export default {
  // 首页
  game_name: 'Play and Earn',
  begin: '开始游戏',
  userPrefix: '探索者',
  robotPrefix: '挑战者',
  choice: '单选题',
  player: '角色',
  role: '探索者',
  reSubmit: '重新提交',
  loading: '对手匹配中...',
  // 供应商页面
  supply_title: '活动时间：2022/10/10 15:00 - 2022/10/16/ 23:00 (SGT)',
  supply_rule: '活动规则',
  supply_status: 'NFT 状态',
  illegal: '提交失败，请不要填写域名类钱包地址',
  err: '数据错误',
  nft_rule: {
    items: [
      {
        text: "答题满 80 分的用户即可获取致敬款 NFT 盲盒，共 8 款 NFT。",
        link: false,
        children: [],
      },
      {
        text: "致敬款 NFT 将随着可领取 NFT 的数量增加而升级。",
        link: false,
        children: [],
      },
      {
        text: "持有致敬款 NFT 的用户可参与抽奖，持有 NFT 越多（最多 8 款），中奖概率越大。",
        link: false,
        children: [],
      },
      {
        text: "奖金池同样将随 NFT 累计领取数量的增加而增加。",
        link: false,
        children: [
          "如 NFT 累计可领取数量少于 10k，奖金池额度为 2000 USDC。",
          "当 NFT 累计可领取数量达到 30k，奖金池将升级至 5000 USDC。",
          "当 NFT 累计可领取数量达到 80k，奖金池将升级至 10000 USDC。",
          "除 USDC 奖励外，还有固定奖励：2000 个 LON、10 台 imKey 硬件钱包。",
        ],
      },
    ],
    contract:
      '如有问题，请加入 <a style="color: #1cbbff" href="https://discord.com/invite/imToken">imToken Discord</a> 或通过 <uni-text id="copy-text" selectable="true" style="user-select: all; color: #1cbbff"><span>support@token.im</span></uni-text> 联系我们。',
    coins: [
      {
        name: `可领取NFT
        的数量`,
        options: ["10k", "30k", "80k"],
      },
      {
        name: `NFT
        级别`,
        options: ["level1", "level2", "level3"],
      },
      {
        name: `奖金池`,
        options: ["2000 USDC", "5000 USDC", "10000 USDC"],
      },
      {
        name: `中奖人数`,
        options: [100, 260, 400],
      },
    ],
  },
  nft_status: {
    description: '致敬款 NFT 将随着 NFT 累计可领取数量的增加而升级，你可以在此页关注 NFT 累计可领取数量及对应的 Level 等级。',
    nfts
  },
  suppliers: [
    {
      id: "Beginner",
      title: "新手入门：Layer2、Plasma 和 Rollup",
      enter: "测验",
      icon: require("../../../assets/images/supply/Beginner.png"),
      bg: require("../../../assets/images/supply/devcon-bg.png"),
    },
    {
      id: "Intermediate",
      title: "基础概念：桥、欺诈性证明和零知识证明",
      enter: "测验",
      icon: require("../../../assets/images/supply/Intermediate.png"),
      bg: require("../../../assets/images/supply/ethereum-bg.png"),
    },
    {
      id: "Advanced",
      title: "持续进阶：Layer2 使用教程",
      enter: "测验",
      icon: require("../../../assets/images/supply/Advanced.png"),
      bg: require("../../../assets/images/supply/imtoken-bg.png"),
    },
    {
      id: "Expert",
      title: "深度精读：Layer2 扩容方案比较",
      enter: "测验",
      icon: require("../../../assets/images/supply/Expert.png"),
      bg: require("../../../assets/images/supply/arbitrum-bg.png"),
    },
    {
      id: "Arbitrum",
      title: "Arbitrum：了解主流 Layer2 项目",
      enter: "测验",
      icon: require("../../../assets/images/supply/arbitrum.png"),
      bg: require("../../../assets/images/supply/tokenlon-bg.png"),
    },
    {
      id: "Optimism",
      title: "Optimism：Optimistic Rollup 是如何运行的",
      enter: "测验",
      icon: require("../../../assets/images/supply/Optimism.png"),
      bg: require("../../../assets/images/supply/imKey-bg.png"),
    },
    {
      id: "zkSync",
      title: "zkSync：zkRollup 是如何运行的",
      enter: "测验",
      icon: require("../../../assets/images/supply/zkSync.png"),
      bg: require("../../../assets/images/supply/ePotter-bg.png"),
    },
    {
      id: "imToken",
      title: "imToken：打造安全好用的 L2 钱包",
      enter: "测验",
      icon: require("../../../assets/images/supply/imtoken.png"),
      bg: require("../../../assets/images/supply/mask-network-bg.png"),
    },
  ],
  ports: [
    {
      unique: "飞船 1 号",
      class: 'one',
      order: 1,
      img: require("../../../assets/images/port1.png"),
    },
    {
      unique: "飞船 2 号",
      class: 'two',
      order: 2,
      img: require("../../../assets/images/port2.png"),
    },
    {
      unique: "飞船 3 号",
      class: 'three',
      order: 3,
      img: require("../../../assets/images/port3.png"),
    },
    {
      unique: "飞船 4 号",
      class: 'four',
      order: 4,
      img: require("../../../assets/images/port4.png"),
    },
    {
      unique: "飞船 5 号",
      class: 'five',
      order: 5,
      img: require("../../../assets/images/port5.png"),
    },
    {
      unique: "飞船 6 号",
      class: 'six',
      order: 6,
      img: require("../../../assets/images/port6.png"),
    },
  ],
  questionList: qa,
  result_win: '你赢了',
  result_lose: '你输了',
  result_win_btn: '继续挑战',
  last_btn: '回到首页',
  result_lose_btn: '再次挑战',
  award_nft_type: '致敬款 NFT',
  award_address: '请输入你的以太坊钱包地址',
  award_submit: '提交',
  done_text: '提交成功，加入 imToken Discord 社区了解最新动态。',
  done_btn: '完成',
  record: '得分记录',
  time: '提交用时',
  score: '成绩'
}