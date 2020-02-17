<template>
  <div id="container">
    <!-- <button @click="handlerClick('vue app', '/react')">header</button>
    <button @click="handlerClick('header app', '/m-main')">silder</button> -->
    <div class="appContainer 2" v-html="content2" />
    <div class="appContainer 1" v-html="content" />
      <el-main class="m-container-main">
        <div class="appContainer 3" v-html="content3" />
      </el-main>
  </div>
</template>

<script>
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

export default {
  name: 'container',
  components: {
  },
  data () {
    return {
      content: 'null',
      content2: 'null',
      content3: 'null',
      loading: false,
      // { scripts: [ '//localhost:9003/static/js/app.js' ] }
      apps: [
        { name: 'silder', entry: '//localhost:9002', render: this.render, activeRule: this.gudin()},
        { name: 'header', entry: '//localhost:9001' , render: this.render2, activeRule: this.gudin()},
        { name: 'm-main', entry: '//localhost:9003', render: this.render3, activeRule: this.genActiveRule('/m-main')},
        { name: 'm-product', entry: '//localhost:9005', render: this.render3, activeRule: this.genActiveRule('/m-product')},
        
      ]
    }
  },
  methods: {
    click (path) {
      window.history.pushState({}, 'title', `/${path}`)
    },
    handlerClick (title, href) {
      window.history.pushState({}, title, href)
    },
    render ({ appContent, loading }) {
      window.console.log('render')
      if(appContent) {
        this.content = appContent
      }
      this.loading = loading
    },
    render2 ({ appContent, loading }) {
      window.console.log('render2')
      this.content2 = appContent
      this.loading = loading
    },
    render3 ({ appContent, loading }) {
      window.console.log('render3')
      this.content3 = appContent
      this.loading = loading
    },
    genActiveRule (pathname) {
      window.console.log(pathname)
      return location => location.pathname.startsWith(pathname)
    },
    gudin () {
      return () => { return true }
    }
  },
  created () {
    registerMicroApps(this.apps);
    setDefaultMountApp('/m-main')
    start({
      singular: false,
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0px;
  margin: 0px;
}
.m-container-main {
  position: absolute;
  top: 60px;
  left: 200px;
}
.m-header {
  background-color: #262f40;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}
.m-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  background-color: #354155;
  color: #ffffff;
}
</style>
