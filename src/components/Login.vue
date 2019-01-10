.<template>
  <div class="login-wrapper">
    <el-row :gutter="20" class="login-banner">
      <el-col :span="8" :offset="3">
        <img src="../../static/images/login.jpg" alt="">
      </el-col>
      <el-col :span="7" :offset="2" class="login-form">
        <div class="form-outer">
          <Title :titleSetting="titleSetting"></Title>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="60px" class="demo-ruleForm">
            <el-form-item label="账户" prop="username">
              <el-input type="text" v-model="ruleForm2.username" placeholder="请输入您的帐号">
                 <i slot="suffix" class="el-input__icon el-icon-date"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" placeholder="请输入您的密码" autocomplete="off">
                 <i slot="suffix" class="el-input__icon el-icon-date"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.enter="submitForm('ruleForm2')">登录</el-button>
              <a href="#" class="forget-pass">忘记密码?</a>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <footer class="copyright">
      2018©copyright shanghai software technology company.
    </footer>
  </div>
</template>

<script>
import Top from '@/base/Top.vue'
import Title from '@/base/Title.vue'

export default {
  components:{
      Top,
      Title
  },
  props:{},
  data(){
    return {
      rules2: {
        username: [
          {required: true,message: '不能为空',trigger: 'blur'}
        ],
        pass: [
          {required: true,message: '不能为空',trigger: 'blur'}
        ]
      },
      ruleForm2: {
        username: '',
        pass: ''
      },
      titleSetting: {
        title: '系统登录',
        tips: ''
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    submitForm (targetForm) { 
      this.$refs[targetForm].validate((valid)=>{ // 登录验证
        if (valid) {
          console.log('success');
          this.$router.replace('/userlist');
        }
      });
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.login-wrapper{
  margin-top: 120px;

  .login-banner {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .login-form {

    .form-outer {
      box-sizing: border-box;
      border: 1px solid #e9e9e9;
      padding: 20px 40px 30px 40px;


      .forget-pass {
        position: absolute;
        top: 4px;
        right: 0;
        color: rgb(194, 193, 193);
        text-decoration: none;

        &:hover {
          color: #409EFF;
        }
      }
    }

  }

  .copyright {
    width: 100%;
    line-height: 30px;
    color: rgb(202, 200, 200);
    margin-top: 80px;
    text-align: center;
  }
}
</style>