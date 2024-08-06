<script setup>

</script>

<template>
    <div class="start-block">
        <div class="start-background">
            <div class="start-title">考試成功從這裡開始</div>
            <div class="start-subtitle">準備好利用PTest 甄慧考 提升您的考試成功率了嗎?</div>
            <el-button class="start-btn">
                開始免費解題<el-icon class="el-icon--right"><Right /></el-icon>
            </el-button>
        </div>
    </div>
</template>

<style scoped>
.start-block {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .start-background {
        width: 60%;
        height: 500px;
        border-radius: 2rem;
        background-color: #b2e8db6b;
        background-image: url(../assets/background/dotGrid.svg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .start-title {
            width: 100%;
            font-size: 5rem;
            font-weight: bold;
            text-align: center;
            color: #081B17;
        }
    
        .start-subtitle {
            font-size: 1.55rem;
            font-weight: 400;
            letter-spacing: 0.0525rem;
            color: #081B17;
        }

        .start-btn {
            margin-top: 100px;
            width: 300px;
            height: 80px;
            color: white;
            font-size: 1.75rem;
            border-radius: 6.25rem;
            background-color: #42B8A5;

            .el-icon--right {
                font-size: 2.25rem;
                margin-left: 15px;
            }
        }
    }

}

@media screen and (max-width:1280px) {
    .start-block {
        .start-background {
            .start-title {
                font-size: 3rem;

            }
        }
    }
}

@media screen and (max-width:960px) {
    .start-block {
        .start-background {
            width: 90%;
            .start-title {
                font-size: 2rem;
            }
            .start-subtitle {
                font-size: 1rem;
                margin: 0 50px;
                text-align: center;
            }
        }
    }
}
</style>