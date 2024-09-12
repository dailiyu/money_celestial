const TIME_OUT = 60000;
const BASE_URL = 'https://max.q6z4kzhr.uk/api';

class Request {
    
    request(url, method, data) {
        return new Promise((resolve, reject) => {
            const accessToken = uni.getStorageSync('accessToken');
            
            uni.request({
                url: BASE_URL + url,
                method: method || "GET",
                timeout: TIME_OUT,
                data: data,
                header: {
                    'Authorization': `Bearer ${accessToken}`  // 携带 accessToken
                },
                success: (res) => {
                    if (res.statusCode === 200) {
                        resolve(res.data);
                    } else if (res.statusCode === 401) {
						 this.logout();
                        // // Token 过期处理逻辑
                        // this.refreshToken().then(newAccessToken => {
                        //     // Token 刷新成功，重新发起请求
                        //     this.request(url, method, data).then(resolve).catch(reject);
                        // }).catch(err => {
                        //     // 如果刷新 Token 也失败了，处理登出
                        //     this.logout();
                        //     reject(err);
                        // });
                    } else {
                        reject(res);
                    }
                },
                fail: (err) => {
                    reject(err);
                }
            });
        });
    }
    
    get(url, params) {
        return this.request(url, "GET", params);
    }
    
    post(url, data) {
        return this.request(url, "POST", data);
    }
    
    put(url, data) {
        return this.request(url, "PUT", data);
    }
    
    patch(url, data) {
        return this.request(url, "PATCH", data);
    }
    
    delete(url, params) {
        return this.request(url, "DELETE", params);
    }
    
    // 刷新 Token
    refreshToken() {
        return new Promise((resolve, reject) => {
            const refreshToken = uni.getStorageSync('refreshToken');
            
            if (!refreshToken) {
                reject(new Error('No refresh token available'));
                return;
            }

            uni.request({
                url: `${BASE_URL}/refresh-token`,  // 刷新 Token 接口
                method: "POST",
                header: {
                    'Authorization': `Bearer ${refreshToken}`
                },
                success: (res) => {
                    if (res.statusCode === 200) {
                        const { accessToken } = res.data;
                        uni.setStorageSync('accessToken', accessToken);  // 保存新的 accessToken
                        resolve(accessToken);
                    } else {
                        reject(new Error('Failed to refresh token'));
                    }
                },
                fail: (err) => {
                    reject(err);
                }
            });
        });
    }
    
    // 登出逻辑
    logout() {
        uni.removeStorageSync('accessToken');
        uni.removeStorageSync('refreshToken');
        // 可以添加登出后的处理逻辑，例如跳转到登录页面
        uni.navigateTo({
            url: '/pages/login/login'  // 假设有一个登录页面
        });
    }
}

const http = new Request();

export {
    http
};
