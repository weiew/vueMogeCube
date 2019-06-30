<template>
    <div>
        <section class="rankingListHead">
            <h1>Top 150</h1>
            <h3>排行榜</h3>
        </section>
        <div slot="content">
            <cube-tab-bar v-model="tabsOn" show-slider>
                <cube-tab v-for="item in tabs" :label="item" :key="item"></cube-tab>
            </cube-tab-bar>
            <cube-tab-panels v-model="tabsOn">
                <cube-tab-panel v-for="item in tabs" :label="item" :key="item">
                    <div v-if="item=='Android 游戏榜'">
                        <cube-checker v-model="tabsAOn" class="smallRadio" :options="tabsAOption" type="radio"/>
                    </div>
                    <div class="app-top-list">
                        <div class="taptap-top-card" v-for="(game,gameIndex) in tabsContent[item]" :key="gameIndex">
                            <div class="top-card-left">
                                <a href="#" class="card-left-image">
                                    <img :src="GTools.imagesUri(game.img)" :alt="game.name">
                                </a>
                            </div>
                            <span class="top-card-order-triangle"></span>
                            <span class="top-card-order-text  ">{{gameIndex+1}}</span>
                            <div class="top-card-middle">
                                <a class="card-middle-title ">
                                    <h4>{{game.name}}</h4>
                                </a>
                                <p class="card-middle-author">
                                    <a href="https://www.taptap.com/developer/3505">厂商:&nbsp;{{game.company}}</a>
                                </p>
                                <p class="card-middle-description">
                                    {{game.description}}
                                </p>
                                <div class="card-middle-category">
                                    <a href="https://www.taptap.com/category/rpg">角色扮演</a>
                                </div>
                            </div>
                            <div class="card-middle-score">
                                <p class="middle-footer-rating">
                                    {{game.rating}}
                                    <i class="icon-font icon-star-inner "></i>
                                </p>
                                <p class="ups">邪神降临</p>
                            </div>
                            <a class="download">详情</a>
                            <div class="card-tags">
                                <a class="btn btn-xs btn-default" v-for="gameType in game.type">{{gameType}}</a>
                            </div>
                        </div>
                    </div>
                </cube-tab-panel>
            </cube-tab-panels>
        </div>
    </div>
</template>

