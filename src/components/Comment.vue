<script setup>
import Avatar from './Avatar.vue';
import AvatarIcon1 from '@/assets/icons/avatar/person1.svg'
import AvatarIcon2 from '@/assets/icons/avatar/person2.svg'
import AvatarIcon3 from '@/assets/icons/avatar/person3.svg'

const commentData = [
    {
        id: 1,
        avatarIcon: AvatarIcon1,
        name: '李佳穎',
        date: '2023年11月28日',
        content: '我用了這個網站一段時間，真的覺得它很棒。可以隨時上傳考題照片，系統會自動識別並給出解答，真的很方便。最重要的是，答案解析非常有幫助，讓我更容易理解考題。此外，多設備支持的功能讓我無論在哪裡都能夠隨時學習，這點我特別喜歡。這個網站真的讓我的考試準備變得更加輕鬆有效。'
    },
    {
        id: 2,
        avatarIcon: AvatarIcon2,
        name: '王小明',
        date: '2024年3月15日',
        content: '這個平台真的幫助我很多！AI解答非常準確，解析也非常詳細，讓我在準備考試的過程中節省了很多時間。特別是上傳考題照片的功能，非常方便，系統會自動識別並提供解答，省去了手動輸入的麻煩。我覺得這是一個非常高效的學習工具，強烈推薦給所有準備考校長的朋友！'
    },
    {
        id: 3,
        avatarIcon: AvatarIcon3,
        name: '陳志宏',
        date: '2024年5月2日',
        content: '這個AI平台是我見過最好的學習工具。不僅能夠提供準確的答案，還能夠根據我的學習進度推薦個性化的學習計畫，讓我準備考試更加有序。我特別喜歡即時錯題反饋的功能，每次做錯的題目都能及時得到解析，幫助我快速糾正錯誤。此外，平台的安全可靠性也讓我感到非常放心。總之，這是一個非常值得推薦的學習平台！'
    }
]

const commentData2 = [
    {
        id: 1,
        avatarIcon: AvatarIcon1,
        name: '李佳穎',
        date: '2023年11月28日',
        content: '我用了這個網站一段時間，真的覺得它很棒。可以隨時上傳考題照片，系統會自動識別並給出解答，真的很方便。最重要的是，答案解析非常有幫助，讓我更容易理解考題。此外，多設備支持的功能讓我無論在哪裡都能夠隨時學習，這點我特別喜歡。這個網站真的讓我的考試準備變得更加輕鬆有效。'
    },
    {
        id: 2,
        avatarIcon: AvatarIcon2,
        name: '王小明',
        date: '2024年3月15日',
        content: '這個平台真的幫助我很多！AI解答非常準確，解析也非常詳細，讓我在準備考試的過程中節省了很多時間。特別是上傳考題照片的功能，非常方便，系統會自動識別並提供解答，省去了手動輸入的麻煩。我覺得這是一個非常高效的學習工具，強烈推薦給所有準備考校長的朋友！'
    },
    {
        id: 3,
        avatarIcon: AvatarIcon3,
        name: '陳志宏',
        date: '2024年5月2日',
        content: '這個AI平台是我見過最好的學習工具。不僅能夠提供準確的答案，還能夠根據我的學習進度推薦個性化的學習計畫，讓我準備考試更加有序。我特別喜歡即時錯題反饋的功能，每次做錯的題目都能及時得到解析，幫助我快速糾正錯誤。此外，平台的安全可靠性也讓我感到非常放心。總之，這是一個非常值得推薦的學習平台！'
    },
    {
        id: 4,
        avatarIcon: AvatarIcon1,
        name: '李佳穎',
        date: '2023年11月28日',
        content: '我用了這個網站一段時間，真的覺得它很棒。可以隨時上傳考題照片，系統會自動識別並給出解答，真的很方便。最重要的是，答案解析非常有幫助，讓我更容易理解考題。此外，多設備支持的功能讓我無論在哪裡都能夠隨時學習，這點我特別喜歡。這個網站真的讓我的考試準備變得更加輕鬆有效。'
    },
    {
        id: 5,
        avatarIcon: AvatarIcon2,
        name: '王小明',
        date: '2024年3月15日',
        content: '這個平台真的幫助我很多！AI解答非常準確，解析也非常詳細，讓我在準備考試的過程中節省了很多時間。特別是上傳考題照片的功能，非常方便，系統會自動識別並提供解答，省去了手動輸入的麻煩。我覺得這是一個非常高效的學習工具，強烈推薦給所有準備考校長的朋友！'
    },
    {
        id: 6,
        avatarIcon: AvatarIcon3,
        name: '陳志宏',
        date: '2024年5月2日',
        content: '這個AI平台是我見過最好的學習工具。不僅能夠提供準確的答案，還能夠根據我的學習進度推薦個性化的學習計畫，讓我準備考試更加有序。我特別喜歡即時錯題反饋的功能，每次做錯的題目都能及時得到解析，幫助我快速糾正錯誤。此外，平台的安全可靠性也讓我感到非常放心。總之，這是一個非常值得推薦的學習平台！'
    }
]
</script>

