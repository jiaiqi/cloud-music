<template>
	<view class="play-list">
		<view class="play-nav-bar" ref="playNavBar" id="playNavBar" :class="{ 'fixed-nav': navFixed }">
			<view class="nav-item active-nav"><text class="label">创建歌单</text></view>
			<view class="nav-item"><text class="label">收藏歌单</text></view>
			<view class="nav-item"><text class="label">歌单助手</text></view>
		</view>
		<view class="playlist-container">
			<scroll-view scroll-y="true">
				<view class="playlist-item" v-for="i in 20">
					<image src="../../static/logo.png" mode="aspectFit" class="cover-image"></image>
					<view class="playlist-info">
						<view class="playlist-name">夏天的风</view>
						<view class="playlist-number"><text class="cuIcon-roundcheck"></text></view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	props: {
		navFixed: {
			type: Boolean,
			default: false
		}
	},
	mounted() {}
};
</script>

<style lang="scss" scoped>
.play-list {
	margin-top: 20rpx;
	.play-nav-bar {
		width: calc(100% - 40rpx);
		// position: sticky;
		// position: -webkit-sticky;
		display: flex;
		padding: 20rpx 0;
		// background-color: #f8f8f8;
		margin: 0 20rpx;
		// border-radius: 20rpx;
		z-index: 99;
		/* #ifdef H5 */
		top: 0;
		/* #endif */
		/* #ifndef H5 */
		top: var(--window-top);
		/* #endif */
		&.fixed-nav {
			position: fixed;
			top: calc(var(--window-top) + 88rpx);
			margin: 0;
			width: 100%;
			background-color: #f8f8f8;
		}
		.nav-item {
			flex: 1;
			text-align: center;
			&.active-nav .label {
				padding: 10rpx;
				border-bottom: 4rpx solid #e05042;
			}
		}
	}
	.playlist-container {
		padding: 20rpx;
		border-radius: 20rpx;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		background-color: #f8f8f8;
		margin: 0rpx 20rpx 20rpx;
		overflow: hidden;
		.playlist-item {
			display: flex;
			margin-bottom: 20rpx;
			.cover-image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 20rpx;
				margin-right: 20rpx;
			}
		}
	}
}
</style>
