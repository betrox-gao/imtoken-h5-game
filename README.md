# 星际荣耀

## Project setup

```
npm install（！！！！需要node版本v12.22.12，否则会出现不兼容的问题）
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build:h5
```

> **_ 目录结构 _**

```
-src
┌─components            组件目录
│  └─com                公共组件
│  └─game               游戏相关组件
│  └─supply             供应商相关组件
├─api                   请求
├─common                存放公共方法
│  └─lang               多语言
│    └─doc              多语言文本
│    └─qa               多语言答题录入
├─platforms             存放各平台专用页面的目录
├─pages                 业务页面文件存放的目录
│  ├─game               游戏相关页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─store                 vuex
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
└─pages.json            配置页面路由、导航条、选项卡等页面类信息

```
### 小游戏流程
小游戏流程主要由前端控制
  1，得分：默认robot最高得分70分，为了避免出现robot得分下降的情况，因为用户得分>=80分才算胜利，所以robot得分最高70分。
  2，胜负判定：user >= 80 分 获胜。user < 80分，则robot总是70分 robot获胜。
  3，收否答题判断：用户已经答题，得分大于等于80分，显示历史成绩；小于80分，重新答题。用户未答题，则重新答题。
  4，头像：user和robot的头像和昵称由前端生成，用户已经答过题：则保存头像和昵称，为robot重新匹配头像和昵称。用户未答题：匹配user和robot头像和昵称。
