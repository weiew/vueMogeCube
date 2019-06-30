<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	}
}

</script>

<style lang="scss" type="text/scss">
body {
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}

#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}

.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.toolbar {
	padding: 10px;
	margin:0;
	background-color: #fff;
	border:1px solid rgb(223, 236, 234);
	border-top:0;
	border-left:0;
	border-right:0;
	.el-form-item {
		margin-bottom: 10px;
	}
}
.toolBarPagination{
	&.toolbar{
		border: none;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
.cube-bar {
	z-index: 10;
	position: absolute;
	right: 0;
	left: 0;
	height: 44px;
	line-height: 44px;
	text-align: center;
	background-color: #edf0f4;
	box-shadow: 0 2px 1px #e9eaea;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
.cube-content {
	position: absolute;
	top: 44px;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
}
</style>