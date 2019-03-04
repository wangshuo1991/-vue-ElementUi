<template>
  <div class="wrapper">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="设置人名称">
          <el-input v-model="form.settingName"></el-input>
        </el-form-item>
      </el-form>  
  </div>
</template>

<script>
export default {
  components:{
    
  },
  props:{},
  data(){
    return {
      form: {
        settingName: ''
      }
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>