<script>
    import api from '../../api/api';
    import {mapActions} from 'vuex'
    export default {
        data () {
            return {
                tabsOn: 'Android 游戏榜',
                tabs2On: '热门榜',
                tabs: ['Android 游戏榜','iOS 游戏榜','厂商榜'],
                tabsContent:{
                    'Android 游戏榜':[{"img":"game/cdb8b5d8c443df8ef40d6d7483a204d1_360.png","name":"元气骑士","company":"凉屋游戏","description":"描述...","rating":"9.6","type":["Roguelike","地牢","局域网联机"]},{"img":"game/f1b349435dd371b5f18f97c55b2e7e18_360.png","name":"崩坏3","company":"miHoYo","description":"描述...","rating":"7.0","type":["二次元","高画质","美少女"]},{"img":"game/4e29671c3a0133cdbdb36bb699cea962_360.png","name":"绝地求生：刺激战场","company":"腾讯","description":"描述...","rating":"8.3","type":["吃鸡","绝地求生","PUBG"]},{"img":"game/34e62b8c6994a9e118fdac32d6622dc6_360.png","name":"元气骑士","company":"凉屋游戏","description":"描述...","rating":"9.6","type":["Roguelike","地牢","局域网联机"]},{"img":"game/34e62b8c6994a9e118fdac32d6622dc6_360.png","name":"崩坏3","company":"miHoYo","description":"描述...","rating":"7.0","type":["二次元","高画质","美少女"]},{"img":"game/e27b34d4c7a80bb3d6590421ee0c9242_360.png","name":"绝地求生：刺激战场","company":"腾讯","description":"描述...","rating":"8.3","type":["吃鸡","绝地求生","PUBG"]}],
                    'iOS 游戏榜':[{"img":"game/34e62b8c6994a9e118fdac32d6622dc6_360.png","name":"元气骑士","company":"凉屋游戏","description":"描述...","rating":"9.6","type":["Roguelike","地牢","局域网联机"]},{"img":"game/34e62b8c6994a9e118fdac32d6622dc6_360.png","name":"崩坏3","company":"miHoYo","description":"描述...","rating":"7.0","type":["二次元","高画质","美少女"]},{"img":"game/e27b34d4c7a80bb3d6590421ee0c9242_360.png","name":"绝地求生：刺激战场","company":"腾讯","description":"描述...","rating":"8.3","type":["吃鸡","绝地求生","PUBG"]},{"img":"game/cdb8b5d8c443df8ef40d6d7483a204d1_360.png","name":"元气骑士","company":"凉屋游戏","description":"描述...","rating":"9.6","type":["Roguelike","地牢","局域网联机"]},{"img":"game/f1b349435dd371b5f18f97c55b2e7e18_360.png","name":"崩坏3","company":"miHoYo","description":"描述...","rating":"7.0","type":["二次元","高画质","美少女"]},{"img":"game/4e29671c3a0133cdbdb36bb699cea962_360.png","name":"绝地求生：刺激战场","company":"腾讯","description":"描述...","rating":"8.3","type":["吃鸡","绝地求生","PUBG"]}],
                    '厂商榜':[{"img":"game/cdb8b5d8c443df8ef40d6d7483a204d1_360.png","name":"元气骑士","company":"凉屋游戏","description":"描述...","rating":"9.6","type":["Roguelike","地牢","局域网联机"]},{"img":"game/f1b349435dd371b5f18f97c55b2e7e18_360.png","name":"崩坏3","company":"miHoYo","description":"描述...","rating":"7.0","type":["二次元","高画质","美少女"]},{"img":"game/4e29671c3a0133cdbdb36bb699cea962_360.png","name":"绝地求生：刺激战场","company":"腾讯","description":"描述...","rating":"8.3","type":["吃鸡","绝地求生","PUBG"]},{"img":"game/34e62b8c6994a9e118fdac32d6622dc6_360.png","name":"元气骑士","company":"凉屋游戏","description":"描述...","rating":"9.6","type":["Roguelike","地牢","局域网联机"]},{"img":"game/34e62b8c6994a9e118fdac32d6622dc6_360.png","name":"崩坏3","company":"miHoYo","description":"描述...","rating":"7.0","type":["二次元","高画质","美少女"]},{"img":"game/e27b34d4c7a80bb3d6590421ee0c9242_360.png","name":"绝地求生：刺激战场","company":"腾讯","description":"描述...","rating":"8.3","type":["吃鸡","绝地求生","PUBG"]}]
                },
                tabsAOn:1,
                tabsAOption: [
                    {value: 1,text: '热门榜'},
                    {value: 2,text: '新品榜'},
                    {value: 3,text: '预约榜'},
                    {value: 4,text: '热卖榜'},
                    {value: 5,text: '热玩榜'},
                ]
            }
        },
/*        components: {
            CubePage
        },*/
        watch: {
            tabsOn (newV) {
            }
        },
        methods:{
            login:function () {
                var _this = this;
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        let postData = {
                            account:this.loginForm.account,
                            password:this.loginForm.password,
                            media:"mobile"
                        }
                        api.post('api/login')(postData).then((data) => {
                            if(data.code == "200"){
                                sessionStorage.setItem("token",data.dto.token);
                                sessionStorage.setItem("account",this.loginForm.account);
                            }else{
                                this.$message({
                                    message: data.msg || '登录失败',
                                    type: 'error'
                                });
                            }
                        })
                    }else{
                        console.log("录入内容格式错误")
                    }
                })
            },
            register:function () {

            },
            ...mapActions([
                'saveUserInfo',
                'setToken'
            ])
        },
        mounted() {
            sessionStorage.removeItem("token");
        }
    }
