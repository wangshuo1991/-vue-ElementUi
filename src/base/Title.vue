.<template>
  <div class="title-wrapper">
      <h2 class="info-title">{{ titleSetting.title }}</h2>
      <p class="tip-text" v-show="titleSetting.tips != ''">
        <span>温馨提示：</span> <span>{{ titleSetting.tips }}</span>
      </p>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      titleSetting: {
          type: Object,
          default: {
              title: 'title',
              tips: ''
          }
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
.title-wrapper{
    .info-title {
        padding: 15px 0 15px 20px;
        margin-bottom: 25px;
        background: #f8f8f8;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 3px;
            height: 15px;
            background: #409EFF;
            top: 15px;
            left: 10px;
        }
    }

    .tip-text {
        padding: 20px 0;
        font-size: 14px;
        color: #898989;
    }

    
}
</style>