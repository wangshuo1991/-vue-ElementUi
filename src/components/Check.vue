.<template>
  <div class="check-wrapper">
      <Title :titleSetting="titleSetting"></Title>
      
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
            <el-step title="步骤 4"></el-step>
          </el-steps>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Title from '@/base/Title.vue'

export default {
  components:{
    Title
  },
  props:{},
  data(){
    return {
      active: 0,
      titleSetting: {
        title: '套餐设置',
        tips: '企业体检套餐分为四个步骤进行，确保每个步骤的选项落实清晰.'
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