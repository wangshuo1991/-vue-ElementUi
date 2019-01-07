<template>
  <div id="app">
    <Top></Top>
    <el-row class="container" width="100%">
      <el-col class="side-container">
        <Side></Side>
      </el-col>

      <el-col class="content-container" :span="20">
        <div class="content">
          <transition name="fadeIn">
            
              <router-view></router-view>
            
          </transition>
          
        </div>
        
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import Top from '@/base/Top'
import Side from '@/base/Side'

export default {
  name: 'App',
  components: {
    Top,
    Side
  }
}
</script>

<style lang="scss" scoped>

.fadeIn-enter {
  opacity: 0;
}

.fadeIn-enter-active {
  transition: all 1s linear;
}

.fadeIn-leave-active {
  opacity: 0;
}


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
