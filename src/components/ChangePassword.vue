.<template>
  <div class="wrapper">
      <h2 class="info-title">修改密码</h2>
      <el-row :gutter="20">
          <el-col :span="10">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="新密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">确认修改</el-button>
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
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
            pass: [
                {required: true, message: '请输入新密码', trigger: 'blur'}
            ],
            checkPass: [
                {required: true, message: '请确认密码', trigger: 'blur'}
            ]
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