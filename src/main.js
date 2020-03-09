import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import Content from './components/Content';
import SearchResult from './components/SearchResult';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Content
    },
    {
      path: '/search',
      component: SearchResult
    }
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
