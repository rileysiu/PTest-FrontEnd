<script setup>
import { ref } from 'vue'

const activeNames = ref([''])
const handleChange = (val) => {
  console.log(val)
}

const judgeActive = (data) => {
    console.log(activeNames)
    return activeNames.value
}
</script>

<template>
    <div class="qa-block">
        <div class="qa-header">
            常見問題
        </div>
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item class="qa-content" name="1">
                <template #title>
                    <div :class="judgeActive() === '1'? 'qa-title-close':'qa-title-expand'">照片上傳後無法識別文字，怎麼辦？</div>
                    <div :class="judgeActive() === '1'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" title="Feedback" name="2">
                <template #title>
                    <div :class="judgeActive() === '2'? 'qa-title-close':'qa-title-expand'">為什麼我的上傳照片顯示失敗？</div>
                    <div :class="judgeActive() === '2'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Visual feedback: reflect current state by updating or rearranging
                    elements of the page.
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" title="Efficiency" name="3">
                <template #title>
                    <div :class="judgeActive() === '3'? 'qa-title-close':'qa-title-expand'">PTest如何幫助考生準備校長考試？</div>
                    <div :class="judgeActive() === '3'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Easy to identify: the interface should be straightforward, which helps
                    the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" title="Controllability" name="4">
                <template #title>
                    <div :class="judgeActive() === '4'? 'qa-title-close':'qa-title-expand'">PTest有免費試用版本嗎？</div>
                    <div :class="judgeActive() === '4'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" title="Controllability" name="5">
                <template #title>
                    <div :class="judgeActive() === '5'? 'qa-title-close':'qa-title-expand'">如何確保解答符合考試標準？</div>
                    <div :class="judgeActive() === '5'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" title="Controllability" name="6">
                <template #title>
                    <div :class="judgeActive() === '6'? 'qa-title-close':'qa-title-expand'">PTest的解答質量如何保證？</div>
                    <div :class="judgeActive() === '6'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    是的，您可以在手機、平板和電腦上使用我們的網站，所有設備上的數據會自動同步，方便您的學習。
                </div>
            </el-collapse-item>
            </el-collapse>
    </div>
</template>

<style scoped>
.qa-block {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .qa-header {
        width: 50%;
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
        color: #081B17;
    }

    .el-collapse {
        width: 60%;
        margin-top: 30px;
        border-bottom: none;

        .qa-content {
            border: 3px #EEF1F6 solid;
            border-radius: 1.25rem;
            padding: 20px;
            margin-bottom: 20px;

            .qa-answer {
                margin-top: 20px;
                color: #5A736E;
                letter-spacing: 0.0525rem;
                font-size: 1.5rem;
            }
        }
    }
}

:deep(.el-collapse-item__header) {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.06rem;
    justify-content: space-between;
    border-bottom: none;
}

:deep(.el-collapse-item__arrow) {
    display: none;
}

:deep(.qa-title-expand) {
    font-weight: bold;
    color: #081B17;
}

:deep(.qa-title-close) {
    font-weight: bold;
    color: #42B8A5;
}

:deep(.qa-expand) {
    width: 16px;
    height: 16px;
    color: #42B8A5;
    background-image: url(../assets/icons/expand.svg);
    transition: transform .5s;
}

:deep(.qa-close) {
    width: 16px;
    height: 16px;
    color: #42B8A5;
    background-image: url(../assets/icons/close.svg);
    transition: linear .5s;
    transform: rotate(180deg);
}

:deep(.el-collapse-item__wrap) {
    border-bottom: none;
}
</style>