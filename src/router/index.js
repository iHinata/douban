import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		//首页
		{ 
			path: '/home', 
			name: 'home',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Home/home'], resolve),		
		},
		{ 
			path: '/homeDetail/:homeId', 
			name: 'homeDetail',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Home/homeDetail/homeDetail'], resolve),		
		},
		//影音
		{ 
			path: '/audio/movie', 
			name: 'movie',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Audio/movie/movie'], resolve),		
		},
		{ 
			path: '/audio/read', 
			name: 'read',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Audio/read/read'], resolve),		
		},
		{ 
			path: '/audio/tv', 
			name: 'tv',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Audio/tv/tv'], resolve),		
		},
		{ 
			path: '/audio/city', 
			name: 'city',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Audio/city/city'], resolve),		
		},
		{ 
			path: '/audio/music', 
			name: 'music',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Audio/music/music'], resolve),		
		},
		{ 
			path: '/audio/market', 
			name: 'market',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Audio/market/market'], resolve),		
		},
		//小组
		{ 
			path: '/group', 
			name: 'group',
			meta: { keepAlived: true , require: false},
			component: resolve => require(['@/page/Group/group'], resolve),		
		},
		//用户
		{ 
			path: '/user', 
			name: 'user',
			meta: { keepAlived: true , require: true},
			component: resolve => require(['@/page/User/user'], resolve),		
		},
		//详情页
		{
			path: '/detail/:id',
			name: 'detail',
			meta: { keepAlived: false, require: false },
			component: resolve => require(['@/page/Detail/detail'], resolve)
		},
		//注册
		{
			path: '/register',
			name: 'register',
			meta: { keepAlived: false, require: false },
			component: resolve => require(['@/page/register/register'], resolve)
		},
		//登录
		{
			path: '/login',
			name: 'login',
			meta: { keepAlived: false, require: true },
			component: resolve => require(['@/page/login/login'], resolve)
		},
		//重定向
		{ 
			path: '/', 
			redirect: '/home'		
		},
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	},
})


export default router