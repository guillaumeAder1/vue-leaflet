<template>
  <div id="app">
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">About</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/map">Map</router-link>
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app,
.main {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
html,
body {
    padding: 0;
    margin: 0;
    background: rgb(84, 92, 100);
}
html,
body,
#app,
.main,
.map-container {
    height: 100%;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>