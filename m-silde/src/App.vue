<template>
  <div id="app3">
    <el-aside class="m-aside" width="200px">
      <div @click="click('m-main')">
        m-main
      </div>
      <div @click="click('m-product')">
        m-product
      </div>
      <div @click="click('m-order')">
        m-order
      </div>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    click (path) {
      window.history.pushState({}, 'title', `/${path}`)
    }
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
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
