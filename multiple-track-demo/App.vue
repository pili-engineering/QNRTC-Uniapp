<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			const safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets 
			const screenHeight = uni.getSystemInfoSync().screenHeight
			console.log(uni.getSystemInfoSync())
			this.$store.commit("setSafeArea", {
				top: safeAreaInsets.top,
				bottom: safeAreaInsets.bottom
			})
			this.$store.commit("setScreenHeight", screenHeight)
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #212121;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}

	.text {
		color: #FFFFFF;
		opacity: 0.61
	}
	
	.text-center{
		text-align: center;
	}

	.text-sm {
		font-size: 14upx;
	}

	.input {
		opacity: .86;
		font-family: PingFangSC-Light;
		font-size: 24upx;
		color: #fafafa;
		text-align: left;
		background: none;
		outline: none;
		border: none;
		height: 110upx;
		background: #49494b;
		border-radius: 102upx;
		display: flex;
		align-items: center;
		margin-bottom: 10upx;
		padding: 0 70upx;
		box-sizing: border-box;
		width: 90vw;
		margin-top: 20upx;
	}
	
	.select{
		opacity: .86;
		font-family: PingFangSC-Light;
		font-size: 24upx;
		color: #fafafa;
		text-align: left;
		background: none;
		outline: none;
		border: none;
		height: 110upx;
		background: #49494b;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		width: 100%;
	}

	.margin-top {
		margin-top: 20upx
	}
	
	.margin-right {
		margin-right: 20upx;
	}

	button {
		margin-top: 100upx;
		width: 90vw;
		height: 100upx;
		line-height: 100upx;
		background: #34aadc;
		border-radius: 100upx;
		font-size: 36upx;
		color: #fafafa;
		outline: none;
		border: none;
		text-align: center;
	}
	
	.href{
		text-decoration:underline;
	}
	
	select{
		    background: none;
		    outline: none;
		    border: none;
	}
	
	.safe-wrap{
		position: relative;
	}
	
	.settings-wrap{
		position: absolute;
		right: 0upx;
		top: 20upx;
		height: 100upx;
		width: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.settings{
		height: 40upx;
		width: 40upx;
	}
	
</style>
