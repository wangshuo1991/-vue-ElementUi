<template>
  <div class="wrapper">
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-form-item label="选择日期" required>
            <el-col :span="5">
                <el-form-item prop="date1">
                    <el-date-picker
                    v-model="deadline"
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
            v-model="selectedOptions2"
            @change="handleChange"
            filterable>
        </el-cascader>
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
        date1: '',
      },
      deadline: ''
      ,
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
        
      ],
      selectedOptions2: []
    }
  },
  methods: {
      handleChange(){

      }
  }
}
</script>
<style lang="scss" scoped>
    .line {
        text-align: center;
    }
</style>