<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logoUrl from '@/assets/logo/logo.svg'
import menuIcon from '@/assets/icons/menu.svg'

import { ref } from "vue";

const logoIcon = ref(logoUrl)

</script>

<template>
    <el-row class="nav-row" justify="space-between">
        <el-col :span="1" class="title-empty"></el-col>
        <el-col :span="15" class="title-col">
            <div class="">
                <img :src="logoIcon" />
            </div>
            <div class="title-text">
                PTest 甄慧考
            </div>
        </el-col>
        <el-col :span="2" class="btn-col-desktop">
            <el-button round size="large" class="btn-creadit" link>儲值</el-button>
            <el-button round size="large" class="btn-login">登入</el-button>
            <el-button round size="large" class="btn-register">加入PTest</el-button>
        </el-col>
        <el-col :span="2" class="btn-col-mobile">
            <el-dropdown trigger="click">
                <img :src="menuIcon" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <RouterLink to="/" id="nav-button-credit">儲值</RouterLink>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <RouterLink to="/" id="nav-button-login">登入</RouterLink>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <RouterLink to="/" id="nav-button-register">加入PTest</RouterLink>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<style scoped>
.nav-row {
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 10px;
    padding: 20px;
    .title-col {
        display: flex;
        justify-content: center;

        .title-text {
            font-size: 32px;
            font-weight: 600;
            margin-left: 15px;
        }
    }

    .btn-col-desktop {
        padding-top: 0.5rem;
        display: flex;
        justify-content: end;
        
        .btn-creadit {
            color: black;
            font-size: large;
            padding-top: 5px;
        }

        .btn-register {
            background-color: #42B8A5;
            color: white;
            font-size: large;
            padding: 20px;
        }

        .btn-login {
            font-size: large;
            padding: 20px;
        }
    }

    .btn-col-mobile {
        display: none;
    }
}

@media screen and (max-width:960px) {
    .nav-row {
        .title-empty {
            display: none;
        }
        .title-col {
            min-width: 250px;
            justify-content: start;
        }
        .btn-col-desktop {
            display: none; 
        }
        .btn-col-mobile {
            display: flex;
            margin-right: 20px;
            padding-top: 5px;
        }
    }

    #nav-button-credit, #nav-button-login, #nav-button-register {
        text-decoration: none;
        color: black;
    }
}
</style>