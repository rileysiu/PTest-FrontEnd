<script setup>
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { shallowRef } from 'vue'

const player = shallowRef()
  
const handleMounted = (payload) => {
    player.value = payload.player
    console.log('Basic player mounted', payload)
}

const handleEvent = (log) => {
    console.log('Basic player event', log)
}

</script>

<template>
    <video-player
        class="video-player vjs-big-play-centered"
        src="https://vjs.zencdn.net/v/oceans.mp4"
        poster="https://vjs.zencdn.net/v/oceans.png"
        crossorigin="anonymous"
        playsinline
        controls
        :volume="0.6"
        :height="700"
        :playback-rates="[0.7, 1.0, 1.5, 2.0]"
        @mounted="handleMounted"
        @ready="handleEvent($event)"
        @play="handleEvent($event)"
        @pause="handleEvent($event)"
        @ended="handleEvent($event)"
        @loadeddata="handleEvent($event)"
        @waiting="handleEvent($event)"
        @playing="handleEvent($event)"
        @canplay="handleEvent($event)"
        @canplaythrough="handleEvent($event)"
        @timeupdate="handleEvent(player?.currentTime())"
    />
</template>

<style scoped>

</style>