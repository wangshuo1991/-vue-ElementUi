.<template>
  <div class="page-wrapper">
    
    
    
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
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
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