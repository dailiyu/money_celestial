const TIME_OUT = 60000;
const BASE_URL = 'https://api.maxcang.com/api';
// const BASE_URL = 'https://www.maxcang.com/api'

class Request {
    request(url, method, data) {
        return new Promise((resolve, reject) => {
            const accessToken = uni.getStorageSync('accessToken');
            let headers = {};
            if (accessToken) {
                headers['Authorization'] = `Bearer ${accessToken}`;
				if(url=='/users/register/'&&method=='POST'){
					headers = {};
				}
				if(url=='/users/login/'&&method=='POST'){
					headers = {};
				}
            }else{
                // this.logout()
            }
            // if(!phoneNumber){
            //     this.logout()
            // }
            uni.request({
                url: BASE_URL + url,
                method: method || "GET",
                timeout: TIME_OUT,
                data: data,
                header: headers,
                success: (res) => {
                    if (res.statusCode === 200 || res.statusCode === 201) {
                        resolve(res.data);
                    } else if (res.statusCode === 401) {
                        console.log(url,res.statusCode)
                        // 如果是 401，尝试刷新 token
                        uni.showToast({
                            title: '登录已过期，请重新登录',
                            icon: 'none',
                            duration: 1000
                        });
                        this.logout()
                    } else {
                        reject(res);
                    }
                },
                fail: (err) => {
                    if (res.statusCode === 401){
                        uni.reLaunch({
                            url: '/pages/login/login'
                        });
                        reject(err);
                    }
                
                }
            });
        });
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
                url: `${BASE_URL}/users/token/refresh/`,  // 刷新 Token 接口
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
        uni.clearStorageSync()
        uni.reLaunch({
            url: '/pages/login/login'
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
}

const http = new Request();

export {
    http
};
