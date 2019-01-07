.<template>
  <div class="wrapper">
      <Title :titleSetting="titleSetting"></Title>
  </div>
</template>

<script>
import Title from '@/base/Title.vue'

export default {
  components:{
    Title
  },
  props:{},
  data(){
    return {
      titleSetting: {
        title: '编辑信息',
        tips: ''
      }
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

</style>