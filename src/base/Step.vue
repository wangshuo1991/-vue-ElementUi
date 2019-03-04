<template>
  <div class="wrapper">
    <el-row :gutter="20" class="align-right">
        <el-col :span="6" :offset="18">
            <el-button align="right" @click="prev" v-if="$store.state.active==1 || $store.state.active==2 || $store.state.active==3">上一步</el-button>
            <el-button align="right" type="primary" @click="next" v-if="$store.state.active==0 || $store.state.active==1 || $store.state.active==2">下一步</el-button>
            <el-button align="right" type="success" @click="save" v-if="$store.state.active==3">保存并提交</el-button>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      active: {
          type: Number
      }
  },
  data(){
    return {}
  },
  methods: {
      prev () { // 上一步
          this.$store.commit('decrement');
      },
      next () { // 下一步
          this.$store.commit('increment');
      },
      save () {}
  }
}
</script>
<style lang="scss" scoped>

</style>