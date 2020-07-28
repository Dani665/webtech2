import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import ListPage from '../list/ListPage'
import CreatePage from '../create/CreatePage'
import ModifyPage from '../create/ModifyPage'


Vue.use(Router);

export const router = new Router({
  //mode: 'history',
  history: true,
  hashbang: false,
  root: "/",
  base: "",
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/list', component: ListPage },
    { path: '/create', component: CreatePage },
    { path: '/modify/:id', component: ModifyPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})