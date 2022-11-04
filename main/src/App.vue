<template>
  <div id="app">
    <div class="header">
      <div class="main-title">Main App</div>
      <div class="wrapper-links">
        <span
          class="micro-app-link"
          v-for="item of microApps"
          @click="goto(item)"
          :key="item.name"
        >{{ item.name }}</span>
      </div>
    </div>

    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import microApps from './config/micro-app'

export default {
  name: 'App',
  data() {
    return {
      microApps,
    }
  },
  
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule)
    }
  }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  background: #f5f5f5;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  display: flex;
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  text-align: center;
  background: #fff;
}
.main-title {
  font-size: 20px;
  font-weight: 600;
}
.wrapper-links {
  flex: 1;
  margin-left: 200px;
  text-align: center;
}
.micro-app-link {
  cursor: pointer;
}
.micro-app-link + .micro-app-link {
  margin-left: 15px;
}
</style>
