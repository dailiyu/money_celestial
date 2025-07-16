# 满仓生态 - 开发者指南

## 📋 目录
- [开发环境搭建](#开发环境搭建)
- [项目架构](#项目架构)
- [编码规范](#编码规范)
- [Polkadot集成](#polkadot集成)
- [组件开发](#组件开发)
- [状态管理](#状态管理)
- [API接口](#api接口)
- [工具函数](#工具函数)
- [调试指南](#调试指南)

## 🛠️ 开发环境搭建

### 1. 基础环境
```bash
# Node.js版本要求
node -v  # >= 14.0.0
npm -v   # >= 6.0.0

# 安装HBuilderX (推荐)
# 下载地址: https://www.dcloud.io/hbuilderx.html

# 或使用VS Code + uni-app插件
code --install-extension uni-helper.uni-app-vscode
```

### 2. 项目导入和运行

#### 在HBuilderX中导入项目
1. 打开HBuilderX
2. 文件 → 导入 → 从本地目录导入
3. 选择项目根目录 `money_celestial`
4. 等待项目导入完成

#### 安装依赖
在HBuilderX的内置终端中运行：
```bash
# 克隆项目（如需要）
git clone [项目地址]
cd money_celestial

# 安装依赖
npm install
```

#### 运行项目

##### H5开发调试
1. 在HBuilderX中右键项目根目录
2. 运行 → 运行到浏览器 → Chrome/Edge/Safari
3. 或使用快捷键：`Ctrl+R` (Windows) / `Cmd+R` (Mac)

##### 微信小程序开发
1. 右键项目根目录
2. 运行 → 运行到小程序模拟器 → 微信开发者工具
3. 首次运行需要配置微信开发者工具路径

##### App开发调试
1. 右键项目根目录  
2. 运行 → 运行到手机或模拟器
3. 选择Android模拟器/iOS模拟器/真机调试

#### 项目发布

##### H5发布
1. 右键项目根目录
2. 发行 → 网站-H5手机版
3. 配置发布参数
4. 点击发行，生成dist目录

##### 微信小程序发布
1. 右键项目根目录
2. 发行 → 小程序-微信
3. 在微信开发者工具中上传代码

##### App打包
1. 右键项目根目录
2. 发行 → 原生App-云打包
3. 配置签名证书和打包参数
4. 提交云端打包

### 3. 开发工具配置

#### HBuilderX配置
```json
// .hbuilderx/launch.json
{
  "version": "0.0",
  "configurations": [
    {
      "playground": "standard",
      "type": "uniApp",
      "name": "启动H5"
    }
  ]
}
```

#### VS Code配置
```json
// .vscode/settings.json
{
  "typescript.preferences.quoteStyle": "single",
  "javascript.preferences.quoteStyle": "single",
  "editor.tabSize": 2,
  "editor.detectIndentation": false
}
```

## 🏗️ 项目架构

### 1. 目录结构详解
```
src/
├── 📁 pages/                    # 页面文件
│   ├── 📁 index/               # 首页
│   │   ├── index.vue           # 首页组件
│   │   └── index.scss          # 首页样式
│   ├── 📁 login/               # 登录模块
│   └── ...
├── 📁 components/              # 公共组件
│   ├── 📁 common/              # 通用组件
│   ├── 📁 business/            # 业务组件
│   └── 📁 form/                # 表单组件
├── 📁 store/                   # Pinia状态管理
│   ├── 📄 modules/             # 模块化store
│   └── 📄 index.js             # store入口
├── 📁 service/                 # API服务层
│   ├── 📄 api/                 # API接口定义
│   ├── 📄 request/             # 请求封装
│   └── 📄 mock/                # Mock数据
├── 📁 utils/                   # 工具函数
├── 📁 mixins/                  # 混入
├── 📁 directives/              # 自定义指令
└── 📁 assets/                  # 静态资源
```

### 2. 分层架构
```
┌─────────────────────────────────────┐
│           View Layer (页面层)         │
│           - Pages                   │
│           - Components              │
├─────────────────────────────────────┤
│         Business Layer (业务层)      │
│           - Store (Pinia)           │
│           - Mixins                  │
├─────────────────────────────────────┤
│         Service Layer (服务层)       │
│           - API封装                 │
│           - HTTP请求                │
├─────────────────────────────────────┤
│         Utils Layer (工具层)         │
│           - 工具函数                 │
│           - 常量定义                 │
└─────────────────────────────────────┘
```

## 📝 编码规范

### 1. 命名规范
```javascript
// 文件命名：kebab-case
user-profile.vue
point-management.js

// 组件命名：PascalCase
export default {
  name: 'UserProfile'
}

// 变量命名：camelCase
const userInfo = {}
const isLoading = false

// 常量命名：UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'  // 示例API地址
const MAX_RETRY_COUNT = 3

// CSS类名：kebab-case
.user-profile {}
.point-card {}
```

### 2. Vue组件规范
```vue
<template>
  <!-- 使用语义化的HTML标签 -->
  <view class="user-profile">
    <view class="user-profile__header">
      <!-- 内容 -->
    </view>
    <view class="user-profile__content">
      <!-- 内容 -->
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/store/user'

// 1. 响应式数据
const userInfo = ref({})
const isLoading = ref(false)

// 2. 计算属性
const displayName = computed(() => {
  return userInfo.value.name || '未设置'
})

// 3. 方法定义
const fetchUserInfo = async () => {
  try {
    isLoading.value = true
    // API调用
  } catch (error) {
    console.error('获取用户信息失败:', error)
  } finally {
    isLoading.value = false
  }
}

// 4. 生命周期
onMounted(() => {
  fetchUserInfo()
})
</script>

<style lang="scss" scoped>
.user-profile {
  &__header {
    // 样式
  }
  
  &__content {
    // 样式
  }
}
</style>
```

### 3. 代码注释规范
```javascript
/**
 * 用户登录函数
 * @param {Object} loginData - 登录数据
 * @param {string} loginData.phone - 手机号
 * @param {string} loginData.password - 密码
 * @returns {Promise<Object>} 返回用户信息
 */
export async function userLogin(loginData) {
  // 参数验证
  if (!loginData.phone) {
    throw new Error('手机号不能为空')
  }
  
  try {
    // 发送登录请求
    const response = await http.post('/users/login/', loginData)
    return response.data
  } catch (error) {
    // 错误处理
    console.error('登录失败:', error)
    throw error
  }
}
```

## 🔗 Polkadot集成

### 1. 依赖包说明
项目中使用了以下Polkadot相关的包：

```json
{
  "@polkadot/keyring": "^13.2.3",      // 密钥管理
  "@polkadot/util": "^13.2.3",         // 通用工具函数  
  "@polkadot/util-crypto": "^13.2.3",  // 加密工具函数
  "fast-text-encoding": "^1.0.6"       // 文本编码支持
}
```

### 2. 地址验证功能

#### Substrate地址验证器
```javascript
// utils/polkadot.js
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import { hexToU8a, isHex, u8aToHex } from '@polkadot/util'

/**
 * 验证Substrate地址的有效性
 * @param {string} address - 要验证的地址
 * @returns {boolean} 地址是否有效
 */
export function substrateAddressValidator(address) {
  try {
    // 检查地址是否以 'Dn' 开头（项目特定前缀）
    if (!address.startsWith('Dn')) {
      return false
    }
    
    // 删除 'Dn' 前缀获取实际地址
    const cleanedAddress = deleteAddressDn(address)
    
    // 使用Polkadot工具验证地址
    decodeAddress(cleanedAddress)
    
    return true
  } catch (error) {
    console.error('地址验证失败:', error)
    return false
  }
}

/**
 * 删除地址的Dn前缀
 * @param {string} address - 带前缀的地址
 * @returns {string} 不带前缀的地址
 */
function deleteAddressDn(address) {
  return address.slice(2) // 删除前两位 "Dn"
}

/**
 * 格式化显示地址（中间用省略号）
 * @param {string} address - 完整地址
 * @param {number} prefixLength - 前缀长度
 * @param {number} suffixLength - 后缀长度
 * @returns {string} 格式化后的地址
 */
export function formatAddress(address, prefixLength = 6, suffixLength = 6) {
  if (!address || address.length <= prefixLength + suffixLength) {
    return address
  }
  
  const prefix = address.slice(0, prefixLength)
  const suffix = address.slice(-suffixLength)
  
  return `${prefix}...${suffix}`
}
```

### 3. 密钥管理

```javascript
// utils/keyring.js
import { Keyring } from '@polkadot/keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'

let keyring = null

/**
 * 初始化Keyring
 * @returns {Promise<Keyring>} Keyring实例
 */
export async function initKeyring() {
  if (keyring) {
    return keyring
  }
  
  // 等待加密功能准备就绪
  await cryptoWaitReady()
  
  // 创建Keyring实例（SS58格式）
  keyring = new Keyring({ type: 'sr25519', ss58Format: 42 })
  
  return keyring
}

/**
 * 从助记词创建密钥对
 * @param {string} mnemonic - 助记词
 * @returns {Promise<Object>} 密钥对信息
 */
export async function createKeyPairFromMnemonic(mnemonic) {
  const keyring = await initKeyring()
  
  try {
    const keyPair = keyring.addFromMnemonic(mnemonic)
    
    return {
      address: keyPair.address,
      publicKey: u8aToHex(keyPair.publicKey),
      isValid: true
    }
  } catch (error) {
    console.error('从助记词创建密钥对失败:', error)
    return {
      address: null,
      publicKey: null,
      isValid: false,
      error: error.message
    }
  }
}
```

### 4. 使用示例

#### 在组件中验证地址
```vue
<template>
  <view class="address-input">
    <uni-easyinput 
      v-model="pointsAccount" 
      placeholder="请输入积分账号地址"
      @blur="validateAddress"
    />
    <view v-if="addressError" class="error-message">
      {{ addressError }}
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { substrateAddressValidator, formatAddress } from '@/utils/polkadot'

const pointsAccount = ref('')
const addressError = ref('')

// 验证地址
const validateAddress = () => {
  if (!pointsAccount.value) {
    addressError.value = ''
    return
  }
  
  const isValid = substrateAddressValidator(pointsAccount.value)
  
  if (!isValid) {
    addressError.value = '请输入有效的积分账号地址'
  } else {
    addressError.value = ''
    console.log('格式化地址:', formatAddress(pointsAccount.value))
  }
}
</script>

<style scoped>
.error-message {
  color: #ff4444;
  font-size: 24rpx;
  margin-top: 10rpx;
}
</style>
```

#### 在业务逻辑中使用
```javascript
// 绑定积分账号
import { substrateAddressValidator } from '@/utils/polkadot'

export const bindPointsAccount = async (accountData) => {
  const { points_account, pay_password } = accountData
  
  // 验证地址格式
  if (!substrateAddressValidator(points_account)) {
    throw new Error('积分账号地址格式不正确')
  }
  
  try {
    const response = await http.post('/wallets/wallet/bind/points/account/', {
      points_account,
      pay_password
    })
    
    return response
  } catch (error) {
    console.error('绑定积分账号失败:', error)
    throw error
  }
}
```

### 5. 错误处理

```javascript
// utils/polkadot-errors.js

/**
 * Polkadot相关错误处理
 */
export class PolkadotError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'PolkadotError'
    this.code = code
  }
}

/**
 * 处理地址相关错误
 * @param {Error} error - 原始错误
 * @returns {string} 用户友好的错误信息
 */
export function handleAddressError(error) {
  if (error.message.includes('Invalid decoded address length')) {
    return '地址长度不正确'
  }
  
  if (error.message.includes('Invalid address format')) {
    return '地址格式不正确'
  }
  
  if (error.message.includes('Invalid checksum')) {
    return '地址校验和不正确'
  }
  
  return '地址验证失败，请检查地址格式'
}
```

### 6. 配置说明

#### 环境配置
```javascript
// config/polkadot.js
export const POLKADOT_CONFIG = {
  // SS58地址格式
  ss58Format: 42,
  
  // 支持的地址前缀
  addressPrefix: 'Dn',
  
  // 密钥类型
  keyType: 'sr25519',
  
  // 地址显示配置
  addressDisplay: {
    prefixLength: 6,
    suffixLength: 6
  }
}
```

#### 类型定义（TypeScript）
```typescript
// types/polkadot.d.ts
export interface KeyPairInfo {
  address: string
  publicKey: string
  isValid: boolean
  error?: string
}

export interface AddressValidationResult {
  isValid: boolean
  error?: string
  formattedAddress?: string
}
```

### 7. 测试用例

```javascript
// tests/polkadot.test.js
import { substrateAddressValidator, formatAddress } from '@/utils/polkadot'

describe('Polkadot工具测试', () => {
  test('有效地址验证', () => {
    const validAddress = 'DnValidAddressExample123456789'
    expect(substrateAddressValidator(validAddress)).toBe(true)
  })
  
  test('无效地址验证', () => {
    const invalidAddress = 'InvalidAddress'
    expect(substrateAddressValidator(invalidAddress)).toBe(false)
  })
  
  test('地址格式化', () => {
    const address = 'DnLongAddressExample123456789EndPart'
    const formatted = formatAddress(address)
    expect(formatted).toMatch(/^Dn.*\.\.\.*Part$/)
  })
})
```

## 🧩 组件开发

### 1. 组件设计原则
- **单一职责**: 一个组件只负责一个功能
- **高内聚低耦合**: 组件内部逻辑紧密，对外依赖最少
- **可复用性**: 设计通用的props接口
- **可扩展性**: 预留插槽和事件

### 2. 组件模板
```vue
<!-- components/common/BaseButton.vue -->
<template>
  <button 
    :class="buttonClass" 
    :disabled="loading || disabled"
    @click="handleClick"
  >
    <uni-icons 
      v-if="loading" 
      type="spinner-cycle" 
      class="loading-icon"
    />
    <slot v-else>{{ text }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

// Props定义
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  text: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// Events定义
const emit = defineEmits(['click'])

// 计算属性
const buttonClass = computed(() => {
  return [
    'base-button',
    `base-button--${props.type}`,
    `base-button--${props.size}`,
    {
      'base-button--loading': props.loading,
      'base-button--disabled': props.disabled
    }
  ]
})

// 方法
const handleClick = (event) => {
  if (!props.loading && !props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  border-radius: 8rpx;
  transition: all 0.3s;
  
  &--primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  &--secondary {
    background: #f0f0f0;
    color: #333;
  }
  
  &--small {
    padding: 20rpx 40rpx;
    font-size: 28rpx;
  }
  
  &--medium {
    padding: 30rpx 60rpx;
    font-size: 32rpx;
  }
  
  &--loading,
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.loading-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
```

### 3. 组件使用
```vue
<template>
  <BaseButton 
    type="primary" 
    size="large"
    :loading="isSubmitting"
    @click="handleSubmit"
  >
    提交
  </BaseButton>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
</script>
```

## 🗄️ 状态管理

### 1. Store结构
```javascript
// store/modules/user.js
import { defineStore } from 'pinia'
import { userApi } from '@/service/api/user'

export const useUserStore = defineStore('user', {
  // 状态定义
  state: () => ({
    userInfo: {},
    isLoggedIn: false,
    permissions: [],
    preferences: {
      theme: 'light',
      language: 'zh-CN'
    }
  }),

  // 计算属性
  getters: {
    displayName: (state) => {
      return state.userInfo.nickname || state.userInfo.phone || '用户'
    },
    
    hasPermission: (state) => (permission) => {
      return state.permissions.includes(permission)
    },
    
    avatar: (state) => {
      return state.userInfo.avatar || '/static/default-avatar.png'
    }
  },

  // 异步操作
  actions: {
    // 登录
    async login(credentials) {
      try {
        const response = await userApi.login(credentials)
        const { user, token, permissions } = response
        
        // 更新状态
        this.userInfo = user
        this.isLoggedIn = true
        this.permissions = permissions
        
        // 保存token
        uni.setStorageSync('accessToken', token.access)
        uni.setStorageSync('refreshToken', token.refresh)
        
        return response
      } catch (error) {
        console.error('登录失败:', error)
        throw error
      }
    },

    // 登出
    async logout() {
      try {
        await userApi.logout()
      } finally {
        // 清理状态
        this.$reset()
        
        // 清理本地存储
        uni.removeStorageSync('accessToken')
        uni.removeStorageSync('refreshToken')
        
        // 跳转到登录页
        uni.reLaunch({
          url: '/pages/login/login'
        })
      }
    },

    // 更新用户信息
    async updateProfile(profileData) {
      try {
        const updatedUser = await userApi.updateProfile(profileData)
        this.userInfo = { ...this.userInfo, ...updatedUser }
        return updatedUser
      } catch (error) {
        console.error('更新用户信息失败:', error)
        throw error
      }
    },

    // 获取用户信息
    async fetchUserInfo() {
      try {
        const userInfo = await userApi.getUserInfo()
        this.userInfo = userInfo
        this.isLoggedIn = true
        return userInfo
      } catch (error) {
        console.error('获取用户信息失败:', error)
        this.isLoggedIn = false
        throw error
      }
    }
  }
})
```

### 2. Store使用
```vue
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

// 响应式引用
const { userInfo, isLoggedIn, displayName } = storeToRefs(userStore)

// 方法调用
const handleLogin = async (credentials) => {
  try {
    await userStore.login(credentials)
    uni.showToast({ title: '登录成功' })
  } catch (error) {
    uni.showToast({ 
      title: error.message || '登录失败', 
      icon: 'none' 
    })
  }
}
</script>
```

## 🌐 API接口

### 1. 请求封装
```javascript
// service/request/index.js
class HttpRequest {
  constructor() {
    this.baseURL = 'https://api.example.com/api'  // 示例API地址
    this.timeout = 60000
  }

  // 请求拦截器
  interceptRequest(config) {
    const token = uni.getStorageSync('accessToken')
    if (token) {
      config.header = {
        ...config.header,
        'Authorization': `Bearer ${token}`
      }
    }
    return config
  }

  // 响应拦截器
  interceptResponse(response) {
    const { statusCode, data } = response
    
    // 成功响应
    if (statusCode >= 200 && statusCode < 300) {
      return data
    }
    
    // Token过期，尝试刷新
    if (statusCode === 401) {
      return this.refreshTokenAndRetry(response.config)
    }
    
    // 其他错误
    throw new Error(data.message || '请求失败')
  }

  // Token刷新
  async refreshTokenAndRetry(originalConfig) {
    try {
      const refreshToken = uni.getStorageSync('refreshToken')
      const response = await this.post('/auth/refresh', { refresh: refreshToken })
      
      // 保存新token
      uni.setStorageSync('accessToken', response.access)
      
      // 重试原请求
      return this.request(originalConfig)
    } catch (error) {
      // 刷新失败，跳转登录页
      uni.reLaunch({ url: '/pages/login/login' })
      throw error
    }
  }

  // 基础请求方法
  request(config) {
    return new Promise((resolve, reject) => {
      // 应用请求拦截器
      const finalConfig = this.interceptRequest({
        url: this.baseURL + config.url,
        method: config.method || 'GET',
        data: config.data,
        header: config.header || {},
        timeout: this.timeout
      })

      uni.request({
        ...finalConfig,
        success: (response) => {
          try {
            const result = this.interceptResponse(response)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        },
        fail: (error) => {
          reject(new Error('网络请求失败'))
        }
      })
    })
  }

  // 便捷方法
  get(url, params) {
    return this.request({ url, method: 'GET', data: params })
  }

  post(url, data) {
    return this.request({ url, method: 'POST', data })
  }

  put(url, data) {
    return this.request({ url, method: 'PUT', data })
  }

  delete(url, params) {
    return this.request({ url, method: 'DELETE', data: params })
  }
}

export const http = new HttpRequest()
```

### 2. API模块化
```javascript
// service/api/user.js
import { http } from '../request'

export const userApi = {
  // 用户登录
  login(credentials) {
    return http.post('/users/login/', credentials)
  },

  // 用户注册
  register(userData) {
    return http.post('/users/register/', userData)
  },

  // 获取用户信息
  getUserInfo() {
    return http.get('/users/profile/')
  },

  // 更新用户信息
  updateProfile(profileData) {
    return http.put('/users/profile/', profileData)
  },

  // 修改密码
  changePassword(passwordData) {
    return http.post('/users/change-password/', passwordData)
  },

  // 忘记密码
  forgotPassword(phone) {
    return http.post('/users/forgot-password/', { phone })
  }
}
```

### 3. API使用示例
```javascript
// 在组件中使用
import { userApi } from '@/service/api/user'

const login = async (credentials) => {
  try {
    uni.showLoading({ title: '登录中...' })
    
    const response = await userApi.login(credentials)
    
    // 处理成功响应
    uni.hideLoading()
    uni.showToast({ title: '登录成功' })
    
    return response
  } catch (error) {
    uni.hideLoading()
    uni.showToast({ 
      title: error.message || '登录失败', 
      icon: 'none' 
    })
    throw error
  }
}
```

## 🛠️ 工具函数

### 1. 通用工具
```javascript
// utils/common.js

/**
 * 防抖函数
 * @param {Function} func 要防抖的函数
 * @param {number} delay 延迟时间
 * @returns {Function} 防抖后的函数
 */
export function debounce(func, delay = 300) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * 节流函数
 * @param {Function} func 要节流的函数
 * @param {number} limit 限制时间
 * @returns {Function} 节流后的函数
 */
export function throttle(func, limit = 300) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * 深拷贝
 * @param {any} obj 要拷贝的对象
 * @returns {any} 拷贝后的对象
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  
  const cloned = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key])
    }
  }
  return cloned
}

/**
 * 格式化数字
 * @param {number} num 数字
 * @param {number} precision 精度
 * @returns {string} 格式化后的字符串
 */
export function formatNumber(num, precision = 2) {
  if (isNaN(num)) return '0'
  
  if (num >= 1e8) {
    return (num / 1e8).toFixed(precision) + '亿'
  } else if (num >= 1e4) {
    return (num / 1e4).toFixed(precision) + '万'
  }
  
  return num.toLocaleString()
}
```

### 2. 业务工具
```javascript
// utils/business.js

/**
 * 验证手机号
 * @param {string} phone 手机号
 * @returns {boolean} 是否有效
 */
export function validatePhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * 验证密码强度
 * @param {string} password 密码
 * @returns {Object} 验证结果
 */
export function validatePassword(password) {
  const result = {
    isValid: false,
    strength: 'weak',
    message: ''
  }
  
  if (password.length < 6) {
    result.message = '密码至少6位'
    return result
  }
  
  if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    result.strength = 'strong'
  } else if (password.length >= 6 && /[A-Za-z]/.test(password) && /\d/.test(password)) {
    result.strength = 'medium'
  }
  
  result.isValid = true
  return result
}

/**
 * 处理图片上传
 * @param {Object} options 上传选项
 * @returns {Promise<string>} 图片URL
 */
export function uploadImage(options = {}) {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count: options.count || 1,
      sizeType: options.sizeType || ['compressed'],
      sourceType: options.sourceType || ['album', 'camera'],
      success: (res) => {
        const filePath = res.tempFilePaths[0]
        
        // 上传到服务器
        uni.uploadFile({
          url: 'https://api.example.com/api/upload/',  // 示例API地址
          filePath: filePath,
          name: 'image',
          header: {
            'Authorization': `Bearer ${uni.getStorageSync('accessToken')}`
          },
          success: (uploadRes) => {
            const data = JSON.parse(uploadRes.data)
            resolve(data.image_url)
          },
          fail: (error) => {
            reject(error)
          }
        })
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
```

## 🐛 调试指南

### 1. 控制台调试
```javascript
// 开发环境日志
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', debugData)
}

// 错误监控
window.addEventListener('error', (event) => {
  console.error('全局错误:', event.error)
  // 上报错误到服务器
})

// Vue错误捕获
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue错误:', err, info)
}
```

### 2. 网络请求调试
```javascript
// 请求日志
const originalRequest = uni.request
uni.request = function(options) {
  console.log('请求:', options.url, options.data)
  
  const originalSuccess = options.success
  options.success = function(res) {
    console.log('响应:', options.url, res.data)
    originalSuccess && originalSuccess(res)
  }
  
  return originalRequest.call(this, options)
}
```

### 3. 性能监控
```javascript
// 页面性能监控
export function performanceMonitor() {
  const startTime = Date.now()
  
  return {
    end(pageName) {
      const endTime = Date.now()
      const duration = endTime - startTime
      console.log(`页面 ${pageName} 加载耗时: ${duration}ms`)
    }
  }
}

// 使用示例
const monitor = performanceMonitor()
// ... 页面逻辑
monitor.end('首页')
```

### 4. 真机调试

#### HBuilderX中的调试方式
```
1. App真机调试
   - 右键项目根目录
   - 运行 → 运行到手机或模拟器
   - 选择连接的设备

2. H5调试
   - 右键项目根目录
   - 运行 → 运行到浏览器
   - 在浏览器开发者工具中查看日志

3. 微信小程序调试
   - 右键项目根目录
   - 运行 → 运行到小程序模拟器 → 微信开发者工具
   - 在微信开发者工具中查看调试信息
```

#### 调试日志查看
```
- HBuilderX控制台：查看编译日志和运行时错误
- 浏览器DevTools：H5端调试
- 微信开发者工具：小程序端调试
- Android Studio/Xcode：原生App调试
```
---

## 📚 参考资料

- [uni-app官方文档](https://uniapp.dcloud.io/)
- [Vue.js 3官方文档](https://v3.vuejs.org/)
- [Pinia状态管理](https://pinia.vuejs.org/)
- [Polkadot.js文档](https://polkadot.js.org/docs/)
- [小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)

---

© 2024 满仓生态开发团队 