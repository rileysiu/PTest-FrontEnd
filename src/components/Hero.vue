<script setup>
import UploadFile from '@/components/UploadFile.vue';
import VideoPlayer from './VideoPlayer.vue';
</script>

<template>
    <div class="hero">
        <div class="title">
            使用PTest解鎖考取校長的成功之鑰
        </div>
        <div class="mobile-title">
            <p style="font-weight: bold;">使用PTest</p>
            <p style="font-weight: bold;">解鎖考取校長的成功之鑰</p>
        </div>
        <div class="subtitle">
            先進AI技術，助您輕鬆準備校長考試。
        </div>
        <div class="upload-block">
            <UploadFile />
        </div>
        <div class="video-display">
            <VideoPlayer />
        </div>
    </div>
</template>

<style>
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .title {
        color: #081B17;
        text-align: center;
        font-size: 5.5rem;
        font-weight: 600;
        letter-spacing: 0.18rem;
        padding-top: 70px;
    }

    .subtitle {
        color: #081B17;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.045rem;
    }

    .upload-block {
        width: 80%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
    }

    .video-display {
        width: 80%;
        height: 1000px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* mobile class not display in large screen*/
    .mobile-title {
        display: none;
    }
}

@media screen and (max-width:1410px) {
    .hero {
        .mobile-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 4rem;
            padding-top: 70px;
            font-weight: bolder;
            letter-spacing: 0.18rem;
        }

        .subtitle {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 30px 0;
        }


        /* original class not display in large screen*/
        .title {
            display: none;
        }

        .upload-block {
            display: none;
        }

        .video-display {
            width: 100%;
            height: auto;
        }
    }
}

@media screen and (max-width:960px) {
    .hero {
        .mobile-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            padding-top: 70px;
            font-weight: bolder;
            letter-spacing: 0.18rem;
        }

        .subtitle {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 20px 0;
        }


        /* original class not display in large screen*/
        .title {
            display: none;
        }

        .upload-block {
            display: none;
        }

        .video-display {
            width: 100%;
            height: auto;
        }
    }
}
</style>