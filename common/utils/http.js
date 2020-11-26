import request from '@/common/request'
const http = request({ 
	baseURL: 'http://api.jiaiqi.cn:521', //baseURL
	timeout: 60*1000, // 超时时间，单位毫秒。默认 60 秒
	// header: { 'x-custom-header': 'x-custom-header' }, // 设置请求头，建议放在请求拦截器中
	statusCode: [200, 401] // 服务器相应状态码为 200/401 时，网络请求不会 reject。也就是不会被 catch 到。如响应 401 时可以在响应拦截后 await 刷新 token + await 重新请求 + return response。即可实现无痛刷新。 
})

// http.interceptors.request.use((request=>{
	
// }))
http.interceptors.response.use((response=>{
	if(response.statusCode===200){
		return response.data
	}
}))
export default http