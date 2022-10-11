import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const HOST = 'https://api-demo.qnsdk.com'
const PREFIX = '/v1/rtc'
const API = {
  LIST_USERS: (appid, roomid) =>
	`${HOST}${PREFIX}/users/app/${appid}/room/${roomid}`,
  GET_APP_CONFIG: (appid) =>
	`${HOST}${PREFIX}/app/${appid}`,
  JOIN_ROOM_TOKEN: (roomid, userid, appid) =>
	`${HOST}${PREFIX}/token/app/${appid}/room/${roomid}/user/${userid}`,
  CREATE_ROOM_TOKEN: (roomid, userid, appid) =>
	`${HOST}${PREFIX}/token/admin/app/${appid}/room/${roomid}/user/${userid}`,
}
			
const store = new Vuex.Store({
    state: {
		token: "",
		appID: "d8lk7l4ed",
		userName: "1111",
		roomID: "uniapp",
		policy: "forceUDP",
		logLevel: "info",
		stereo: 0,
		bwePolicy: "TCC",
		allowAudioMixWithOthers: 1,
		hWCodecEnabled: 1,
		maintainResolution: 0,
		fieldTrials: "",
		encoderQualityMode: 0,
		isAEC3Enabled: 1,
		multiStreamEnable: 0,
		platform: "",
		encodeWidth: 640,
		encodeHeight: 480,
		captureHeight: 480,
		captureWidth: 640
	},
    mutations: {
		setEncodeWidth(state,payload){
			state.encodeWidth = payload
		},
		setEncodeHeight(state,payload){
			state.encodeHeight = payload
		},
		setCaptureHeight(state,payload){
			state.captureHeight = payload
		},
		setCaptureWidth(state,payload){
			state.captureWidth = payload
		},
		setToken(state,payload){
			state.token = payload
		},
		setPolicy(state,payload){
			console.log(payload)
			state.policy = payload.detail.value
		},
		setMultiStreamEnable(state,payload) {
			console.log(payload)
			state.multiStreamEnable = payload.detail.value
		},
		setLogLevel(state,payload){
			state.logLevel = payload.detail.value
		},
		setStereo(state,payload){
			state.stereo = payload.detail.value
		},
		setBwePolicy(state,payload){
			state.bwePolicy = payload.detail.value
		},
		setAllowAudioMixWithOthers(state,payload){
			state.allowAudioMixWithOthers = payload.detail.value
		},
		setHWCodecEnabled(state,payload){
			state.hWCodecEnabled = payload.detail.value
		},
		setMaintainResolution(state,payload){
			state.maintainResolution = payload.detail.value
		},
		setFieldTrials(state,payload){
			state.fieldTrials = payload
		},
		setEncoderQualityMode(state,payload){
			state.encoderQualityMode = payload.detail.value
		},
		setIsAEC3Enabled(state,payload){
			state.isAEC3Enabled = payload.detail.value
		},
		initToken(state) {
			if(!/^[a-zA-Z0-9_-]{1,50}$/.test(state.userName)) {
				uni.showModal({
					content: '用户名限制 1~50 个字符，并且只能包含字母、数字或下划线'
				})
			}else if (!/^[a-zA-Z0-9_-]{1,64}$/.test(state.roomID)) {
				uni.showModal({
					content: '房间名限制 1~64 个字符，并且只能包含字母、数字或下划线'
				})
			}else {
				const api = state.userName === 'admin' ? API.CREATE_ROOM_TOKEN : API.JOIN_ROOM_TOKEN;
				const requestURL = `${api(state.roomID, state.userName, state.appID)}?bundleId=demo-rtc.qnsdk.com`;
				uni.request({
					url: requestURL,
					success(res) {
						console.log(res.data)
						state.token = res.data
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		},
		getPlatform(state) {
			state.platform = uni.getSystemInfoSync().platform
		}
	},
    actions: {
		setUserName({state,commit},payload) {
			state.userName = payload
			commit("initToken")
		},
		setAppID({state,commit},payload) {
			state.appID = payload
			commit("initToken")
		},
		setRoomID({state,commit},payload) {
			state.roomID = payload
			commit("initToken")
		}
	}
})
export default store