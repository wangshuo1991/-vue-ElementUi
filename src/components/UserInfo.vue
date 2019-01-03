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
            type="primary" 
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
      <Page :page="page"></Page>
    </div>
    
  </div>
</template>

<script>
import Page from '@/base/Page'

export default {
  components:{
    Page
  },
  props:{
  },
  data(){
    return {
      tableData3: [
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
      ]
    }
  },
  watch:{},
  computed:{
    page () {
      let page = {};
      page.dataSum = this.tableData3.length;
      page.pageSum = Math.ceil(this.tableData3.length / 6);
      return page;
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
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.info{
  overflow: auto;

  .page-container {
    margin-top: 30px;
  }
}
</style>