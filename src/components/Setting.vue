.<template>
  <div class="set-wrapper">
    <Title :titleSetting="titleSetting"></Title>
    
    <el-row :gutter="20">
        <el-col :span="4">
            <CompanyCard></CompanyCard>
        </el-col>
        <el-col :span="16" :offset="1">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="企业服务">企业服务</el-tab-pane>
                <el-tab-pane label="修改密码">
                    <el-row>
                        <el-col :span="14">
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
                    
                       
                </el-tab-pane>
            </el-tabs>  
        </el-col>
    </el-row>

        
  </div>
</template>

<script>
import Title from '@/base/Title.vue'
import CompanyCard from '@/base/CompanyCard.vue'

export default {
  components:{
      Title,
      CompanyCard
  },
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
        },
        tabPosition: 'top',
        titleSetting: {
            title: '常规设置',
            tips: ''
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
      
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

.set-wrapper {

    overflow: hidden;

}
    
    
    
</style>