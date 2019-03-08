.<template>
  <div class="check-wrapper">
      <Title :titleSetting="titleSetting"></Title>
      
      <el-row class="steps-container">
        <el-col>
          <el-steps :active="$store.state.active" finish-status="success" simple>
            <el-step icon="el-icon-edit" title="选择主套餐"></el-step>
            <el-step icon="el-icon-edit" title="选择加项包"></el-step>
            <el-step icon="el-icon-edit" title="选择门店和时间"></el-step>
            <el-step icon="el-icon-edit" title="提交设置"></el-step>
          </el-steps>
        </el-col>
      </el-row>

      <div class="package-container">

          <Steps1 v-if="$store.state.active === 0"></Steps1>
          <Steps2 v-else-if="$store.state.active === 1"></Steps2>
          <Steps3 v-else-if="$store.state.active === 2"></Steps3>
          <Steps4 v-else></Steps4>
          

      </div>
      
  </div>
</template>

<script>
import Title from '@/base/Title.vue'
import Steps1 from '@/components/Steps1.vue'
import Steps2 from '@/components/Steps2.vue'
import Steps3 from '@/components/Steps3.vue'
import Steps4 from '@/components/Steps4.vue'

export default {
  components:{
    Title,
    Steps1,
    Steps2,
    Steps3,
    Steps4
  },
  props:{},
  data(){
    return {
      titleSetting: {
        title: '套餐设置',
        tips: '请设置您公司员工的体检套餐。他们依次是 主套餐 - 加项包 - 门店和日期 - 确认或者重新预约'
      }
    }
  },
  watch:{},
  computed:{

  },
  methods:{

  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.check-wrapper {

  .steps-container {
    margin-bottom: 20px;
  }

  .package-container {
    padding: 25px 20px;
    border: 1px solid #e9e9e9;  
    box-sizing: border-box;  
    
    .content {
      min-height: 300px;
    }

    .align-right {
      text-align: right;
    }
    
  }
}

</style>