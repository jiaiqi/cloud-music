<template>
	<view class="favorite-bar">
		<view class="favorite-icon">
			<image style="width: 100rpx;height: 100rpx;" src="../../static/logo.png" mode=""></image>
		</view>
		<view class="profile">
			<view class="title">
				我喜欢的音乐
			</view>
			<view class="amount">
				<text class="cuIcon-favor"></text>
				<text class="profile-text">1341首</text>
			</view>
		</view>
		<view class="heart-mode">
			<view class="mode-btn">
				<text class="cuIcon-like"></text>
				<text class="text">心动模式</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.favorite-bar{
	margin: 20rpx 20rpx 0;
	background-color: #f8f8f8;
	padding: 20rpx;
	border-radius: 20rpx;
	display: flex;
	.favorite-icon{
		margin-right: 20rpx;
	}
	.profile{
		display: flex;
		flex-direction: column;
		justify-content: center;
		.profile-text{
			color: #bababa;
			font-size: 26rpx;
		}
	}
	.heart-mode{
		flex: 1;
		display: flex;
		justify-content: flex-end;
		padding-right: 20rpx;
		align-items: center;
		.mode-btn{
			border: 1px solid #f1f1f1;
			padding: 10rpx 20rpx;
			border-radius: 50rpx;
			font-size: 24rpx;
			.text{
				margin-left: 10rpx;
			}
		}
	}
}
</style>
