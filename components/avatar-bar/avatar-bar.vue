<template>
	<view class="avatar-bar">
		<view class="avatar-image" v-if="accountInfo&&accountInfo.profile">
			<image :src="accountInfo.profile.avatarUrl" class="image" mode="aspectFit"></image>
		</view>
		
		<view class="nav-to" v-if="accountInfo.profile">
			<view class="user-info">
				<view class="user-name">
					{{accountInfo.profile.nickname}}
				</view>
				<view class="user-level">
					Lv.{{accountInfo.level}}
				</view>
			</view>
			<view class="arrow">
				<text class="cuIcon-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			accountInfo: {
				type: Object
			},
		},
	}
</script>

<style lang="scss">
	.avatar-bar{
		margin: 20rpx;
		padding-top: 30rpx;
		display: flex;
		.avatar-image{
			width: 100rpx;
			height: 100rpx;
			margin: 0 20rpx;
			.image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 100rpx;
			}
		}
		.nav-to{
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.user-info{
			display: flex;
			flex-direction: column;
			.user-level{
				font-size: 24rpx;
				margin:10rpx 0 ;
				font-style: italic;
				background-color: var(bg-white);
				padding:2rpx 10rpx ;
				border-radius: 20rpx;
			}
		}
	}
</style>
