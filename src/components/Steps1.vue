<template>
  <div class="wrapper">
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="设置人名称" prop="settingName">
              <el-input v-model="form.settingName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="套餐选择" prop="selectPackage">
              <el-select v-model="form.package" placeholder="请选择套餐">
                <el-option label="2018-01" value="shanghai"></el-option>
                <el-option label="2018-02" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="全国通用" prop="allCountry">
          <el-switch v-model="form.allCountry"></el-switch>
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
        settingName: '',
        package: '',
        allCountry: false
      },
      rules: {
        settingName: [
            { required: true, message: '请输入设置人名称', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        selectPackage: [
            { required: true, message: '请选择套餐', trigger: 'change' },
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>