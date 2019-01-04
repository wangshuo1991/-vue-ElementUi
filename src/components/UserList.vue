<template>
  <div class="info">
    <h2 class="info-title">人员信息</h2>

    <!-- 这里是 table 信息列表 -->
    <el-table
      :data="tableData3"
      style="width: 100%">

       <el-table-column
        type="selection"
        width="55">

      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="100">

      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">

      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证号"
        width="180">

      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话号码"
        width="160">

      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="80">

      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="80">

      </el-table-column>
      <el-table-column
        prop="state"
        label="预约状态"
        width="80">

      </el-table-column>
       <el-table-column
        prop="shop"
        label="预约门店"
        width="160">

      </el-table-column>
      <el-table-column
        prop="action"
        label="操作">
        <template slot-scope="scope">

          <el-tooltip 
          class="item" 
          effect="dark" 
          content="编辑信息" 
          placement="top">

            <el-button 
            size="small" 
            type="success" 
            icon="el-icon-edit" 
            circle 
            @click="handleEidt(scope.$index, scope.row)"
            ></el-button>

          </el-tooltip>
          <el-tooltip 
          class="item" 
          effect="dark" 
          content="删除信息" 
          placement="top">

            <el-button 
            size="small" 
            type="danger" 
            icon="el-icon-delete" 
            circle 
            @click="handleDelete(scope.$index, scope.row)"
            >
            </el-button>

          </el-tooltip>

        </template>

      </el-table-column>

    </el-table>

    <div class="page-container">
      <el-row :gutter="20">

          <!-- 这里是 ‘导出execl’ 按钮 -->
          <el-col :span="6">
              <el-tooltip 
              class="item" 
              effect="dark" 
              content="保存到本地" 
              placement="bottom">

              <el-button 
              icon="el-icon-download"
              size="small"
              type="primary">
              导出Excel
              </el-button>

              </el-tooltip>
            
          </el-col>
          
          <!-- 这里是 分页器 -->
          <el-col :span="12">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.currentPage"
              :page-sizes="page.pageSizes"
              :page-size="page.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length">
            </el-pagination>
          </el-col>
          
      </el-row>
      
    </div>
      
  </div>

  </template>

  <script>


export default {
  components:{
    
  },
  props:{
  },
  data(){
    return {
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
      currentPage: 1,
      pageSize: 5,
      pageSizes: 5
    }
  },
  watch:{},
  computed:{
    page () { // 传递数据给 分页器
      let page = {};
      page.dataSum = this.tableData.length;// 数据长度
      page.currentPage = 1;
      page.pageSizes = [5,10,20,50];
      page.pageSize = 5;
      return page;
    },
    tableData3 () { // 显示每页数据
      let startIndex = (this.currentPage - 1)*this.pageSize;
      let endIndex = this.currentPage*this.pageSize;
      let tableData3 = this.tableData.slice(startIndex,endIndex);
      return tableData3;
    }
  },
  methods:{
    handleEidt (index, row) { // 点击编辑按钮 进行路由跳转
      this.$router.push({name: 'detail',params: {id: index}});
    },
    handleDelete (index,row) { // 点击删除按钮
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });  
    },
    handleSizeChange(val) { // 改变每一页显示的条数
        //console.log(`每页 ${val} 条`);
        this.pageSize = val;
    },
    handleCurrentChange(val) { // 改变哪一页
      //console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    
  },
  created(){

  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
.info{
  overflow: auto;

  .page-container {
    margin-top: 30px;
    overflow: hidden;
  }
}
</style>