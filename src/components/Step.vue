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
        <el-carousel height="500px" motion-blur arrow="always" class="step-carousel" :autoplay="false" trigger="click">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="step-carousel-item">
                    <strong>步驟{{ item }}</strong>
                </div>
            </el-carousel-item>
        </el-carousel>
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
        width: 85%;
        font-size: 6rem;
        font-weight: 700;
        text-align: center;
        color: #081B17;
        letter-spacing: 2.5px;
    }

    .step-tabs {
        width: 75%;
        margin-top: 30px;

        .custom-tabs-label {
            height: 60px;
            font-size: 2rem;
            vertical-align: middle;
            color: #081B17;
        }

        .step-img {
            width: 100%;
            height: 600px;
            margin-top: 20px;
            color: #82918d;
            font-size: 3rem;
            border: 1px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
        }   
    }

    .step-carousel {
        display: none;
    }
}

:deep(.el-tabs__nav) {
    height: 50px;
}

:deep(.el-tabs__active-bar) {
    background-color: #42B8A5;
}

@media screen and (max-width:1410px) {
    .step-block {
        .step-header {
            font-size: 64px;
        }

        .step-tabs {
            width: 80%;
        }
    }
}

@media screen and (max-width:1050px) {
    .step-block {
        .step-header {
            font-size: 50px;
        }
    }
}

@media screen and (max-width:960px) {
    .step-block {
        .step-header {
            font-size: 40px;
        }

        .step-tabs {
            display: none;
        }

        .step-carousel {
            display: block;
            width: 95%;
            /* border: 1px lightgray solid; */
            
            .step-carousel-item {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: xx-large;
            }
        }
    }
}

@media screen and (max-width:658px) {
    .step-block {
        .step-header {
            width: 100%;
            font-size: 25px;
        }
    }
}
</style>