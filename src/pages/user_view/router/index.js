import Vue from 'vue'
import Router from 'vue-router'
import user_view from '@/components/user_view/user_view'
import my_progress from '@/components/my_progress/my_progress'
import CaseStart from 'components/user_case/CaseStart';
import CaseNode from 'components/user_case/CaseNode';
import CaseReview from 'components/user_case/CaseReview';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user_view',
      component: user_view
    },
    {
      path: '/my_progress',
      name: 'my_progress',
      component:my_progress
    },
    {
      path: '/case_start',
      name: 'case_start',
      component:CaseStart
    },
    {
      path: '/case_node',
      name: 'case_node',
      component:CaseNode
    },
    {
      path: '/case_review',
      name: 'case_review',
      component:CaseReview
    }
  ]
})