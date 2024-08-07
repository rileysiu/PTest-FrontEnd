<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogoUrl from '@/assets/logo/logo.svg'
import MenuIcon from '@/assets/icons/menu.svg'
import CreditIcon from '@/assets/icons/credit.svg'
import LogInIcon from '@/assets/icons/login.svg'
import RegisterIcon from '@/assets/icons/register.svg'

import { ref } from "vue";

const logoIcon = ref(LogoUrl)

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
                <img class="menu-icon" :src="MenuIcon" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <RouterLink to="/" id="nav-button-credit">
                                <img class="mobile-dropdown-icon":src="CreditIcon">
                                <div class="mobile-dropdown-text">儲值</div>
                            </RouterLink>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <RouterLink to="/" id="nav-button-login">
                                <img class="mobile-dropdown-icon":src="LogInIcon">
                                <div class="mobile-dropdown-text">登入</div>
                            </RouterLink>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <RouterLink to="/" id="nav-button-register">
                                <img class="mobile-dropdown-icon":src="RegisterIcon">
                                <div class="mobile-dropdown-text">加入PTest</div>
                            </RouterLink>
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

@media screen and (max-width:1366px) {
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
            justify-content: flex-end;
            /* margin-right: 20px; */
            padding-top: 5px;

            .menu-icon {
                width: 50px;
            }
        }
    }

    #nav-button-credit, #nav-button-login {
        text-decoration: none;
        color: black;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50px;

        .mobile-dropdown-icon {
            margin-left: 10px;
            width: 24px;
        }
        .mobile-dropdown-text {
            font-size: 1.2rem;
            margin-left: 15px;
        }
    }

    #nav-button-register {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        text-decoration: none;
        background-color: #081B17;
        color: #F2F2F7;
        padding: 0 20px;
        border-radius: 1rem;

        .mobile-dropdown-icon {
            width: 20px;
        }

        .mobile-dropdown-text {
            font-size: 1.2rem;
            margin-left: 10px;
            
        }
    }
}
</style>