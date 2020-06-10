<template>
<div>
  <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#fff">
  <el-menu-item index="1"><router-link to = "/admin">Homepage</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">Function</template>
    <el-menu-item index="2-1"><router-link to = "/admin/add">Add</router-link></el-menu-item>
    <el-menu-item index="2-2"><router-link to = "/admin/search">Search</router-link></el-menu-item>
    <el-menu-item index="2-3"><router-link to = "/admin/email">Email</router-link></el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><router-link to = "/customer/add">Exit</router-link></el-menu-item>
</el-menu>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'mynav',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
