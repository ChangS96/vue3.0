<template>
   <div id="nav">
      <router-link to="/">todoList</router-link>
      |
      <router-link to="/about">aboutValue</router-link>
      |
      <router-link to="/detail">跳转路由</router-link>
      |
      <router-link to="/dialog">弹框dialog</router-link>
      |
      <router-link to="/basic">基组</router-link>
   </div>
   <router-view></router-view>
</template>

<style lang="scss">
   #app {
      width: 100%;
      height: 500px;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }

   #nav {
      padding: 50px 0;
      width: 100%;
      height: 100px;
      text-align: center;
      background-image: url("./assets/b.jpg");

      a {
         font-weight: bold;
         color: #2c3e50;

         &.router-link-exact-active {
            color: orangered;
         }
      }
   }
</style>
