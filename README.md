# CampusSwap
校园易换-高校学生校内闲置物品交易置换小程序 V1.0.0

## 项目简介
校园易换是面向在校大学生的校园二手闲置交易置换平台，专注本校学生物品流转，支持闲置发布、商品浏览、分类筛选、在线沟通、物品置换、二手买卖功能，打造安全、便捷、本地化校园二手生态。

### 核心功能
1. 用户模块：微信一键登录、个人中心、我的发布、我的收藏、交易记录
2. 商品模块：闲置发布（图文上传、定价/置换模式）、商品详情、收藏、留言咨询
3. 首页模块：分类导航、推荐闲置、搜索框、热门物品
4. 置换模块：以物换物，无需现金交换

## 技术栈
- 前端：微信原生小程序 WXML + WXSS + JavaScript
- 工具：Git 版本管理、VSCode 开发
- 工程分层：utils工具 / services接口 / components公共组件

## 完整项目目录
```text
CampusSwap/
├── .gitignore
├── LICENSE
├── README.md
├── app.js
├── app.json
├── app.wxss
├── assets/                # 静态资源：图片、图标
│   └── images/
│       └── logo.png
├── components/            # 公共组件
│   └── goods-card/        # 商品卡片组件
│       ├── goods-card.js
│       ├── goods-card.json
│       ├── goods-card.wxml
│       └── goods-card.wxss
├── pages/                 # 页面目录
│   ├── index/             # 首页
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── publish/           # 发布闲置页面
│   ├── detail/            # 商品详情页
│   └── mine/              # 我的个人中心
├── services/              # 接口请求封装
│   └── api.js
└── utils/                 # 工具函数
    └── common.js
```

## 本地运行步骤
1. 克隆项目
```bash
git clone https://github.com/xgx-jrz/CampusSwap.git
```
