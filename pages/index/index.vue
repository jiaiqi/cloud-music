<template>
	<div class="page-wrap">
		<nav-bar :is-white-bg="navWhiteBackground"></nav-bar>
		<view class="container">
			<avatar-bar></avatar-bar>
			<music-app></music-app>
			<favorite-bar></favorite-bar>
			<play-list ref="paylist" :nav-fixed="playlistNavFixed"></play-list>
		</view>
	</div>
</template>

<script>
export default {
	name: 'CloudMusicHome',
	// onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
	//     console.log("滚动距离为：" + e.scrollTop);
	// },
	data() {
		return {
			navWhiteBackground: false,
			playlistNavFixed: false
		};
	},
	onPageScroll(e) {
		console.log('滚动距离为：' + e.scrollTop);
		if (e.scrollTop >= 30) {
			this.navWhiteBackground = true;
		} else {
			this.navWhiteBackground = false;
		}
		const query = uni.createSelectorQuery().in(this.$refs.paylist);
		query
			.select('#playNavBar')
			.boundingClientRect(data => {
				console.log('节点离页面顶部的距离为' + data.top);
				if (data && data.top <= 88 && e.scrollTop >= 330) {
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
