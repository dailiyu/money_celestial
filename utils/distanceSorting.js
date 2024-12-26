import { tencentMapKey } from '@/service/config.js'

// 工具函数：根据距离排序店铺列表
export const sortShopsByDistance = async (origins, shopList, order = 'asc') => {
  try {
    // 调用腾讯地图API计算距离
    const distances = await calculateDistances(
      origins,
      shopList.map(shop => ({ latitude: shop.latitude, longitude: shop.longitude }))
    );

    
    // 确保距离已经写入 shopList
    shopList.forEach((shop, index) => {
      shop.distance = distances[index].distance;
    });


    // 创建 shopList 的副本并排序
    const sortedShopList = [...shopList].sort((a, b) => {
      if (a.distance === undefined || b.distance === undefined) {
        return 0; // 如果 distance 不存在，则跳过排序
      }
      if (order === 'asc') {
        return a.distance - b.distance; // 正序
      } else if (order === 'desc') {
        return b.distance - a.distance; // 倒序
      }
      return 0;
    });

   

    return sortedShopList; // 返回排序后的副本
  } catch (error) {
    console.error('Error sorting shops by distance:', error);
    throw error;
  }
};


// 计算距离的函数，调用腾讯地图API
export const calculateDistances = (origins, destinations) => {
  return new Promise((resolve, reject) => {
    const url = `https://apis.map.qq.com/ws/distance/v1/matrix?mode=driving&from=${origins.latitude},${origins.longitude}&key=${tencentMapKey}`;

    const destStr = destinations.map(loc => `${loc.latitude},${loc.longitude}`).join(';');


    uni.request({
      url: `${url}&to=${destStr}`, 
      method: 'GET',
      success: (res) => {
		  console.log(res)
        if (res.data.status === 0) {
          // 获取距离数据
          const distances = res.data.result.rows[0].elements.map((element) => ({
            distance: element.distance // 单位为米
          }));
          
          resolve(distances);
        } else {
          reject('腾讯地图API错误: ' + res.data.message);
        }
      },
      fail: (err) => reject('请求失败: ' + err),
    });
  });
};



// 工具函数：计算两点之间的距离（Haversine公式）
export const calculateDistance = (lat1, lng1, lat2, lng2)=>{
    if (!lat1 || !lng1 || !lat2 || !lng2) {
        return null; // 经纬度无效返回 null
    }
    const R = 6371; // 地球半径，单位：公里
    const radLat1 = (lat1 * Math.PI) / 180.0;
    const radLat2 = (lat2 * Math.PI) / 180.0;
    const a = radLat1 - radLat2;
    const b = ((lng1 - lng2) * Math.PI) / 180.0;
    const s = 2 * Math.asin(Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
    ));
    return R * s; // 返回距离，单位：公里
}

const currentLocation = uni.getStorageSync('currentLocation')
export const updatedShopData = (shopData)=>{
	const res = shopData.map((shop) => {
	    const distance = calculateDistance(
	        currentLocation.latitude,
	        currentLocation.longitude,
	        shop.latitude,
	        shop.longitude
	    );
	    return {
	        ...shop,
	        distance: distance !== null ? `${distance.toFixed(2)} km` : "" // 格式化距离
	    };
	});
	return res
}