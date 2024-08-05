<script setup>
import AnswerCapture from '@/assets/background/answer.webp'
import { ref } from 'vue'


const activeName = ref('first')

const handleClick = (tabsPaneContext, event) => {
  console.log(tabsPaneContext, event)
}
</script>

<template>
    <div class="step-block">
        <div class="step-header">PTest人工智慧解題如何運作？</div>
        <el-tabs v-model="activeName" class="step-tabs" @tab-click="handleClick">
            <el-tab-pane label="步驟1" name="first">
                <img class="step-img" :src="AnswerCapture"/>
            </el-tab-pane>
            <el-tab-pane label="步驟2" name="second">步驟2</el-tab-pane>
            <el-tab-pane label="步驟3" name="third">步驟3</el-tab-pane>
            <el-tab-pane label="步驟4" name="fourth">步驟4</el-tab-pane>
            <el-tab-pane label="步驟5" name="fourth">步驟5</el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped>
.step-block {
    margin-top: 100px;
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
        width: 80%;

        .step-img {
            width: 100%;
            border: 1px solid red;
        }
    }
}
</style>