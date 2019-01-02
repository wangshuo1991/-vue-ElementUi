.<template>
  <div class="detail-container">
      <h3 class="info-title">编辑信息</h3>
      <div class="detail">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年纪">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.gender" placeholder="请选择活动区域">
                    <el-option label="男" value="0"></el-option>
                    <el-option label="女" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="预约时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-col>
                
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.info"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存编辑</el-button>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        form: {
            name: '郑钧',
            age: 35,
            gender: 0,
            date: '2018-10-01',
            info: '暂无'
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
      onSubmit () {
          
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.detail-container{

    .info-title {
        padding: 20px 0;
    }



}
</style>