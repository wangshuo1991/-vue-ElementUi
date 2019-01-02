<template>
  <div class="top-wrapper">
      <header>
        <div class="mid-header">
          <a href="#">
            {{ headerTitle }}
          </a>
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
          

          a {  
            display: block;
            height: 80px;
            line-height: 80px;
            font-size: 24px;
            text-decoration: none;
            color: #333;
          }
        }
        

      }
    }  
</style>