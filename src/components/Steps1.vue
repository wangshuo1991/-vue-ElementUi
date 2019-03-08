<template>
  <div class="wrapper">
      <el-form ref="form1" :model="form1" :rules="rules" label-width="150px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="设置人名称" prop="settingName">
              <el-input v-model="form1.settingName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="套餐选择" prop="selectPackage">
              <el-select v-model="form1.selectPackage" placeholder="请选择套餐">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="全国通用" prop="allCountry">
          <el-switch v-model="form1.allCountry"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20" class="align-right">
              <el-col :span="6" :offset="18">
                  <el-button align="right" type="primary" @click="next('form1')">下一步</el-button>
              </el-col>
          </el-row>
        </el-form-item>
      </el-form>  
  </div>
</template>

<script>
export default {

  data(){
    return {
      form1: {
        settingName: '',
        selectPackage: '',
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
      },
      options: [
        {
          value: '201801',
          label: '2018经典白领套餐'
        },
        {
          value: '201802',
          label: '2018白金白领套餐'
        },
        {
          value: '201803',
          label: '2018尊贵白领套餐'
        }
      ]
    }
  },
  
  methods: {
    next (formName) {
      this.$refs[formName].validate((valid)=>{
        if (valid) {
          this.$store.commit('increment');
          this.$store.commit('appendTemp',this.form1)
        } 
      }) 
    }
  }
}
</script>
<style lang="scss" scoped>

</style>