<template>
  <div class="company-wrapper">
    <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <h2 class="company-name">Oster Limited</h2>
    <p class="company-introduce">现为全球顶级电子电路设计制造解决方案供应商,和Intel,IBM,华为等是战略合作伙伴.</p>
    <div class="concat">
        <p class="company-email"><i class="el-icon-message"></i>Question@Oster.cn</p>
        <p class="company-phone"><i class="el-icon-phone-outline"></i>021-64881659</p>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        imageUrl: '../../static/images/logo.jpg'
    }
  },
  watch:{},
  computed:{},
  methods:{
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.company-wrapper {

    .avatar-uploader {

        .el-upload {
            position: relative;
            overflow: hidden;

            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                border: 1px dashed #d9d9d9;
                line-height: 178px;
                text-align: center;

                &:hover {
                    border-color: #409EFF;
                }
            }
        }

        .el-upload__tip {
            margin: 15px 0;
        }
    }

    .company-name {
        font-size: 20px;
        color: #333;
        margin-bottom: 15px; 
    }

    .company-introduce {
        font-size: 14px;
        color: #898989;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .concat {
        color: #666;
        font-size: 14px;
        line-height: 1.5;

         i {
            margin-right: 6px;
        }

    }

}
</style>