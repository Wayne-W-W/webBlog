<template>
  <div class="unload-container">
    <el-upload
      class="el-upload"
      :action="getUploadUrl()"
      list-type="picture-card"
      :file-list="fileList"
      :limit="limit"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <div class="unload-tip">
      JPG/PNG,单张建议100K左右,建议尺寸为375px*375px或者750px*750px,可上传多张
    </div>
  </div>
</template>

<script>
import { uploadImageServe } from '@/api/user';
export default {
  props: {
    limit: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      fileList: [],
      disabled: false,
      uploadingUrl:
        process.env.VUE_APP_BASE_SERVE + 'frontend/common/uploadImage',
    };
  },
  methods: {
    getUploadUrl() {
      return this.uploadingUrl;
    },
    handleRemove(file) {
      console.log(file);
    },
    handleSuccess(res, file) {
      console.log(res, file);
    },
    async beforeUpload(file) {
      const isJPG = file.type === 'image/jpg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 5MB!');
      }
      const form = new FormData();
      form.append('file', file);
      const { data, ok, message } = await uploadImageServe(form);
      // if (!ok) {
      //   return this.$message.error(message);
      // }
      // this.ruleForm.icon = data.imageUrl;
      // this.ruleForm.imageId = data.imageId;
    },
  },
};
</script>
<style scoped>
.el-upload {
  text-align: left;
}
.el-upload >>> .el-upload-list__item {
  width: 95px;
  height: 95px;
}
.el-upload >>> .el-upload--picture-card {
  width: 95px;
  height: 95px;
  line-height: 95px;
}
.unload-tip {
  font-size: 12px;
  color: #606266;
  margin-top: 7px;
  line-height: 15px;
  width: 300px;
}
</style>
