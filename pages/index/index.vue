<template>
	<div class="page-wrap">
		<nav-bar :is-white-bg="navWhiteBackground"></nav-bar>
		<view class="container">
			<avatar-bar :accountInfo="accountInfo"></avatar-bar>
			<music-app></music-app>
			<favorite-bar></favorite-bar>
			<play-list ref="paylist" :nav-fixed="playlistNavFixed"></play-list>
		</view>
	</div>
</template>

<script>
import {login,getAccountInfo} from '@/common/api/index.js'

export default {
	name: 'CloudMusicHome',
	data() {
		return {
			navWhiteBackground: false,
			playlistNavFixed: false,
			accountInfo:{},
			accountDetail:{}
		};
	},
	onLoad() {
		login().then(res=>{
			this.accountInfo=res
			getAccountInfo(res.account.id).then(result=>{
				this.accountDetail = result
				this.accountInfo = {...this.accountInfo,...result}
			})
		})
	},
	onPageScroll(e) {
		// console.log('滚动距离为：' + e.scrollTop);
		if (e.scrollTop >= 30) {
			this.navWhiteBackground = true;
		} else {
			this.navWhiteBackground = false;
		}
		const query = uni.createSelectorQuery().in(this.$refs.paylist);
		query
			.select('#playNavBar')
			.boundingClientRect(data => {
				// console.log('节点离页面顶部的距离为' + data.top);
				if (data && data.top <= 110 && e.scrollTop >= 440) {
					this.playlistNavFixed = true;
				} else {
					this.playlistNavFixed = false;
				}
			})
			.exec();
	}
};
</script>

<style lang="scss">
$wrap-bg-color: #f1f1f1;
$bg-white: #f8f8f8;
.page-wrap {
	background-color: $wrap-bg-color;
	height: calc(100vh - var(--window-top));
	display: flex;
	flex-direction: column;
	position: relative;
	max-width: 750px;
	margin: 0 auto;
	.container {
		flex: 1;
		padding-top: 90rpx;
		// overflow: scroll;
	}
}
</style>
