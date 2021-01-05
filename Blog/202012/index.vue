<!-- 上传文件——图片 -->
<template>
  <div class="unload-container">
    <el-upload
      ref="upload"
      :class="[
        'el-upload',
        limit && fileList.length >= limit ? 'el-upload-hidden' : ''
      ]"
      :action="getUploadUrl()"
      list-type="picture-card"
      :file-list="fileList"
      :limit="limit"
      accept="image/jpg,image/png"
      :auto-upload="false"
      :on-change="getFileList"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <div slot="tip" class="el-upload__tip">
        {{ tip }}
      </div>
    </el-upload>
  </div>
</template>

<script>
import { uploadImageServe } from "@/api/user";
export default {
  props: {
    limit: {
      type: Number,
      default: null
    },
    images: {
      type: Array,
      default: []
    },
    tip: {
      type: String
    }
  },
  data() {
    return {
      fileList: [],
      uploadingUrl:
        process.env.VUE_APP_BASE_SERVE + "frontend/common/uploadImage"
    };
  },
  watch: {
    images: {
      immediate: true,
      handler(val) {
        if (val.length) {
          for (const item of val) {
            this.fileList.push({
              url: item
            });
          }
        }
      }
    }
  },
  methods: {
    getUploadUrl() {
      return this.uploadingUrl;
    },
    handleRemove(file) {
      // remove
      const index = this.fileList.map(p => p.uid).indexOf(file.uid);
      this.fileList.splice(index, 1);
    },
    getFileList(file, fileList) {
      // get fileList
      this.fileList = fileList;
      // when image upload, clean validate tip
      this.$emit("clearValidateMsg");
    },
    async _handleStartUpload() {
      const readyFileList = this.fileList.filter(i => i.status === "ready");
      if (!readyFileList.length) {
        // all images done success, direact return
        return {
          isImageExce: false,
          text: "images success done",
          resultImgs: this.filterSuccessImages()
        };
      }
      // images of ready  start upload  ing....
      let count = 0;
      for (const item of readyFileList) {
        const isLt2M = item.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          // image can`t exced 2M
          return {
            isImageExce: true,
            exceText: "图片大小不能超过 2MB!",
            resultImgs: this.filterSuccessImages()
          };
        }
        await this.saveUploadImage(item);
        count++;
        if (count === readyFileList.length) {
          console.log("upload success done");
          return {
            isImageExce: false,
            text: "images upload success done",
            resultImgs: this.filterSuccessImages()
          };
        }
      }
    },
    filterSuccessImages() {
      // filter imagesList  to upload  of success
      const successFileList = this.fileList.filter(i => i.status === "success");
      const imageDone = [];
      for (const item of successFileList) {
        // 新上传成功的文件fileName，上次上传成功的只有url
        imageDone.push({
          fileName: item.fileName || item.url,
          uid: item.uid
        });
      }
      return imageDone;
    },
    async saveUploadImage(file) {
      // image upload to serve
      const form = new FormData();
      form.append("file", file.raw);
      const { data, success, message } = await uploadImageServe(form);
      if (!success) {
        this.$message.error(message);
        return;
      }
      // upload image done. file status is success
      for (const item of this.fileList) {
        if (item.uid === file.uid) {
          item.status = "success";
          item.fileName = data.fileName;
        }
      }
    }
  }
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
.el-upload >>> .el-upload-list__item-thumbnail {
  width: 95px;
  height: 95px;
}
.el-upload-hidden >>> .el-upload--picture-card {
  display: none;
}
.unload-tip {
  font-size: 12px;
  color: #606266;
  margin-top: 7px;
  line-height: 15px;
  width: 300px;
}
</style>
