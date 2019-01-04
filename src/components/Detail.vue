.<template>
  <div class="detail-container">
      <h2 class="info-title">编辑信息</h2>
      <el-row :gutter="20" class="detail">
        <el-col :span="8"> 
          <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="id">
                <el-input v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="年纪" prop="age">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-select v-model="form.gender" placeholder="请选择活动区域">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="预约时间" prop="date">
                <el-date-picker 
                type="date" 
                placeholder="选择日期" 
                v-model="form.date" 
                style="width: 100%;">
                </el-date-picker>   
            </el-form-item>

            <el-form-item label="预约门店" prop="shop">
                <el-cascader
                placeholder="试试搜索：上海"
                :options="options"
                :debounce=400
                filterable
                >
                </el-cascader>
            </el-form-item>
            
            <el-form-item label="常用邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            
            <el-form-item label="备注" prop="info">
                <el-input type="textarea" v-model="form.info"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="onSubmit">保存编辑</el-button>
                <el-button @click="cancleDelete">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col> 

        <el-col :span="8" :offset="1">
            <ul class="edit-tips" v-for="(tip,index) in tips" :key="index">
                <li>{{ tip }}</li>
            </ul>
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
        form: {},
        tips: [
            '请填写有效字符（支持中文和英文），长度不超过16个字符',
            '必填，身份唯一识别编码',
            '请填写数字',
            '性别必填，用于区分体检项目',
            '请填写手机号或者座机号，外地加区号（如上海 021-66666666）',
            '只能选择即日起，三个月内的时间',
            '必填，支持全国各地门店',
            '用于发送您的检查报告，如无需要，可不填写',
            '填写您的其他意见和要求'
        ],
        rules: {
            name: [
                { required: true, message: '请输入名字', trigger: 'blur' },
                { min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
            ],
            id: [
                { required: true, message: '请输入身份证号码', trigger: 'blur' }
            ],
            age: [
                {required: true,message: '请输入年纪', trigger: 'blur'}
            ],
            gender: [
                {required: true,message: '请选择性别', trigger: 'change'}
            ],
            phone: [
                {required: true,message: '电话不能为空', trigger: 'blur'}
            ],
            date: [
                {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
            ],
            shop: [
                {required: true, message: '门店不能为空', trigger: 'change'}
            ],
            email: [
                {type: 'string'}
            ],
            info: [
                {type: 'string'}
            ]
        },
        tableData: [
            {
            date: '2018-10-01',
            id: '410121197802214512',
            name: '郑钧',
            gender: '男',
            phone: '13245678912',
            age: 35,
            state: '未预约',
            shop: '上海徐汇分院'
            },
            {
            date: '2018-09-26',
            name: '刘芸',
            id: '210001199209142010',
            gender: '女',
            phone: '17849877892',
            age: 24,
            state: '预约',
            shop: '上海浦东一院'
            },
            {
            date: '2018-09-19',
            name: '华少',
            id: '512101198712010112',
            gender: '男',
            phone: '15603801248',
            age: 42,
            state: '未预约',
            shop: '上海卢湾分院'
            },
            {
            date: '2018-09-09',
            name: '权志龙',
            id: '410111198802161212',
            gender: '男',
            phone: '18210467892',
            age: 29,
            state: '未预约',
            shop: '上海徐汇分院'
            },
            {
            date: '2018-08-29',
            name: '璐璐',
            id: '602101198904061208',
            gender: '女',
            phone: '13812690124',
            age: 20,
            state: '未预约',
            shop: '上海虹桥分院'
            },
            {
            date: '2018-10-01',
            name: '武媚娘',
            id: '810001199212122010',
            gender: '女',
            phone: '15021789562',
            age: 27,
            state: '预约',
            shop: '上海宝山分院'
            },
            {
            date: '2018-11-01',
            name: '苏定方',
            id: '410001199909142010',
            gender: '男',
            phone: '17912456974',
            age: 45,
            state: '预约',
            shop: '深圳宝安分院'
            },
            {
            date: '2018-11-15',
            name: '李靖',
            id: '310001197809142010',
            gender: '男',
            phone: '18974582936',
            age: 59,
            state: '未预约',
            shop: '北京朝阳分院'
            }
        ],
        options: [
            {
                value: 'shanghai',
                label: '上海',
                children: [
                    {
                        value: 'xuhuiqu',
                        label: '徐汇区',
                        children: [
                            {
                                value: 'yiyuan',
                                label: '一院',
                            }
                        ]
                    }
                ]
            }
        ]
    }
  },
  watch:{},
  computed:{},
  methods:{
      onSubmit () {

      },
      cancleDelete () {
        this.$router.push('/userlist');  
      },
      getFormData () {
          let id = this.$route.params.id;
          this.form = this.tableData[id];
      }
  },
  created(){
      this.getFormData();
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
.detail-container{

    .edit-tips li {
        line-height: 40px;
        color: #9f9f9f;
        font-size: 14px;
        margin-bottom: 22px;

    }

}
</style>