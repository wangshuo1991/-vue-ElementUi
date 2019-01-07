.<template>
  <div class="side-wrapper">
    <el-menu
        text-color="#333"
        active-text-color="#409EFF"
        router
        default-active='active'
        @select="handleSelect">
        <el-menu-item index="/userlist">
          <i class="el-icon-date"></i>
          <span slot="title">员工列表</span>
        </el-menu-item>

        <el-menu-item index="/checksetting">
          <i class="el-icon-menu"></i>
          <span slot="title">套餐设置</span>
        </el-menu-item>

        <el-menu-item index="/relatives">
          <i class="el-icon-news"></i>
          <span slot="title">家属预约</span>
        </el-menu-item>

        <el-menu-item index="/about">
          <i class="el-icon-document"></i>
          <span slot="title">体检须知</span>
        </el-menu-item>

        <el-menu-item index="/service">
          <i class="el-icon-service"></i>
          <span slot="title">客服帮助</span>
        </el-menu-item>

        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">常规设置</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      active: '/userlist'
    }
  },
  watch:{},
  computed:{},
  methods:{
    handleSelect (index,indexpath) {
      //console.log(index,indexpath);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.side-wrapper {
    .el-menu {
    border-right: none;
    }
}
</style>