<script setup>
import { Right } from '@element-plus/icons-vue'
import UploadFileMobileIcon from '@/assets/icons/uploadFile_mobile.svg'
import CameraIcon from '@/assets/icons/camera.svg'

import { ref } from 'vue'

const input = ref('')

</script>

<template>
    <div class="bar-block">
        <div class="bar-upload-icon">
            <img :src="UploadFileMobileIcon"/>
        </div>
        <div class="bar-input">
            <el-input v-model="input" class="bar-input-area" size="large" :suffix-icon="Right" placeholder="輸入題目，獲取最佳解答"/>
        </div>
        <div class="bar-camera-icon">
            <img :src="CameraIcon"/>
        </div>
    </div>
</template>

<style scoped>
.bar-block {
    /* border: 1px solid red; */
    /* height: 125px; */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 21.34%, #FFF 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;

    .bar-upload-icon {
        margin-top: 45px;
    }

    .bar-input {
        width: 75%;
    }

    .bar-camera-icon {
        margin-top: 45px;
    }
}

:deep(.bar-input-area .el-input__wrapper) {
    margin-top: 35px;
    border-radius: 2.5rem;
    height: 90px;
    font-size: 2rem;
    padding-left: 30px;
    /* 修改input輸入框字體顏色 */
    --el-input-text-color: #42B8A5;
    /* 修改input placeholder字體顏色 */
    --el-input-placeholder-color: #5A736E;
    /* // 修改icon顏色 */
    --el-input-icon-color: #42B8A5;

}
</style>