<template>
    <div class="comment-block">
        <div class="comment-header">助我成功應考的秘密武器</div>
        <el-carousel indicator-position="outside" :autoplay="false" trigger="click" height="450px" class="carousel-desktop">
            <el-carousel-item v-for="item in 3" :key="item">
                <el-row justify="center">
                    <el-card v-for="comment in commentData" :key="comment.id">
                        <div class="card-header">
                            <Avatar class="card-avatar" :src="comment.avatarIcon"/>
                            <div class="card-personal">
                                <div class="card-personal-name">{{ comment.name }}</div>
                                <div class="card-personal-date">{{ comment.date }}</div>
                            </div>
                        </div>
                        <div class="card-comment">
                            {{ comment.content }}
                        </div>
                    </el-card>
                </el-row>
            </el-carousel-item>
        </el-carousel>
        <el-carousel indicator-position="outside" :autoplay="false" trigger="click" height="450px" class="carousel-mobile">
            <el-carousel-item v-for="comment in commentData" :key="comment.id">
                <el-row justify="center">
                    <el-card>
                        <div class="card-header">
                            <Avatar class="card-avatar" :src="comment.avatarIcon"/>
                            <div class="card-personal">
                                <div class="card-personal-name">{{ comment.name }}</div>
                                <div class="card-personal-date">{{ comment.date }}</div>
                            </div>
                        </div>
                        <div class="card-comment">
                            {{ comment.content }}
                        </div>
                    </el-card>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>
.comment-block {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .comment-header {
        width: 80%;
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
        color: #081B17;
    }

    .el-carousel {
        margin-top: 50px;
        width: 80%;
        padding: 0 5px;
    }
}

.el-card {
    width: 25rem;
    height: 25rem;
    border-radius: 1rem;
    margin: 0 10px;
}

.card-header {
    display: flex;
    .card-avatar {
        margin: 20px;
    }

    .card-personal {
        margin: 20px 0 0 10px;
        
        .card-personal-name {
            font-size: 1.1rem;
            font-weight: bold;
        }
    }
}

.card-comment {
    color: #5A736E;
    font-size: 1.1rem;
    letter-spacing: 0.0375rem;
    padding: 0 10px;
}

.carousel-mobile {
    display: none;
}

@media screen and (max-width:1600px) {
    .comment-block {
        .el-carousel {
            width: 100%;
        }
    }
}

@media screen and (max-width:1285px) {
    .comment-block {
        .comment-header {
            font-size: 4rem;
        }
    }
    .carousel-desktop {
        display: none;
    }

    .carousel-mobile {
        display: block;
    }

    .el-card {
        width: 30rem;
        height: 25rem;
        border-radius: 1rem;
        margin: 0 10px;
    }

    
    .card-comment {
        color: #5A736E;
        font-size: 1.25rem;
        letter-spacing: 0.0375rem;
        padding: 0 10px;
    }
}

@media screen and (max-width:960px) {
    .comment-block {
        .comment-header {
            font-size: 3rem;
        }
    }

    .card-comment {
        color: #5A736E;
        font-size: 1.1rem;
        letter-spacing: 0.0375rem;
        padding: 0 10px;
    }
}
</style>