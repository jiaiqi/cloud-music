<template>
	<view class="nav-bar" :class="{ 'white-bg': isWhiteBg }">
		<view class="nav-item action-menu"><text class="cuIcon-sort"></text></view>
		<view class="nav-item active-nav">我的</view>
		<view class="nav-item">发现</view>
		<view class="nav-item">云村</view>
		<view class="nav-item">视频</view>
		<view class="nav-item action-menu"><text class="cuIcon-search"></text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		isWhiteBg: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
.nav-bar {
	width: calc(100%);
	display: flex;
	color: #333;
	height: 88rpx;
	position: relative;
	position: fixed;
	padding: 0 20rpx;
	top: var(--window-top);
	z-index: 100;
	&.white-bg{
	background-color: #f8f8f8;
	}
	.nav-item {
		color: #737373;
		flex: 1;
		text-align: center;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		&.active-nav {
			font-size: 34rpx;
			color: #333;
		}
		&.action-menu {
			text-align: left;
			color: #333;
			font-size: 38rpx;
			&:last-child {
				justify-content: flex-end;
			}
		}
	}
}
</style>
