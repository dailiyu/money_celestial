// 使用腾讯地图API计算距离并将距离插入原数组
export const calculateDistances = (origins, destinations) => {
  return new Promise((resolve, reject) => {
    const url = `https://apis.map.qq.com/ws/distance/v1/matrix?mode=driving&from=${origins.latitude},${origins.longitude}&key=YQRBZ-P4SKQ-2L55P-4NYXP-XK6TH-LXBVA`;

    const destStr = destinations.map(loc => `${loc.latitude},${loc.longitude}`).join(';');
    
    uni.request({
      url: `${url}&to=${destStr}`,
      method: 'GET',
      success: (res) => {
        if (res.data.status === 0) {
          const distances = res.data.result.rows[0].elements;
          // 遍历距离数据并将其插入到原始地点数组
          distances.forEach((distanceData, index) => {
            locations.value[index].distance = distanceData.distance; // 添加距离信息到原数组
          });
          resolve(locations.value); // 返回带距离的数组
        } else {
          reject('腾讯地图API错误');
        }
      },
      fail: (err) => reject(err),
    });
  });
};

// 按距离排序
const sortLocations = (order) => {
	// 由近到远
  if (order === 'asc') {
    sortedLocations.value = [...locations.value].sort((a, b) => a.distance - b.distance);
  } else if (order === 'desc') {
	// 由远到近
    sortedLocations.value = [...locations.value].sort((a, b) => b.distance - a.distance);
  }
}