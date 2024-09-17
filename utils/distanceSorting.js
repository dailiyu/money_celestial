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
    const url = `https://apis.map.qq.com/ws/distance/v1/matrix?mode=driving&from=${origins.latitude},${origins.longitude}&key=YQRBZ-P4SKQ-2L55P-4NYXP-XK6TH-LXBVA`;

    const destStr = destinations.map(loc => `${loc.latitude},${loc.longitude}`).join(';');


    uni.request({
      url: `${url}&to=${destStr}`, 
      method: 'GET',
      success: (res) => {
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
