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
		appID: "g2m0ya7w7",
		userName: "test",
		roomName: "",
		top: 0,
		bottom: 0,
		screenHeight: 0
	},
    mutations: {
		setToken(state,payload){
			state.token = payload
		},
		getPlatform(state) {
			state.platform = uni.getSystemInfoSync().platform
		},
		setUserName(state,payload) {
			state.userName = payload
		},
		setAppID(state,payload) {
			state.appID = payload
		},
		setRoomName(state,payload) {
			state.roomName = payload
		},
		setSafeArea(state,payload) {
			state.top = payload.top
			state.bottom = payload.bottom
		},
		setScreenHeight(state,payload) {
			state.screenHeight = payload
		}
	},
	actions: {
		async initToken({state,commit}) {
			const api = state.userName === 'admin' ? API.CREATE_ROOM_TOKEN : API.JOIN_ROOM_TOKEN
			const requestURL = `${api(state.roomName, state.userName, state.appID)}?bundleId=demo-rtc.qnsdk.com`
			return new Promise((resolve,reject) => {
				uni.request({
					url: requestURL,
					success(res) {
						commit("setToken",res.data)
						resolve()
					},
					fail(err) {
						reject(err)
					}
				})
			})
		},
	}
})
export default store