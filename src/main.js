// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './global.less'
// 引入历史浏览记录组件
import history from '@/components/history/history'
Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)
// 注册全局浏览历史记录组件
Vue.component('history', history)
// Vue.use(history)
window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  data: {
    // 用于存放省份地址
    address: [],
    // 性别
    sex: [],
    // 民族
    nation: [],
    // 婚姻状况
    marray: [],
    // 政治面貌
    politicalOutlook: [],
    // 学历
    education: [],
    // 宗教信仰
    religiousBelife: [],
    // 职业类别
    occupationCatgory: [],
    // 职业
    occupation: [],
    // 联系类型
    contactType: []
  },
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
