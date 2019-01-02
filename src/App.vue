<template>
  <div id="app">
    <Top></Top>
    <el-row class="container" width="100%">
      <el-col class="side-container">
        <el-menu
        background-color="#fff"
        text-color="#333"
        active-text-color="#f40"
        router
        default-active="1">
          <el-menu-item index="/list">
            <i class="el-icon-date"></i>
            <span slot="title">员工列表</span>
          </el-menu-item>

          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">套餐设置</span>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-news"></i>
            <span slot="title">家属预约</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">体检须知</span>
          </el-menu-item>

          <el-menu-item index="5">
            <i class="el-icon-service"></i>
            <span slot="title">客服帮助</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col class="content-container" :span="20">
        <div class="content">
          <router-view></router-view>
        </div>
        
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import Top from '@/components/Top'

export default {
  name: 'App',
  components: {
    Top
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    display: flex;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    
    .side-container {
      background: #fff;
      flex: 0 0 300px;
      border-right: 1px solid #e6e6e6;

      .el-menu {
        border-right: none;
      }


    }

    .content-container {
      flex: 1;
      overflow: auto;

      .content {
        padding: 30px 50px;
      }
    }
  }
}
</style>
