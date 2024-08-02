<script setup>
// import AnswerCapture from '@/assets/background/answer.webp'
import { ref } from 'vue'
import { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (TabsPaneContext, event) => {
  console.log(TabsPaneContext, event)
}
</script>

<template>
    <div class="step-block">
        <div class="step-header">PTest人工智慧解題如何運作？</div>
        <div class="step-tab">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="User" name="first">User</el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
        </div>
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

}
</style>