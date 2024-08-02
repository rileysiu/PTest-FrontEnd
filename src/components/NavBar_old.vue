<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logoUrl from '@/assets/logo/logo.svg'

import { ref } from "vue";

const logoIcon = ref(logoUrl)

</script>

<template>
    <div class="wrapper">
        <div class="title">
            <img :src="logoIcon" />
            <div class="title-text">PTest 甄慧考</div>
        </div>
        <div class="nav-button">
            <v-btn rounded="xl" size="x-large" variant="text" class="mx-2">
                <RouterLink to="/" class="nav-button-credit">儲值</RouterLink>
            </v-btn>
            <v-btn rounded="xl" size="x-large" class="mx-2">
                <RouterLink to="/" class="nav-button-home">登入</RouterLink>
            </v-btn>
            <v-btn rounded="xl" size="x-large" class="bg-teal-accent-4 text-none mx-2">
                <RouterLink to="/" class="nav-button-register ">加入PTest</RouterLink>
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    max-width: 100vw;
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.10);
    padding: 30px 60px;


    .title {
        width: 100%;
        padding-left: 15%;
        display: flex;
        justify-content: center;

        .title-text {
            font-size: 32px;
            font-weight: 600;
            margin-left: 15px;
        }
    }

    .nav-button {
        display: flex;
        justify-content: space-between;

        .nav-button-credit {
            text-decoration: none;
            color: black;
            font-weight: 600;
        }

        .nav-button-home {
            text-decoration: none;
            color: black;
            font-weight: 600;
        }

        .nav-button-register {
            font-weight: 600;
            text-decoration: none;
            color: white;
        }
    }
}
@media screen and (max-width:960px) {
    .wrapper {
        padding: 30px 10px;

        .title {
            padding-left: 0
        }
    }
}
</style>