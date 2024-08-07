<script setup>
// import { VideoPlayer } from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'
import { shallowRef } from 'vue'

const player = shallowRef()
  
/*const handleMounted = (payload) => {
    player.value = payload.player
    console.log('Basic player mounted', payload)
}

const handleEvent = (log) => {
    console.log('Basic player event', log)
}*/

</script>

<template>
    <div class="video-block">
        <video width="100%" height="100%" autoplay muted playsinline>
            <source src="https://videos.pexels.com/video-files/854182/854182-hd_1920_1080_25fps.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style scoped>
.video-block {
    /* border: 1px solid gray; */
    width: 100%;
    height: 100%;
}

@media screen and (max-width:1366px) {
    .video-block {
        height: auto;
    }
}
</style>