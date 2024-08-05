<script setup>
import LogoIcon from '@/assets/logo/logo.svg'
import AvatarIcon1 from '@/assets/icons/avatar/person4.svg'
import AvatarIcon2 from '@/assets/icons/avatar/person5.svg'
import AvatarIcon3 from '@/assets/icons/avatar/person6.svg'
import AvatarIcon4 from '@/assets/icons/avatar/person7.svg'
import AvatarIcon5 from '@/assets/icons/avatar/person8.svg'

const consultantData = [
    {
        id: 1,
        name: '李一一',
        title: '教授',
        work: '國立台灣師範大學',
        position: '教育學系教授',
        avatar: AvatarIcon1
    },
    {
        id: 2,
        name: '張二二',
        title: '校長',
        work: '台北市立中山國小',
        position: '校長',
        avatar: AvatarIcon2
    },
    {
        id: 3,
        name: '陳三三',
        title: '博士',
        work: '台灣教育研究院',
        position: '院長',
        avatar: AvatarIcon3
    },
    {
        id: 4,
        name: '王四四',
        title: '校長',
        work: '新北市立民生國小',
        position: '校長',
        avatar: AvatarIcon4
    },
    {
        id: 5,
        name: '林五五',
        title: '教授',
        work: '國立政治大學',
        position: '教育學系教授',
        avatar: AvatarIcon5
    },
]
</script>

<template>
    <div class="footer-block">
        <div class="footer-left">
            <div class="footer-left-title">
                <img class="footer-left-icon" :src="LogoIcon"/>
                <div class="footer-left-content">
                    <div>
                        <div>使用PTest 甄慧考，掌握AI時代的考試準備利器</div>
                        <div>提升學習效率，輕鬆應對校長考試挑戰。</div>
                    </div>
                    <div>
                        © 2024 PTest 甄慧考 by 廣臻科技. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-right">
            <div class="footer-right-title">專業顧問</div>
            <el-row>
                <div v-for="consultant in consultantData" :key="consultant.id" class="footer-right-consultant">
                    <img :src="consultant.avatar" class="footer-right-consultant-icon"/>
                    <div class="footer-right-consultant-detail">
                        <div>{{ consultant.name }}{{ consultant.title }}</div>
                        <div>{{ consultant.work }}</div>
                        <div>{{ consultant.position }}</div>
                    </div>
                </div>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
.footer-block {
    width: 100%;
    margin-top: 100px;
    padding: 50px 100px;
    height: 500px;
    background-color: #081B17;
    display: flex;
    justify-content: space-between;

    .footer-left {
        width: 30%;

        .footer-left-title {
            display: flex;
            flex-direction: column;

            .footer-left-icon {
                width: 100px;
            }
            .footer-left-content {
                height: 300px;
                color: #EFFAF8;
                font-size: 1.25rem;
                line-height: 2.25rem; /* 180% */
                letter-spacing: 0.0375rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }

    .footer-right {
        width: 60%;
        overflow-x: scroll;
        .footer-right-title {
            margin-left: 20px;
            color: #EFFAF8;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2.25rem; /* 150% */
            letter-spacing: 0.045rem;
        }

        .footer-right-consultant {
            margin: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #EFFAF8;

            .footer-right-consultant-icon {
                width: 200px;
            }

            .footer-right-consultant-detail {
                text-align: center;
                margin-top: 10px;
            }
        }
    }
}
</style>