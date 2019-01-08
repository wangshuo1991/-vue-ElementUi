.<template>
  <div class="check-wrapper">
      <Title :titleSetting="titleSetting"></Title>
      
      <el-row class="steps-container">
        <el-col>
          <el-steps :active="active" finish-status="success" simple>
            <el-step icon="el-icon-edit" title="选择主套餐"></el-step>
            <el-step icon="el-icon-edit" title="选择加项包"></el-step>
            <el-step icon="el-icon-edit" title="选择门店和时间"></el-step>
            <el-step icon="el-icon-edit" title="提交设置"></el-step>
          </el-steps>
        </el-col>
      </el-row>

      <div class="package-container">
        <div class="content" v-if="active==0">
          <el-row>
            <el-col :span="10">
              <el-form :model="form" ref="mainPackageForm" :rules="rules1" label-width="120px">
                <el-form-item label="设置人姓名" prop="hrname">
                  <el-input v-model="form.hrname"></el-input>
                </el-form-item>
                <el-form-item label="体检主套餐" prop="mainPackage">
                  <el-select v-model="form.mainPackage" placeholder="请选择体检主套餐">
                    <el-option label="2018白领精品体检普通套餐" value="ordinary"></el-option>
                    <el-option label="2018白领精品体检黄金套餐" value="gold"></el-option>
                    <el-option label="2018白领精品体检铂金金套餐" value="vip"></el-option>
                  </el-select>
                </el-form-item>

                <el-button @click="dialogTableVisible = true">点击查看所选套餐的内容</el-button>
                <el-dialog :append-to-body="true" title="套餐内容" width="50%" :visible.sync="dialogTableVisible">
                  <el-table :data="mainPackageContent">
                    <el-table-column property="checkItem" label="体检项目" width="150"></el-table-column>
                    <el-table-column property="checkType" label="科室类型" width="200"></el-table-column>
                    <el-table-column property="checkDes" label="意义描述"></el-table-column>
                  </el-table>
                </el-dialog>
              </el-form>
            </el-col>
          </el-row>
        </div>

        <div class="content" v-else-if="active==1">
          <el-row>
            <el-col :span="20">
              <el-form :model="otherPackageData" ref="otherPackage">
                <h3>免费加项包</h3>
                <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedOpts" @change="handleCheckedfreeOptsChange">
                  <el-checkbox v-for="(freeOpt,index) in otherPackageData.freeOpts" :label="freeOpt" :key="index">{{freeOpt}}</el-checkbox>
                </el-checkbox-group>

                <h3>付费加项包</h3>
                <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedOpts" @change="handleCheckedOptsChange">
                  <el-checkbox v-for="(opt,index) in otherPackageData.Opts" :label="opt" :key="index">{{ opt }}</el-checkbox>
                </el-checkbox-group>
              </el-form>
            </el-col>
          </el-row>
        </div>

        <div class="content" v-else-if="active==2">
          <el-row>
            <el-col :span="20">
              <el-form ref="shopAndTime">
                
                <el-form-item label="预约时间">
                  <el-date-picker
                  v-model="value11"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd">
                  </el-date-picker> 
                </el-form-item> 
              </el-form>
            </el-col>
          </el-row>
        </div>

        <div class="content" v-else>
          <el-row>
            <el-col :span="20">
              
            </el-col>
          </el-row>
        </div>
        
        <el-row :gutter="20" class="align-right">
          <el-col :span="6" :offset="18">
            <el-button align="right" @click="prev" v-if="active==1 || active==2 || active==3">上一步</el-button>
            <el-button align="right" type="primary" @click="next" v-if="active==0 || active==1 || active==2">下一步</el-button>
            <el-button align="right" type="success" @click="save" v-if="active==3">保存并提交</el-button>
          </el-col>
        </el-row>
      </div>
      
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
      },
      form: {
        hrname: '',
        mainPackage: ''
      },
      otherPackageData: {
        type: [],
        freeOpts: ["甲状腺彩超","多普勒扫描","胸部CT","核磁共振"],
        Opts: ["胸部CT","核磁共振","肿瘤标志物","肝部扫描"]
      },
      rules1: {
        mainPackage: [
          {required: true,message: '请选择体检主套餐', trigger: 'change'}
        ]
      },
      rules2: {
        mainPackage: [
          {required: true,message: '请选择体检主套餐', trigger: 'change'}
        ]
      },
      dialogTableVisible: false,
      mainPackageContent: [
        {
          checkItem: '抽血',
          checkType: '检验科',
          checkDes: '血常规，肿瘤物质检测'
        },
        {
          checkItem: '胸部CT',
          checkType: '检验科',
          checkDes: '筛查肺部疾病'
        }
      ],
      validateForm: 'mainPackageForm',
      checkedOpts: [],
      checkAll1: false,
      value11: ''
    }
  },
  watch:{},
  computed:{},
  methods:{
    next () { // 下一步
      // this.$refs 是一个对象存储的是所有的 ref
      let valForm = Object.keys(this.$refs);
      let curForm = valForm[this.active];
       // 验证表
      this.$refs[curForm]
      .validate()
      .then((data)=>{
        if (data) {
          this.active<3 && this.active ++;
        }
      });
      
    },
    prev () { // 上一步
      if (this.active == 0) {
        return;
      }
      this.active --;
    },
    save () { // 保存提交

    },
    handleCheckAllChange1 () { // 全选


    }
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