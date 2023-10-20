<script>
	import { mapMutations } from "vuex"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			this.initToken()
			this.getPlatform()
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations(["initToken","getPlatform"])
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	.wrap {
	  border-radius: 5px!important;
	  margin: 0 20px 20px!important;
	  padding: 10px 0!important
	}
	
	.margin-top-sm {
		margin-top: 10px!important
	}
	
	.margin-right-sm {
		margin-right: 20px;
	}
	
	.margin-left-sm {
		margin-left: 20px;
	}

	.margin-bottom-sm {
		margin-bottom: 10px!important
	}
	
	.flex-row {
		flex: 1;
		display: flex;
		flex-direction: row!important;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center!important;
	}

	.scroll-view {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}
	
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.scroll-view-wrap {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 10px
	}

	.table {
		margin-top: 20upx;
		margin-bottom: 20upx;
		flex: 1;
		border: 1px solid #BEBEBE !important;
	}

	.th {
		display: flex !important;
		flex-direction: row !important;
		justify-content: flex-start !important;
		align-items: stretch !important;
		flex: 1;
		flex-wrap: nowrap;
		&.tr{
			background: #eee;
		}
	}
	
	.td {
		display: flex !important;
		flex-direction: row !important;
		justify-content: flex-start !important;
		align-items: stretch !important;
		flex: 1;
		flex-wrap: nowrap;
	}

	.tr {
		font-size: 24upx;
		flex:1;
		text-align: center;
		padding: 15upx 0;
	}
	
	.track-item-wrap {
		position: relative;
		height: 800upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		background-color: black;
	}
	
	.track-video {
		position: absolute;
		top: 0;
		left: 0;
		height: 800upx;
		width: 750upx
	}
	
	.track-info-wrap {
		position: absolute;
		top: 0;
		left: 0;
		padding-bottom: 20upx;
		padding-left: 20upx;
		padding-right: 20upx;
		width: 750upx;
	}
	
	.track-info-item {
		color: #007AFF;
		font-size: 20upx;
		padding-top: 10upx;
		padding-bottom: 10upx;
		font-weight: bold;
	}
</style>
