<template>
	<view class="page-wrap">
		<view class="safe-wrap setting-wrap" :style="{top: `${top}upx`}">
			<image class="background" src="/static/niu.svg"></image>
			<view class="settings-wrap">
				<image class="settings" src="/static/back.png" @click="routeBack"></image>
			</view>
			<input class="input" v-model="userName" placeholder="修改用户名" />
			<input class="input" v-model="appID"placeholder="修改APPID" />
			<view style="margin-top: 80upx">
				<button @click="handleComplate">完成</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				appID: "",
				userName: ""
			}
		},
		computed:{
			...mapState(["top","bottom"])
		},
		onShow() {
			this.appID = this.$store.state.appID
			this.userName = this.$store.state.userName
		},
		methods: {
			...mapMutations(["setUserName","setAppID"]),
			routeBack() {
				uni.navigateBack()
			},
			handleComplate() {
				if(!/^[a-zA-Z0-9_-]{3,50}$/.test(this.userName)) {
					uni.showModal({
						content: '用户名限制 3~50 个字符，并且只能包含字母、数字或下划线'
					})
				}else {
					this.setUserName(this.userName)
					this.setAppID(this.appID)
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style>
	.avatar {
		width: 200upx;
		margin: 40upx;
		height: 200upx;
		font-size: 64upx;
		background-color: rgb(156, 39, 176);
		color: rgb(250, 250, 250);
		flex-shrink: 1;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

    .setting-wrap {
		padding-top: 250upx;
	}
	.username {
		margin-bottom: 100upx;
	}

	.info-wrap {
		display: flex;
		justify-content: center;
	}

	.background {
		position: absolute;
		top: 0;
		height: 100vh;
		width: 100vw;
		right: -8%;
		z-index: -1;
	}

	.param-wrap {
		margin-top: 40upx;
		display: flex;
		justify-content: space-between;
	}

	.radio-wrap {
		display: flex;
		justify-content: center;
		margin-top: 80upx;
		color: #fff;
		font-size: 24upx;
	}

</style>
