<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import UploadFileICon from '@/assets/icons/uploadFile.svg'


</script>

<template>
    <el-upload
        class="upload-area"
        drag
        action="#"
        multiple
    >
    <div class="inner-box" v-auto-animate>
        <el-icon class="el-icon--upload">
            <img :src="UploadFileICon" />
        </el-icon>
        <div class="el-upload__text">
            拖放或上傳檔案、照片
            <div class="upload-sub-text">
                可上傳 .docx、.pdf、.jpg、.txt、.doc、.pptx、.png、.ppt 格式的文件
            </div>
        </div>
    </div>
  </el-upload>
</template>

<style scoped>
.upload-area {
    width: 70%;
    border-radius: 1rem;
    box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.10);
}

.el-upload__text {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.06rem;

    .upload-sub-text {
        font-size: 1rem;
        letter-spacing: 0.03rem;
    }
}

/deep/ .el-upload .el-upload-dragger {
    height: 500px;
    border: none;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-box {
    height: 90%;
    width: 96%;
    border: 2px lightslategray dashed;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
