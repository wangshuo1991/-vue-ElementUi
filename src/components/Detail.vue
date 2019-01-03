.<template>
  <div class="detail-container">
      <h2 class="info-title">编辑信息</h2>
      <el-row :span="24" class="detail">
        <el-col :span="12"> 
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年纪">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.gender" placeholder="请选择活动区域">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
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
                <el-button @click="cancleDelete">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>   
      </el-row>
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
            gender: '男',
            date: '2018-10-01',
            info: '暂无'
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
      onSubmit () {

      },
      cancleDelete () {
        this.$router.push('/list');  
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.detail-container{

    

}
</style>