<template>
  <div class="info">
    <h2 class="info-title">人员信息</h2>
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
        width="200">

      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="140">

      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="140">

      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="140">

      </el-table-column>
      <el-table-column
        prop="state"
        label="预约状态"
        width="200">

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

            <!-- <div class="total-page">
                共<span>{{ page.dataSum }}</span>条数据
                共<span>{{ page.pageSum }}</span>页
            </div> -->
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
          name: '郑钧',
          gender: '男',
          age: 35,
          state: '未预约',
        },
        {
          date: '2018-09-26',
          name: '刘芸',
          gender: '女',
          age: 24,
          state: '预约',
        },
        {
          date: '2018-09-19',
          name: '华少',
          gender: '男',
          age: 42,
          state: '未预约',
        },
        {
          date: '2018-09-09',
          name: '权志龙',
          gender: '男',
          age: 29,
          state: '未预约',
        },
        {
          date: '2018-08-29',
          name: '璐璐',
          gender: '女',
          age: 20,
          state: '未预约',
        },
        {
          date: '2018-10-01',
          name: '武媚娘',
          gender: '女',
          age: 27,
          state: '预约',
        },
        {
          date: '2018-11-01',
          name: '苏定方',
          gender: '男',
          age: 45,
          state: '预约',
        },
        {
          date: '2018-11-15',
          name: '李靖',
          gender: '男',
          age: 59,
          state: '未预约',
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
    handleEidt (index, row) {
      this.$router.push({name: 'detail',params: {id: index}});
    },
    handleDelete (index,row) {
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