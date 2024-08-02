<script setup>
import UploadICon from '@/assets/icons/feature_upload.svg'
import DeviceICon from '@/assets/icons/feature_device.svg'
import ReocrdICon from '@/assets/icons/feature_record.svg'
import SecurityICon from '@/assets/icons/feature_security.svg'
import SpeakerICon from '@/assets/icons/feature_speak.svg'

import { reactive } from 'vue'

const cardData = reactive([
    {
        index: 1,
        title: "考題快速上傳",
        content: "輕鬆上傳考題照片和檔案，系統自動識別文字並進行解答，免去手動輸入的麻煩。",
        icon: UploadICon
    },
    {
        index: 2,
        title: "考題快速上傳",
        content: "輕鬆上傳考題照片和檔案，系統自動識別文字並進行解答，免去手動輸入的麻煩。",
        icon: UploadICon
    },
    {
        index: 3,
        title: "答案朗讀功能",
        content: "無論是在通勤途中還是休閒時光，PTest的AI語音技術將答案朗讀給您，讓學習變得更加靈活方便。",
        icon: SpeakerICon
    },
    {
        index: 4,
        title: "多設備支持",
        content: "無論是手機、平板還是電腦，都能隨時隨地使用PTest，方便您的學習生活。",
        icon: DeviceICon
    },
    {
        index: 5,
        title: "安全可靠的數據存儲",
        content: "保護您的學習數據，提供安全可靠的數據存儲和備份服務，讓您無後顧之憂。",
        icon: SecurityICon
    },
    {
        index: 6,
        title: "查詢記錄保存",
        content: "自動保存您查過的考題及答案，方便隨時查看和複習。",
        icon: ReocrdICon
    }
])
</script>

<template>
    <div class="title-block">
        <div class="title-text">智能解答輕鬆應考</div>
        <div class="title-text">助您高效通過校長考試</div>
        <div class="subtitle-text">利用AI技術快速獲取精確答案，提升您的學習效率和考試成功率。</div>
    </div>
    <div class="feature-block">
        <div class="feature-group">
            <el-card v-for="card in cardData" :key="card" class="feature-card">
                <img :src="card.icon"/>
                <div class="feature-card-title">{{ card.title }}</div>
                <div class="feature-card-content">{{ card.content }}</div>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.title-block {
    margin-top: 100px;
    text-align: center;
    color: #081B17;
    
    .title-text {
        font-size: 6rem;
        letter-spacing: 0.18rem;
        font-weight: bolder;
        line-height: 120px;
    }

    .subtitle-text {
        margin-top: 20px;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.045rem;
    }
}

.feature-block {
    display: flex;
    justify-content: center;
    align-items: center;
    .feature-group {
        width: 60%;
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    
        .feature-card {
            width: 22.5rem;
            height: 22.5rem;
            display: flex;
            flex-direction: column;
            margin: 20px;
            padding: 15px;
            border-radius: 1.25rem;
            background-color: #FAFCFB;

            .feature-card-title {
                font-size: 1.8rem;
                font-weight: 600;
                letter-spacing: 0.06rem;
            }

            .feature-card-content {
                margin-top: 10px;
                font-size: 1.15rem;
                color: #5A736E;
                letter-spacing: 0.045rem;
                line-height: 2.5rem;
            }
        }
    }
}
</style>