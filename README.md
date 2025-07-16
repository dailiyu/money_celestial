# 满仓生态 - uni-app移动应用

[![uni-app](https://img.shields.io/badge/uni--app-latest-green.svg)](https://uniapp.dcloud.io/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen.svg)](https://vuejs.org/)
[![Pinia](https://img.shields.io/badge/Pinia-latest-yellow.svg)](https://pinia.vuejs.org/)

一个基于uni-app开发的跨平台移动应用，专注于积分生态系统、商家入驻、代理推荐等功能的综合性平台。

## 📱 项目介绍

满仓生态是一个综合性的商业生态平台，主要功能包括：

- 🎯 **双积分系统** - 绿色积分和D9能量管理
- 🏪 **商家生态** - 商家入驻、认证、管理
- 👥 **推荐代理** - 多层级推荐奖励机制
- 📱 **扫码互动** - 二维码积分获取
- 💰 **保证金系统** - 资金安全保障
- 🎁 **签到奖励** - 每日签到获取积分

## 🛠️ 技术栈

### 核心框架
- **uni-app** - 跨平台开发框架
- **Vue.js 3** - 响应式前端框架
- **Pinia** - 状态管理
- **SCSS** - CSS预处理器

### 关键依赖
- **@polkadot** - 区块链工具库（地址验证、加密）
- **qrcode.vue** - 二维码组件
- **uni-ui** - UI组件库

### 支持平台
- 🌐 **H5** - 网页版
- 📱 **微信小程序** - 微信生态
- 📲 **App** - iOS/Android原生应用

## 🚀 快速开始

### 环境要求
- Node.js >= 14.0.0
- npm >= 6.0.0
- HBuilderX 或 VS Code

### 安装依赖
```bash
# 克隆项目
git clone [项目地址]
cd money_celestial

# 安装依赖
npm install
```

### 开发运行
```bash
# H5开发
npm run dev:h5

# 微信小程序开发
npm run dev:mp-weixin

# App开发
在HBuilderX中运行到手机或模拟器
```

### 生产构建
```bash
# 构建H5
npm run build:h5

# 构建微信小程序
npm run build:mp-weixin

# 构建App
在HBuilderX中发行
```

## 📂 项目结构

```
money_celestial/
├── 📁 pages/                    # 页面目录
│   ├── 📁 index/               # 首页模块
│   ├── 📁 login/               # 登录注册
│   ├── 📁 myAccount/           # 用户中心
│   ├── 📁 merchant/            # 商家模块
│   ├── 📁 agent/               # 代理模块
│   ├── 📁 recommend/           # 推荐模块
│   ├── 📁 points/              # 积分相关
│   └── 📁 webView/             # 内嵌页面
├── 📁 components/              # 组件目录
│   ├── 📁 cityPicker/          # 城市选择
│   ├── 📁 navBar/              # 导航栏
│   ├── 📁 PointsPopup/         # 积分弹窗
│   └── ...                     # 其他组件
├── 📁 store/                   # 状态管理
│   ├── 📄 user.js              # 用户状态
│   └── 📄 public.js            # 公共状态
├── 📁 service/                 # 服务层
│   ├── 📄 index.js             # HTTP请求封装
│   ├── 📄 point.js             # 积分相关API
│   ├── 📄 merchant.js          # 商家相关API
│   └── ...                     # 其他API
├── 📁 utils/                   # 工具函数
│   ├── 📄 index.js             # 通用工具
│   └── 📄 distanceSorting.js   # 距离排序
├── 📁 static/                  # 静态资源
├── 📁 public/                  # 公共资源
├── 📄 App.vue                  # 应用入口
├── 📄 main.js                  # 主入口文件
├── 📄 pages.json               # 页面配置
├── 📄 manifest.json            # 应用配置
└── 📄 package.json             # 项目配置
```

## 🔧 核心功能模块

### 1. 用户系统
- **注册登录** - 手机号密码登录、微信一键登录
- **用户信息** - 个人资料管理、头像上传
- **安全设置** - 密码修改、账号安全

### 2. 积分系统
```javascript
// 积分类型
{
  "green_points": "绿色积分",    // 通过扫码、签到等获得
  "red_points": "D9能量",       // 需要充值获得，可提取
  "deposit": "保证金"           // 商家/代理保证金
}
```

### 3. 商家模块
- **商家入驻** - 资料提交、审核流程
- **店铺管理** - 店铺信息、商品发布
- **积分赠送** - 向用户赠送绿色积分
- **保证金管理** - 保证金缴纳、提取

### 4. 代理推荐
- **代理申请** - 成为平台代理
- **推荐奖励** - 多层级佣金分配
- **团队管理** - 下级代理管理

### 5. 扫码功能
```javascript
// 扫码逻辑
uni.scanCode({
  scanType: ["qrCode", "wxCode"],
  success: function (res) {
    // 处理扫码结果
    uni.navigateTo({
      url: "/" + res.path
    });
  }
});
```

## 🔐 安全机制

### JWT认证
```javascript
// 自动Token刷新机制
class Request {
  async refreshToken() {
    const refreshToken = uni.getStorageSync('refreshToken');
    // 刷新逻辑
  }
}
```

### 地址验证
```javascript
// Substrate地址验证
import { decodeAddress } from '@polkadot/util-crypto'

export function substrateAddressValidator(address) {
  try {
    if (!address.startsWith('Dn')) return false;
    decodeAddress(address.slice(2));
    return true;
  } catch (error) {
    return false;
  }
}
```

## 📱 平台适配

### 条件编译
```javascript
// 微信小程序
// #ifdef MP-WEIXIN
<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
  一键获取手机号
</button>
// #endif

// App端
// #ifdef APP-PLUS
plus.navigator.closeSplashscreen();
// #endif
```

### 响应式设计
```scss
// 使用rpx单位适配不同屏幕
.container {
  width: 750rpx;
  padding: 30rpx;
}
```

## 🌐 API接口

### 基础配置
```javascript
// service/index.js
const BASE_URL = 'https://api.example.com/api';  // 示例API地址
const TIME_OUT = 60000;
```

### 主要接口
| 模块 | 接口 | 说明 |
|------|------|------|
| 用户 | `/users/login/` | 用户登录 |
| 用户 | `/users/register/` | 用户注册 |
| 积分 | `/points/transactions/` | 积分记录 |
| 商家 | `/merchant/` | 商家信息 |
| 店铺 | `/shops/` | 店铺列表 |

## 🎨 UI组件

### 自定义组件
- **CityPicker** - 城市选择组件
- **PointsPopup** - 积分弹窗
- **NavBar** - 自定义导航栏
- **ShopList** - 店铺列表

### 使用示例
```vue
<template>
  <CityPicker @changeCity="bindCityChange" />
  <PointsPopup 
    :visible="showPointsPopup" 
    @close="closePointsPopup" 
  />
</template>
```

## 🚀 部署指南

### 微信小程序
1. 在微信开发者工具中导入项目
2. 配置AppID
3. 预览/上传代码

### H5部署
```bash
npm run build:h5
# 将dist/build/h5目录部署到服务器
```

### App打包
1. 在HBuilderX中配置证书
2. 选择发行 -> 原生App-云打包
3. 配置参数后提交打包

## 🧪 开发调试

### 日志管理
```javascript
// 开发环境日志
console.log('用户信息:', userInfo);

// 生产环境关闭日志
Vue.config.productionTip = false;
```

### 真机调试
```bash
# 安装uni-app开发工具
npm install -g @dcloudio/uvm
npm install -g @dcloudio/cli

# 运行到手机
npm run dev:app-plus
```

## 📋 常见问题

### Q: 如何配置微信登录？
A: 在manifest.json中配置微信AppID，并实现getPhoneNumber方法。

### Q: 如何处理跨域问题？
A: 在manifest.json的h5配置中添加proxy代理配置。

### Q: 如何自定义导航栏？
A: 在pages.json中设置`"navigationStyle": "custom"`。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- **客服QQ**: [请联系项目管理员获取]
- **项目地址**: [GitHub仓库地址]
- **技术支持**: [技术支持邮箱]

---

© 2024 满仓生态. All rights reserved. 