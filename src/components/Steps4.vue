<template>
  <div class="wrapper">
        <el-row>
            <el-col :span="20" :offset="2">
            <el-collapse v-model="activeNames" accordion>
                <el-collapse-item name="1">
                    <template slot="title">
                        所选主套餐<i class="header-icon el-icon-info"></i>
                    </template>
                    <div></div>
                </el-collapse-item>

                <el-collapse-item name="2">
                    <template slot="title">
                        所选加项包<i class="header-icon el-icon-info"></i>
                    </template>
                    <div>

                    </div>
                </el-collapse-item>

                <el-collapse-item name="3">
                    <template slot="title">
                        付费加项包的明细<i class="header-icon el-icon-info"></i>
                    </template>
                    <div></div>
                </el-collapse-item>

                <el-collapse-item name="4">
                    <template slot="title">
                        所选的门店和日期<i class="header-icon el-icon-info"></i>
                    </template>
                    <div></div>
                </el-collapse-item>       
            </el-collapse>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="align-right">
            <el-col :span="6" :offset="18">
                <el-button align="right" type="primary" @click="reset">重新预约</el-button>
                <el-button align="right" type="success" @click="save">保存提交</el-button>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeNames: ['1']
    }
  },
  methods: {
    save () {
      
    },

    reset () {
        this.$store.commit('clearTemp');
        this.$store.commit('goBack');
    }
  }
}
</script>
<style lang="scss" scoped>
    .wrapper {
        padding-bottom: 20px;
    }
</style>