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
        align="left">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
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
              :current-page="pageIndex"
              :page-sizes="page.pageSizes"
              :page-size="page.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="formData.length">
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
      currentPage: 1,
      pageSize: 5,
      pageSizes: 5,
      search: '',
      pageIndex: 1
    }
  },
  watch:{
    tableData3 () {
      this.pageIndex = 1;
    }
  },
  computed:{
    page () { // 传递数据给 分页器
      let page = {};
      page.dataSum = this.formData.length;// 数据长度
      page.currentPage = 1;
      page.pageSizes = [5,10,20,50];
      page.pageSize = 5;
      return page;
    },
    formData () {
      return this.$store.state.tableData
    },
    tableData3 () { // 显示每页数据  根据搜索显示数据  有搜索的时候 根据搜索内容显示  没有搜索的时候 就分页
      if (this.search) {
        return this.formData.filter(item=>{
          return item.name.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        let startIndex = (this.currentPage - 1)*this.pageSize;
        let endIndex = this.currentPage*this.pageSize;
        let tableData3 = this.formData.slice(startIndex,endIndex);
        return tableData3;
      } 
      
    }
  },
  methods:{
    handleEidt (index, row) { // 点击编辑按钮 进行路由跳转
      let id = parseInt(row.id);
      this.$router.push({name: 'detail',params: {id: id}});
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
    /* tableDataFilter () {  // 这个方法是单纯的 搜索筛选的方法  需要配合分页使用  在计算属性中使用
      let data = this.tableData.filter(item=>{
        return !this.search || item.name.toLowerCase().includes(this.search.toLowerCase());
      });
      return data;
    } */
    
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