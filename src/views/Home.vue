<template>
	<div>
		<header class="cube-bar">
			<h1>Ranking List</h1>
			<img src="../assets/images/user2.png" @click="toLogin()" class="loginImg">
		</header>
		<section class="cube-content">
			<transition name="fade" mode="out-in" >
				<router-view></router-view>
			</transition>
		</section>
	</div>
</template>

<script>
    import { mapActions,mapGetters } from 'vuex'
    import api from '../api/api';

	export default {
		data() {
			return {
                activeNav:"",
				sysName:this.getUrlData().title?this.getUrlData().title:'vueElement',
				collapsed:false,
				sysUserName: '',
                sysOrgName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
                nestType:this.getUrlData().nestType?this.getUrlData().nestType:'all'
			}
		},
		methods: {
            targetPath(match){
				let tempPath=this.$route.path,
					regex = new RegExp("/", 'g'), // 使用g表示整个字符串都要匹配
					resultCurrent = match.match(regex),
					countCurrent = !resultCurrent ? 0 : resultCurrent.length,
					resultFull = tempPath.match(regex),
					countFull = !resultFull ? 0 : resultFull.length;
                while(countCurrent<countFull){
					let tempIndex=tempPath.lastIndexOf("/");
					tempPath=tempPath.substring(0,tempIndex);
                    resultFull = tempPath.match(regex);
                    countFull = !resultFull ? 0 : resultFull.length;
				};
                return tempPath;


			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
                    _this.$router.push('/login');
				}).catch(() => {

				});
			},
            toLogin: function () {
                this.$router.push({path: '/login'});
            },
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
                this.$refs.menuMain.$el.style.width='188px';
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			},
            ...mapGetters([
                    'getToken',
					'getUserInfo',
					'getUrlData',
                ]
            ),
            ...mapActions([
                    'setToken',
                    'saveUserInfo'
                ]
            ),
		},
		mounted() {
		},
		created(){

		}

	}

</script>

<style lang="scss" type="text/scss" scoped>

	.loginImg{
		position: absolute;
		top: 6px;
		right: 6px;
		width: 32px;
	}
</style>