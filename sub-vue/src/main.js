import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vm

function render(props = {}) {
  const { container, routerBase } = props

  vm = new Vue({
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[sub vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[sub vue] props from main framework', props)

  render(props)
}

export async function unmount () {
  vm.$destroy()
  vm.$el.innerHTML = ''
  vm = null
}

