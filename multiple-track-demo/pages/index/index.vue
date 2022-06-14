<template>
	<view class="page-wrap">
		<image class="background" src="/static/niu.svg"></image>
		<view class="safe-wrap" :style="{top: `${top}upx`}">
			<view class="settings-wrap">
				<image class="settings" src="/static/setting.png" @click="routeSettingPage"></image>
			</view>
			
			<view class="info-wrap">
				<view class="avatar">
					<view>{{userName.slice(0,1)}}</view>
				</view>
			</view>
			<view class="text text-center username">账户名称：{{userName}}</view>
			<input v-if="!useRoomToken" class="input" v-model="roomName" placeholder="请输入房间名" />
			<input v-if="useRoomToken" class="input" maxlength="-1"  v-model="roomToken" placeholder="请输入 roomToken" />
			<view class="text text-nm margin-top text-center ">如果房间尚未创建，将会自动创建一个房间</view>
			<view class="radio-group">
				<radio-group @change="handleChangeType" >
					<label class="radio"><radio value="video" checked  />音视频通话</label>
					<label class="radio"><radio value="audio" />音频通话</label>
				</radio-group>
			</view>
			<view>
				<button @click="routeRoomPage">会议房间</button>
			</view>
			<view class="param-wrap">
				<view></view>
				<view>
					<view v-if="!useRoomToken" class="text text-sm margin-top href" @click="handleUseRoomToken">使用roomToken</view>
					<view v-if="useRoomToken" class="text text-sm margin-top href" @click="handleUseRoomName">使用房间名</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	import QNRTC from "@/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js"
	export default {
		data() {
			return {
				userName: "",
				roomName: "",
				roomToken: "",
				type: "video",
				useRoomToken: false,
				sdkVersion: ""
			}
		},
		computed:{
			...mapState(["top","bottom","platform"])
		},
		onShow() {
			if(this.$store.state.userName) {
				this.userName = this.$store.state.userName
			}
			this.sdkVersion = QNRTC.VERSION
		},
		created() {
			if(this.platform === "android") {
			    const permission = ["android.permission.RECORD_AUDIO", "android.permission.CAMERA",   "android.permission.WRITE_EXTERNAL_STORAGE"]
				if (plus.android) {
					for (const i of permission) {
						plus.android.requestPermissions(
							[i],
							function (resultObj) {
								for (var i = 0; i < resultObj.granted.length; i++) {
									var grantedPermission = resultObj.granted[i];
									console.log('已获取的权限：' + grantedPermission);
								}
								for (var i = 0; i < resultObj.deniedPresent.length; i++) {
									var deniedPresentPermission = resultObj.deniedPresent[i];
									console.log('拒绝本次申请的权限：' + deniedPresentPermission);
								}
								for (var i = 0; i < resultObj.deniedAlways.length; i++) {
									var deniedAlwaysPermission = resultObj.deniedAlways[i];
									console.log('永久拒绝申请的权限：' + deniedAlwaysPermission);
								}
							},
							function (error) {
								console.log('申请权限错误：' + error.code + " = " + error.message);
							}
						);
					}
				}
			}
		},
		methods: {
			...mapMutations(["setRoomName","setToken"]),
			handleChangeType(event) {
				this.type = event.detail.value
			},
			routeRoomPage() {
				const path = this.type === "video" ? "/pages/videoRoom/index": "/pages/audioRoom/index"
				if(this.useRoomToken) {
					this.setToken(this.roomToken)
					uni.navigateTo({
						url: `${path}?useToken=1`
					})
				}else {
					if (!/^[a-zA-Z0-9_-]{3,64}$/.test(this.roomName)) {
						uni.showModal({
							content: '房间名限制 3~64 个字符，并且只能包含字母、数字或下划线'
						})
					}else {
						this.setRoomName(this.roomName)
						uni.navigateTo({
							url: `${path}?useToken=0`
						})
					}
				}
			},
			routeSettingPage() {
				uni.navigateTo({
					url: "/pages/setting/index"
				})
			},
			handleUseRoomToken() {
				this.useRoomToken = true
			},
			handleUseRoomName() {
				this.useRoomToken = false
			}
		}
	}
</script>

<style>
	.avatar {
		width: 200upx;
		margin: 60upx 40upx 40upx;
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
	
	.radio-group {
		margin-top: 40upx;
		color:rgba(255,255,255,0.61);
		display:flex;
		justify-content: center;
	}
	.radio {
		margin-right: 30upx;
	}
	
</style>
