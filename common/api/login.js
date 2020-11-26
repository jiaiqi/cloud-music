import $http from '@/common/utils/http.js'

const login = async (options={type:'phone'})=>{
	let req = {
		phone:'15191803240',
		password:'jq19980426'
	}
	let url = `/login/cellphone`
	let res = await $http.get(url,req)
	return res
}
const getAccountInfo = async (uid)=>{
	let url ='/user/detail?uid='+uid
	let req = {
		uid:uid
	}
	let res = await $http.get(url)
	return res
}
export {
	login,
	getAccountInfo
}