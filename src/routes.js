import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import projectList from './views/project/projectList.vue'
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
        name: '基础页面',
        iconCls: 'fa fa-home fa-lg',
        children: [
            { path: '/main', component: Main, name: '首页' },
            { path: '/setting', component: Setting, name: '个人设置'}
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