</script>
<style>
    .smallRadio{
        border-bottom: 1px solid #ccc;
        padding: 5px;
        font-size: 14px;
    }
    .smallRadio li.cube-checker-item{
        padding: 5px;
        margin-right: 5px;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rankingListHead{
        margin: 10px auto 0px;
        padding: 29px 0 0;
        width: 185px;
        height: 100px;
        background: url(../../assets/images/trophy.png) no-repeat;
        background-size: contain;
    }
    .rankingListHead h1{
        font-size: 32px;
        margin: 0;
        font-weight: 700;
        color: #45576b;
        text-align: center;
        text-shadow: 0 1px 0 #fff;
    }
    .rankingListHead h3{
        margin: 0;
        line-height: 42px;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }
    .app-top-list {
        padding-left: 10px;
        padding-right: 10px;
    }
    .taptap-top-card {
        overflow: hidden;
        position: relative;
        height: 22.9333333333vw;
        border-bottom: 1px solid #EEE;
    }
    .taptap-top-card::after {
        content: "";
        display: table;
        clear: both
    }
    .taptap-top-card .top-card-order-text {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #666;
        z-index: 100;
        text-align: center
    }
    .taptap-top-card .top-card-left {
        position: relative;
        width: 16vw;
        top: 50%;
        left: 7.4666666667vw;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%)
    }

    .taptap-top-card .top-card-left a img {
        height: 16vw;
        width: 16vw;
        -o-object-fit: cover;
        object-fit: cover;
        overflow: hidden
    }

    .taptap-top-card .top-card-right {
        display: none
    }

    .taptap-top-card .top-card-middle {
        position: absolute;
        left: 26.1333333333vw;
        top: 2.6666666667vw;
        width: 45.3333333333vw;
        height: 5.3333333333vw;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden
    }

    .taptap-top-card .top-card-middle .card-middle-title h4 {
        margin: 0;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333;
        letter-spacing: 0;
        line-height: 20px
    }

    .taptap-top-card .top-card-middle .card-middle-title h4 .taptap-app-area {
        padding: 0 2px;
        line-height: 12px;
        font-size: 10px;
        margin-bottom: 2px
    }

    .taptap-top-card .top-card-middle .card-middle-author,.taptap-top-card .top-card-middle .card-middle-category,.taptap-top-card .top-card-middle .card-middle-description {
        display: none
    }

    .taptap-top-card .card-middle-score {
        position: absolute;
        left: 26.1333333333vw;
        top: 33px;
        height: 14px;
        width: 49.0666666667vw;
        display: -webkit-box;
        display: flex;
        flex-wrap: nowrap
    }

    .taptap-top-card .card-middle-score .middle-footer-rating {
        position: relative;
        left: 0;
        top: 0;
        vertical-align: middle;
        height: 100%;
        line-height: 14px;
        padding-left: 17px;
        font-size: 11px;
        color: #14B9C8;
        letter-spacing: 0;
        text-align: left
    }

    .taptap-top-card .card-middle-score .middle-footer-rating>span {
        position: absolute;
        margin-left: 4.5333333333vw;
        line-height: 3.7333333333vw;
        font-size: 11px;
        color: #14B9C8;
        letter-spacing: 0;
        text-align: center
    }

    .taptap-top-card .card-middle-score .middle-footer-rating>i {
        position: absolute;
        top: 0;
        left: 0
    }

    .taptap-top-card .card-middle-score .middle-footer-rating>i.isAndroid {
        top: -1px
    }

    .taptap-top-card .card-middle-score .middle-footer-rating>i.star {
        width: 14px;
        height: 14px;
        background-color: #14B9C8;
        color: #fff;
        border-radius: 50%;
        font-size: 12px;
        line-height: 14px;
        text-align: center
    }

    .taptap-top-card .card-middle-score .middle-footer-remind,.taptap-top-card .card-middle-score .ups {
        margin: 0;
        font-size: 11px;
        color: #999;
        height: 14px;
        line-height: 14px;
        display: inline-block;
        white-space: nowrap
    }

    .taptap-top-card .card-middle-score .ups {
        padding-left: 10px;
        text-overflow: ellipsis;
        overflow: hidden
    }

    .taptap-top-card .recommend {
        position: absolute;
        top: 2.6666666667vw;
        right: 0
    }

    .taptap-top-card .recommend i {
        display: inline-block;
        height: 3.7333333333vw;
        width: 3.7333333333vw;
        border-radius: 50%;
        background: #FFAC48;
        color: #fff;
        font-size: 10px;
        line-height: 3.7333333333vw;
        text-align: center
    }

    .taptap-top-card .recommend span {
        font-size: 12px;
        color: #FFAC48;
        letter-spacing: 0;
        line-height: 5.3333333333vw;
        padding-left: .8vw
    }

    .taptap-top-card .download {
        position: absolute;
        bottom: 3.2vw;
        right: 0;
        height: 6.9333333333vw;
        line-height: 6.9333333333vw;
        width: 16vw;
        background: #14B9C8;
        border-radius: .8vw;
        font-size: 12px;
        color: #FFF;
        letter-spacing: 0;
        text-align: center;
        border: 0
    }

    .taptap-top-card .card-tags {
        position: absolute;
        bottom: 3.2vw;
        left: 26.1333333333vw;
        font-size: 12px;
        color: #14B9C8;
        letter-spacing: 0;
        line-height: 5.3333333333vw;
        width: 45.3333333333vw;
        overflow: hidden;
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        height: 4.8vw
    }
</style>
