
export const convertTime = (timeStamp,format='yyyy/MM/dd hh:mm:ss') => {
	const date = new Date(timeStamp);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);
	const seconds = ('0' + date.getSeconds()).slice(-2);
 
	return format
		.replace('yyyy', year)
		.replace('MM', month)
		.replace('dd', day)
		.replace('hh', hours)
		.replace('mm', minutes)
		.replace('ss', seconds);
}

//处理地址字符串s
export const obscureString = (input)=>{
    if (input.length <= 15) {
        return input; // 如果字符串长度小于等于15个字符，则不做处理，直接返回
    }
    
    const start = input.slice(0, 8); // 获取前8个字符
    const end = input.slice(-7);     // 获取后7个字符
    const obscured = start + '******' + end; // 拼接前8个字符 + 6个* + 后7个字符
    
    return obscured;
}