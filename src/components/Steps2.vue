<template>
  <div class="wrapper">
      <el-form ref="form2" :model="form2" :rules="rules" label-width="150px">
        <el-form-item label="免费加项检查" prop="freeType">
            <el-checkbox-group v-model="form2.freeType">
            <el-checkbox label="直肠触诊" name="freeType"></el-checkbox>
            <el-checkbox label="c13检测" name="freeType"></el-checkbox>
            <el-checkbox label="体脂检测" name="freeType"></el-checkbox>
            <el-checkbox label="过敏测试" name="freeType"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="付费加项检查" prop="NonFreeType">
            <el-checkbox-group v-model="form2.NonFreeType" @change="selectNonFreePackage">
                <el-checkbox label="肿瘤指标筛查 - 118元" name="NonFreeType"></el-checkbox>
                <el-checkbox label="心脏疾病风险评估 - 89元" name="NonFreeType"></el-checkbox>
                <el-checkbox label="癌细胞筛查 - 229元" name="NonFreeType"></el-checkbox>
                <el-checkbox label="基因疾病筛查 - 669元 " name="NonFreeType"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        
        <el-row>
          <el-col :span="8">
            <el-form-item label="需支付" prop="orderSum">
              <el-input v-model="form2.orderSum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="支付方式">
            <el-radio-group v-model="form2.payWay">
                <el-radio label="在线支付"></el-radio>
                <el-radio label="门店支付"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-row :gutter="20" class="align-right">
              <el-col :span="6" :offset="18">
                  <el-button align="right" type="primary" @click="next('form2')">下一步</el-button>
              </el-col>
          </el-row>
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
      form2: {
        freeType: [],
        NonFreeType: [],
        payWay: '',
        orderSum: 0
      },
      rules: {
        
      }
    }
  },
  methods: {
      selectNonFreePackage (val) {
          this.NonFreeType = val;
      },
      next (formName) {
        this.$refs[formName].validate((valid)=>{
          if (valid) {
            this.$store.commit('increment');
            this.$store.commit('appendTemp',this.form2)
          } 
        }) 
      }
  },
  watch: {
      NonFreeType: {
        handler(newval,oldval){
            console.log('changed');
        }    
      },
      deep: true
  }
}
</script>
<style lang="scss" scoped>

</style>