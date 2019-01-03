.<template>
  <div class="page-wrapper">
    
    <el-pagination
    class="pagination"
    background
    layout="prev, pager, next"
    :total="10">
    </el-pagination>

    <div class="total-page">
        共<span>{{ page.dataSum }}</span>条数据
        共<span>{{ page.pageSum }}</span>页
    </div>
    
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      page: {
          type: Object
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
.page-wrapper{
    display: flex;

    .total-page {
        flex: 0 0 200px;
        line-height: 32px;

        span {
            margin: 0 5px;
        }
    }

    .pagination {
        flex: 1;
    }
}
</style>