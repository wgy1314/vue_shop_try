import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/user/users.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect:'/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path:'/users',
        component: Users
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //to  将要访问的路径
  //from 从那个路径来的
  //next 函数  是否放行
  if (to.path === '/login') {
    //登陆页面直接放行
    return next();
  }
  //获取token
  const tokenstr = window.sessionStorage.getItem('token')
  if (!tokenstr) {
    //不存在token就跳回登陆页面
    return next('/login')
  }
  //存在token就放行
  next()
})

export default router
