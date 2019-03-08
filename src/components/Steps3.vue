<template>
  <div class="wrapper">
      <el-form ref="form3" :model="form3" :rules="rules" label-width="150px">
        <el-form-item label="选择日期" required>
            <el-col :span="5">
                <el-form-item prop="date1">
                    <el-date-picker
                    v-model="form3.deadline"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="选择门店" required>
            <el-cascader
              placeholder="试试搜索，比如徐汇"
              change-on-select
              :options="options"
              v-model="form3.selectedOptions2"
              @change="handleChange"
              filterable>
          </el-cascader>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20" class="align-right">
              <el-col :span="6" :offset="18">
                  <el-button align="right" type="primary" @click="next('form3')">下一步</el-button>
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
      form3: {
        deadline: '',
        selectedOptions2: []
      },
      rules: {},
      options: [
        {
          value: 'shanghai',
          label: '上海',
          children: [
            {
              value: 'xuhui',
              label: '徐汇区',
              children: [
                {
                  value: 'xuhuiyiyuan',
                  label: '徐汇一分院'
                }
              ]
            },{
              value: 'jingan',
              label: '静安区',
              children: [
                {
                  value: 'jinganfenyuan',
                  label: '静安分院'
                },
                {
                  value: 'shanghaihuochezhanfenyuan',
                  label: '静安总店上海火车站分院'
                }
              ]
            }
          ]
        }
        
      ]
    }
  },
  methods: {
      handleChange(){

      },
      next (formName) {
        this.$refs[formName].validate((valid)=>{
          if (valid) {
            this.$store.commit('increment');
            this.$store.commit('appendTemp',this.form3)
          } 
        }) 
      }
  }
}
</script>
<style lang="scss" scoped>
    .line {
        text-align: center;
    }
</style>