<script setup>
import { reactive } from "vue";
// import { loadFull } from "tsparticles"; // loads tsparticles
// import { Engine } from 'tsparticles-engine'

// const particlesInit = async (engine) => {
//   await loadFull(engine);
// };

// const particlesLoaded = async container => {
//     console.log("Particles container loaded", container);
// };



const options = reactive({
    background: {
        color: "#FFF", // this sets a background color for the canvas
    },
    fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
    },
    particles: {
        links: {
            distance: 200, // maximum distance for linking the particles
            enable: true, // enabling this will make the particles linked together
        },
        move: {
            enable: true, // enabling this will make particles move in the canvas
            speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
        },
        number: {
            value: 100,
        },
        opacity: {
            value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
            value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
    }
})
</script>


<template>
    <Particles
      id="tsparticles"
      :options="options"
    />
</template>