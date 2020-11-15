<template>
	<view class="music-app">
		<view class="app-item" v-for="item in appList" :key="item.label">
			<image class="app-icon" src="../../static/logo.png" mode="aspectFit"></image>
			<view class="label">
				{{item.label}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				appList:[
					{
						label:"本地音乐",
						iconPath:""
					},
					{
						label:"云盘",
						iconPath:""
					},
					{
						label:"已购",
						iconPath:""
					},
					{
						label:"最近播放",
						iconPath:""
					},
					{
						label:"我的好友",
						iconPath:""
					},
					{
						label:"收藏和赞",
						iconPath:""
					},
					{
						label:"我的电台",
						iconPath:""
					},
					
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.music-app{
	display: grid;
	grid-template-columns: repeat(4, 25%);
	background-color: #f8f8f8;
	border-radius: 20rpx;
	padding: 20rpx;
	margin: 0 20rpx;
	 .app-item{
		 display: flex;
		 flex-direction: column;
		 align-items: center;
		 justify-content: center;
		 height: 180rpx;
		 .app-icon{
			 width: 80rpx;
			 height: 80rpx;
			 border-radius: 80rpx;
		 }
		 .label{
			 // padding:20rpx;
			 margin-top: 10rpx;
		 }
	 }
}
</style>
