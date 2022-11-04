import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './config/micro-app'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

registerMicroApps(microApps, {
  // lifeCycles hooks
  beforeLoad: app => {
    console.log('before load: ', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: blue;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: blue;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: red;', app.name)
    }
  ]
})

setDefaultMountApp('/sub-vue')
start()