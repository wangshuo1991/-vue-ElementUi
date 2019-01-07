<template>
  <div class="top-wrapper">
      <header>
        <div class="mid-header">
          <el-row :gutter="20">

            <el-col :span="6">
              <a class="header-title" href="#">
                {{ headerTitle }}
              </a>
            </el-col>

            <el-col :span="6" :offset="12">
              <div class="dropBox">
                <el-dropdown>
                  <el-button>
                    用户设置<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>安全退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              
            </el-col>

          </el-row>
          
          
        </div>
        
      </header>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    headerTitle: {
      type: String,
      default: 'Vue Admin Systerm'
    }
  },
  data(){
    return {
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
    .top-wrapper {
      background: #fff;

      header {
        width: 100%;
        height: 79px;
        border-bottom: 1px solid #dbdbdb;

        .mid-header {
          padding: 0 20px;
          

          .header-title {  
            display: inline-block;
            height: 80px;
            line-height: 80px;
            font-size: 24px;
            text-decoration: none;
            color: #333;
          }

          .dropBox {
            padding: 20px;
            overflow: hidden;
            float: right;
          }
        }
        

      }
    }  
</style>