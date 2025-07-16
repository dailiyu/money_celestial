# 满仓生态 - API接口文档

## 📋 目录
- [基础信息](#基础信息)
- [认证机制](#认证机制)
- [用户相关接口](#用户相关接口)
- [积分系统接口](#积分系统接口)
- [商家相关接口](#商家相关接口)
- [代理相关接口](#代理相关接口)
- [文件上传接口](#文件上传接口)
- [错误码说明](#错误码说明)

## 🌐 基础信息

### 服务器地址
```
生产环境: https://api.example.com/api        # 示例API地址
开发环境: http://localhost:8000/api          # 本地开发地址
```

### 请求格式
- **Content-Type**: `application/json`
- **编码**: `UTF-8`
- **请求方法**: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`

### 响应格式
```json
{
  "code": 200,
  "message": "success",
  "data": {},
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## 🔐 认证机制

### JWT Token认证
```http
Authorization: Bearer <access_token>
```

### Token刷新
```http
POST /users/token/refresh/
Authorization: Bearer <refresh_token>

Response:
{
  "access": "new_access_token",
  "refresh": "new_refresh_token"
}
```

## 👤 用户相关接口

### 1. 用户注册
```http
POST /users/register/
Content-Type: application/json

Request:
{
  "phone_number": "13800138000",
  "password": "password123",
  "verify_code": "123456"
}

Response:
{
  "user_id": "13800138000",
  "access": "access_token",
  "refresh": "refresh_token",
  "message": "注册成功"
}
```

### 2. 用户登录
```http
POST /users/login/
Content-Type: application/json

Request:
{
  "phone_number": "13800138000",
  "password": "password123",
  "version": "1.0.0"
}

Response:
{
  "user_id": "13800138000",
  "access": "access_token",
  "refresh": "refresh_token",
  "user_info": {
    "id": 1,
    "phone_number": "13800138000",
    "nickname": "用户昵称",
    "avatar": "头像URL",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

### 3. 微信一键登录
```http
POST /users/wx-login/
Content-Type: application/json

Request:
{
  "session_key": "wx_session_key",
  "encrypted_data": "encrypted_phone_data",
  "iv": "initialization_vector"
}

Response:
{
  "user_id": "13800138000",
  "access": "access_token",
  "refresh": "refresh_token"
}
```

### 4. 获取用户信息
```http
GET /users/profile/
Authorization: Bearer <access_token>

Response:
{
  "id": 1,
  "phone_number": "13800138000",
  "nickname": "用户昵称",
  "avatar": "头像URL",
  "real_name": "真实姓名",
  "id_card": "身份证号",
  "address": "地址",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### 5. 更新用户信息
```http
PUT /users/profile/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "nickname": "新昵称",
  "avatar": "新头像URL",
  "real_name": "真实姓名",
  "address": "新地址"
}

Response:
{
  "message": "更新成功",
  "user_info": { /* 更新后的用户信息 */ }
}
```

### 6. 修改密码
```http
POST /users/change-password/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "old_password": "old_password",
  "new_password": "new_password"
}

Response:
{
  "message": "密码修改成功"
}
```

## 💰 积分系统接口

### 1. 获取钱包信息
```http
GET /wallets/
Authorization: Bearer <access_token>

Response:
{
  "green_points": 1000.00,
  "red_points": 500.00,
  "deposit": 2000.00,
  "agent_deposit": 0.00,
  "points_account": "DnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "wallet_address": "5FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

### 2. 积分交易记录
```http
GET /points/transactions/
Authorization: Bearer <access_token>
Query Parameters:
- page: 页码 (默认1)
- page_size: 每页数量 (默认20)
- transaction_type: 交易类型 (increase/decrease)
- transaction_method: 交易方式

Response:
{
  "count": 100,
  "next": "next_page_url",
  "previous": "previous_page_url",
  "results": [
    {
      "id": 1,
      "transaction_type": "increase",
      "transaction_method": "gift_green_points",
      "amount": 100.00,
      "balance_after": 1100.00,
      "description": "商家赠送",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 3. 绑定积分账号
```http
POST /wallets/wallet/bind/points/account/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "points_account": "DnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "pay_password": "支付密码"
}

Response:
{
  "message": "绑定成功",
  "points_account": "DnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

### 4. 提取绿积分
```http
POST /orders/withdraw/green/points/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "amount": 100.00,
  "pay_password": "支付密码",
  "points_account": "DnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

Response:
{
  "order_id": "ORD20240101001",
  "message": "提取申请已提交",
  "amount": 100.00,
  "fee": 5.00,
  "actual_amount": 95.00
}
```

### 5. 充值红积分
```http
POST /orders/add/red/points/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "amount": 500.00,
  "pay_method": "wechat"
}

Response:
{
  "order_id": "ORD20240101002",
  "pay_info": {
    "prepay_id": "wx_prepay_id",
    "sign": "payment_sign"
  },
  "message": "订单创建成功"
}
```

### 6. 微信支付
```http
POST /orders/pay/wechat/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "order_id": "ORD20240101002"
}

Response:
{
  "prepay_id": "wx_prepay_id",
  "timestamp": "1640995200",
  "nonce_str": "random_string",
  "package": "prepay_id=wx_prepay_id",
  "sign_type": "RSA",
  "pay_sign": "payment_signature"
}
```

## 🏪 商家相关接口

### 1. 创建商家
```http
POST /merchant/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "name": "商家名称",
  "description": "商家描述",
  "contact_phone": "联系电话"
}

Response:
{
  "id": 1,
  "name": "商家名称",
  "is_approved": false,
  "message": "商家创建成功，等待审核"
}
```

### 2. 获取商家信息
```http
GET /merchant/get/
Authorization: Bearer <access_token>

Response:
{
  "id": 1,
  "name": "商家名称",
  "description": "商家描述",
  "is_approved": true,
  "contact_phone": "联系电话",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### 3. 创建店铺
```http
POST /merchant/stores/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "name": "店铺名称",
  "icon": "店铺图标URL",
  "address": "店铺地址",
  "detail": "店铺详情",
  "category_ids": [1, 2, 3]
}

Response:
{
  "id": 1,
  "name": "店铺名称",
  "icon": "店铺图标URL",
  "address": "店铺地址",
  "is_approved": false,
  "message": "店铺创建成功，等待审核"
}
```

### 4. 获取店铺信息
```http
GET /merchant/stores/get/
Authorization: Bearer <access_token>

Response:
{
  "id": 1,
  "merchant_id": 1,
  "name": "店铺名称",
  "icon": "店铺图标URL",
  "address": "店铺地址",
  "detail": "店铺详情",
  "is_approved": true,
  "categories": [
    {
      "id": 1,
      "name": "分类名称"
    }
  ],
  "created_at": "2024-01-01T00:00:00Z"
}
```

### 5. 更新店铺信息
```http
PUT /merchant/stores/update/{store_id}/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "name": "新店铺名称",
  "icon": "新店铺图标URL",
  "address": "新店铺地址",
  "detail": "新店铺详情"
}

Response:
{
  "message": "店铺信息更新成功",
  "store_info": { /* 更新后的店铺信息 */ }
}
```

### 6. 商家码认证
```http
PUT /merchant/code/verifications/{user_id}/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "merchant_code": "MERCHANT_CODE_XXX",
  "pay_password": "支付密码"
}

Response:
{
  "message": "商家码认证成功",
  "merchant_info": {
    "code": "MERCHANT_CODE_XXX",
    "verified_at": "2024-01-01T00:00:00Z"
  }
}
```

### 7. 赠送积分
```http
POST /orders/merchant/give/green/points/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "user_phone": "13800138000",
  "amount": 100.00,
  "pay_password": "支付密码"
}

Response:
{
  "order_id": "ORD20240101003",
  "message": "积分赠送成功",
  "amount": 100.00,
  "recipient": "13800138000"
}
```

### 8. 获取店铺列表
```http
GET /shops/
Query Parameters:
- page: 页码
- page_size: 每页数量
- category: 分类ID
- keyword: 搜索关键词
- city: 城市
- lat: 纬度
- lng: 经度

Response:
{
  "count": 50,
  "next": "next_page_url",
  "previous": "previous_page_url",
  "results": [
    {
      "id": 1,
      "name": "店铺名称",
      "icon": "店铺图标URL",
      "address": "店铺地址",
      "distance": 1.5,
      "categories": ["分类1", "分类2"],
      "rating": 4.5,
      "is_verified": true
    }
  ]
}
```

### 9. 获取商家分类
```http
GET /merchant/categories/
Response:
{
  "categories": [
    {
      "id": 1,
      "name": "餐饮美食",
      "description": "餐厅、小吃、饮品等",
      "icon": "category_icon_url"
    },
    {
      "id": 2,
      "name": "购物消费",
      "description": "服装、数码、日用品等",
      "icon": "category_icon_url"
    }
  ]
}
```

### 10. 保证金管理
```http
# 增加保证金
POST /merchant/deposit/add/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "amount": 1000.00,
  "pay_method": "wechat"
}

# 解除保证金
POST /merchant/deposit/remove/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "amount": 500.00,
  "pay_password": "支付密码",
  "reason": "解除原因"
}
```

## 📊 统计排行接口

### 1. 商家销售排行
```http
GET /stats/total-rankings/
Query Parameters:
- period: 统计周期 (daily/weekly/monthly)
- limit: 返回数量 (默认10)

Response:
{
  "rankings": [
    {
      "rank": 1,
      "merchant_name": "商家名称",
      "merchant_icon": "商家图标",
      "total_sales": 50000.00,
      "growth_rate": 0.15
    }
  ]
}
```

### 2. 新商家排行
```http
GET /stats/rankings/
Query Parameters:
- type: 排行类型 (new_merchant/points_given)
- period: 统计周期

Response:
{
  "rankings": [
    {
      "rank": 1,
      "merchant_name": "新商家名称",
      "join_date": "2024-01-01",
      "points_given": 10000.00
    }
  ]
}
```

## 👥 代理相关接口

### 1. 代理申请
```http
POST /agents/apply/
Authorization: Bearer <access_token>
Content-Type: application/json

Request:
{
  "real_name": "真实姓名",
  "id_card": "身份证号",
  "contact_phone": "联系电话",
  "region": "代理区域"
}

Response:
{
  "application_id": 1,
  "message": "代理申请已提交，等待审核"
}
```

### 2. 获取代理信息
```http
GET /agents/info/
Authorization: Bearer <access_token>

Response:
{
  "id": 1,
  "user_id": 1,
  "real_name": "代理姓名",
  "region": "代理区域",
  "is_approved": true,
  "level": 1,
  "commission_rate": 0.05,
  "total_commission": 5000.00
}
```

## 📂 文件上传接口

### 1. 图片上传
```http
POST /upload/image/
Authorization: Bearer <access_token>
Content-Type: multipart/form-data

Request:
- image: 图片文件 (支持jpg, png, gif)
- type: 图片类型 (avatar/banner/product)

Response:
{
  "image_url": "https://static.example.com/uploads/image_123.jpg",
  "file_size": 1024000,
  "message": "上传成功"
}
```

### 2. 批量上传
```http
POST /upload/batch/
Authorization: Bearer <access_token>
Content-Type: multipart/form-data

Request:
- images[]: 多个图片文件

Response:
{
  "uploaded_files": [
    {
      "original_name": "image1.jpg",
      "url": "https://static.example.com/uploads/image1_123.jpg"
    },
    {
      "original_name": "image2.jpg", 
      "url": "https://static.example.com/uploads/image2_456.jpg"
    }
  ],
  "success_count": 2,
  "failed_count": 0
}
```

## 🔍 其他接口

### 1. 获取城市列表
```http
GET /regions/cities/
Response:
{
  "cities": [
    {
      "code": "110000",
      "name": "北京市",
      "districts": [
        {
          "code": "110100",
          "name": "东城区"
        }
      ]
    }
  ]
}
```

### 2. 获取验证码
```http
POST /sms/send-code/
Content-Type: application/json

Request:
{
  "phone_number": "13800138000",
  "type": "register" // register/login/reset_password
}

Response:
{
  "message": "验证码已发送",
  "expires_in": 300
}
```

### 3. 签到
```http
POST /users/daily-checkin/
Authorization: Bearer <access_token>

Response:
{
  "points_earned": 10,
  "consecutive_days": 5,
  "total_checkin_days": 30,
  "message": "签到成功"
}
```

## ⚠️ 错误码说明

### HTTP状态码
- **200**: 请求成功
- **201**: 创建成功
- **400**: 请求参数错误
- **401**: 未授权/token无效
- **403**: 权限不足
- **404**: 资源不存在
- **429**: 请求频率过高
- **500**: 服务器内部错误

### 业务错误码
```json
{
  "error_code": "USER_NOT_FOUND",
  "message": "用户不存在",
  "details": {
    "field": "phone_number",
    "value": "13800138000"
  }
}
```

### 常见错误码
| 错误码 | 说明 |
|--------|------|
| `USER_NOT_FOUND` | 用户不存在 |
| `INVALID_PASSWORD` | 密码错误 |
| `PHONE_ALREADY_EXISTS` | 手机号已注册 |
| `INSUFFICIENT_POINTS` | 积分不足 |
| `MERCHANT_NOT_APPROVED` | 商家未通过审核 |
| `INVALID_MERCHANT_CODE` | 商家码无效 |
| `PAYMENT_FAILED` | 支付失败 |
| `UPLOAD_FILE_TOO_LARGE` | 文件过大 |
| `RATE_LIMIT_EXCEEDED` | 请求频率超限 |

## 📝 接口使用示例

### JavaScript示例
```javascript
// 用户登录
const login = async (credentials) => {
  try {
    const response = await fetch('https://api.example.com/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      // 保存token
      localStorage.setItem('accessToken', data.access)
      localStorage.setItem('refreshToken', data.refresh)
      return data
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    console.error('登录失败:', error)
    throw error
  }
}

// 带认证的请求
const authenticatedRequest = async (url, options = {}) => {
  const token = localStorage.getItem('accessToken')
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    }
  }
  
  const response = await fetch(`https://api.example.com/api${url}`, config)
  
  if (response.status === 401) {
    // Token过期，尝试刷新
    await refreshToken()
    // 重试请求
    return authenticatedRequest(url, options)
  }
  
  return response.json()
}
```

---

## 📞 技术支持

如有API相关问题，请联系：
- **技术支持邮箱**: [请联系项目管理员获取]
- **客服QQ**: [请联系项目管理员获取]
- **开发者QQ群**: [请联系项目管理员获取]

---

© 2024 满仓生态技术团队 