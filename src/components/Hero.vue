<script setup>
import UploadFile from '@/components/UploadFile.vue';
import VideoPlayer from './VideoPlayer.vue';
</script>

<template>
    <div class="hero">
        <div class="title">
            使用PTest解鎖考取校長的成功之鑰
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
    /*background: linear-gradient(-45deg, #d1ffe7, #fffdbb, #fffdbb, #d1ffe7 60%);
	background-size: 400% 400%;*/
    background-color:hsla(101,0%,100%,1);
    background-image:
    radial-gradient(at 13% 78%, hsla(143,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 86% 80%, hsla(67,100%,61%,0.61) 0px, transparent 50%);
	animation: gradient 15s ease infinite;
    
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
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .video-display {
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>