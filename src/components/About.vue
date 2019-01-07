.<template>
  <div class="about-wrapper">
      <Title :titleSetting="titleSetting"></Title>
      
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="体检前" name="1">
          <ul>
            <li>1 - 体检前一天请您清淡饮食，勿饮酒、勿劳累。体检当天请空腹，禁食、勿饮水，不要吃对肝、肾功能有损害的药物(降压药、降糖药除外)。</li>
            <li>2 - 体检前一天要注意休息，避免剧烈运动和情绪激动，保证充足睡眠，以免影响体检结果。最好能洗个澡。</li>
            <li>3 - 女性客人体检请避开月经期。 不要穿花色内衣、带金属扣内衣、不要佩戴首饰，以免影响放射检查。</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="体检中" name="2">
          <ul>
            <li>1 - 怀孕及准备受孕的女性请预先告知医护人员，我们将不安排您做放射检查。</li>
            <li>2 - 做放射线检查前，请您除去身上佩戴的金银、玉器等饰物。</li>
            <li>3 - 需空腹检查的项目为抽血、腹部B超、隐血珠、碳13。内科检查前请您先测量血压。</li>
            <li>4 - 女性客人做盆腔B超检查前一小时，请您到餐饮区饮水6-8杯(400-500毫升)，使膀胱充盈，以保证检查结果的准确。</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="体检后" name="3">
          <ul>
            <li>1 - 全部检查项目完毕后请您务必将导检单交到前台。</li>
            <li>2 - 请您认真听取医生的建议，及时复查。随诊或进一步检查治疗。</li>
            <li>3 - 《体检报告》我们会封存后如期返回您的单位。</li>
            <li>4 - 请您保存好体检结果，以便和下次体检结果作对照，也可作为您就医时的资料。</li>
          </ul>
        </el-collapse-item>
      
      </el-collapse>
  </div>
</template>

<script>
import Title from '@/base/Title.vue'

export default {
  data(){
    return {
      activeName: '1',
      titleSetting: {
        title: '体检须知',
        tips: '请仔细查看注意事项,做好相应的检前准备'
      }
    }
  },
  components: {
    Title
  }
}
</script>
<style lang="scss" scoped>
.about-wrapper {

  ul {
    li {
      line-height: 2.0;
      
    }
  }
}
</style>