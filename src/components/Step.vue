<script setup>
import AnswerCapture from '@/assets/background/answer.webp'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { ref } from 'vue'


const activeName = ref('first')

const handleClick = (tabsPaneContext, event) => {
  console.log(tabsPaneContext, event)
}
</script>

<template>
    <div class="step-block">
        <div class="step-header">PTest人工智慧解題如何運作？</div>
        <el-tabs v-model="activeName" class="step-tabs" @tab-click="handleClick" stretch>
            <el-tab-pane name="first">
                <template #label>
                    <span class="custom-tabs-label">
                        <span>步驟1</span>
                    </span>
                </template>
                <div class="step-img">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </el-tab-pane>
            <el-tab-pane name="second">
                <template #label>
                    <span class="custom-tabs-label">
                        <span>步驟2</span>
                    </span>
                </template>
                <div class="step-img">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </el-tab-pane>
            <el-tab-pane name="third">
                <template #label>
                    <span class="custom-tabs-label">
                        <span>步驟3</span>
                    </span>
                </template>
                <div class="step-img">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </el-tab-pane>
            <el-tab-pane name="fourth">
                <template #label>
                    <span class="custom-tabs-label">
                        <span>步驟4</span>
                    </span>
                </template>
                <div class="step-img">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </el-tab-pane>
            <el-tab-pane name="fifth">
                <template #label>
                    <span class="custom-tabs-label">
                        <span>步驟5</span>
                    </span>
                </template>
                <div class="step-img">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped>
.step-block {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .step-header {
        width: 50%;
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
        color: #081B17;
    }

    .step-tabs {
        width: 60%;
        margin-top: 30px;
        .custom-tabs-label {
            height: 60px;
            font-size: 2rem;
            vertical-align: middle;
            margin: 20px;
            color: #42B8A5;
        }

        .step-img {
            width: 100%;
            height: 800px;
            margin-top: 20px;
            color: #82918d;
            font-size: 3rem;
            border: 1px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        
    }
}

:deep(.el-tabs__active-bar) {
    background-color: #42B8A5;
}

</style>