import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import projectList from './views/list/projectList.vue'
import rankingList from './views/list/rankingList.vue'
import Setting from './views/Setting.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
    },
    {
        path: '/',
        component: Home,
        name: 'rankingList',
        iconCls: 'fa fa-home fa-lg',
        children: [
            { path: '/rankingList', component: rankingList, name: 'rankingList' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '项目管理',
        iconCls: 'fa fa-shopping-cart fa-lg',//图标样式class
        children: [
            { path: '/projectList/:id', component: projectList, name: '项目列表' }
        ]
    }
];

export default routes;