<script setup>
import { ref } from 'vue'

const activeNames = ref([''])
const handleChange = (val) => {
  console.log(val)
}

const judgeActive = (data) => {
    return activeNames.value
}
</script>

<template>
    <div class="qa-block">
        <div class="qa-header">
            常見問題
        </div>
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item class="qa-content" :style="judgeActive() === '1'? 'background-color: white;':'background-color: transparent;'" name="1">
                <template #title>
                    <div :class="judgeActive() === '1'? 'qa-title-close':'qa-title-expand'">照片上傳後無法識別文字，怎麼辦？</div>
                    <div :class="judgeActive() === '1'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" :style="judgeActive() === '2'? 'background-color: white;':'background-color: transparent;'" name="2">
                <template #title>
                    <div :class="judgeActive() === '2'? 'qa-title-close':'qa-title-expand'">為什麼我的上傳照片顯示失敗？</div>
                    <div :class="judgeActive() === '2'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Visual feedback: reflect current state by updating or rearranging
                    elements of the page.
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" :style="judgeActive() === '3'? 'background-color: white;':'background-color: transparent;'" name="3">
                <template #title>
                    <div :class="judgeActive() === '3'? 'qa-title-close':'qa-title-expand'">PTest如何幫助考生準備校長考試？</div>
                    <div :class="judgeActive() === '3'? 'qa-close':'qa-expand'"></div>
                </template>
                <div class="qa-answer">
                    Easy to identify: the interface should be straightforward, which helps
                    the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item class="qa-content" :style="judgeActive() === '4'? 'background-color: white;':'background-color: transparent;'" name="4">
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
            <el-collapse-item class="qa-content" :style="judgeActive() === '5'? 'background-color: white;':'background-color: transparent;'" name="5">
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
            <el-collapse-item class="qa-content" :style="judgeActive() === '6'? 'background-color: white;':'background-color: transparent;'" name="6">
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
        width: 80%;
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        color: #081B17;
    }

    .el-collapse {
        width: 77.5%;
        margin-top: 30px;
        border-bottom: none;
        border-top: none;
        --el-collapse-content-bg-color: transparent;

        .qa-content {
            border: 3px #EEF1F6 solid;
            border-radius: 1.3rem;
            padding: 25px 35px;
            margin-bottom: 20px;
            background-color: white;

            .qa-answer {
                margin-top: 20px;
                color: #5A736E;
                letter-spacing: 0.0525rem;
                font-size: 1.75rem;
                background-color: transparent;
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
    background-color: transparent;
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

@media screen and (max-width:1366px) {
    .qa-block {
        .qa-header {
            width: 80%;
            font-size: 4rem;
        }
        .el-collapse {
            width: 80%;
        }
    }
}

@media screen and (max-width:1000px) {
    .qa-block {
        .qa-header {
            width: 90%;
            font-size: 3rem;
            font-weight: bold;
            text-align: center;
            color: #081B17;
        }
        .el-collapse {
            width: 90%;
            .qa-content {
                .qa-answer {
                    font-size: 1.25rem;
                }
            }
        }
    }

    :deep(.el-collapse-item__header) {
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.06rem;
        justify-content: space-between;
        border-bottom: none;
        background-color: transparent;
    }
}

@media screen and (max-width:658px) {
    .qa-block {
        .qa-header {
            width: 90%;
            font-size: 25px;
        }
        .el-collapse {
            width: 90%;
            .qa-content {
                border: 3px #EEF1F6 solid;
                border-radius: 1.3rem;
                padding: 10px 20px;
                margin-bottom: 20px;
                background-color: white;
                .qa-answer {
                    font-size: 1rem;
                }
            }
        }
    }

    :deep(.el-collapse-item__header) {
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.01rem;
        justify-content: space-between;
        border-bottom: none;
        background-color: transparent;
    }
}
</style>