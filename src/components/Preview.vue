<script setup>
import AnswerCapture from '@/assets/background/answer.webp'
</script>

<template>
    <div class="preview-block">
        <img :src="AnswerCapture" class="preview-capture" />
        <div class="preview-text">
            <div class="preview-title">
                校長考試準備的革命
            </div>
            <div class="preview-content">
                人工智慧正在革新教育界，PTest 甄慧考 助考工具在準備校長考試的考生中變得比以往任何時候都更受歡迎。它使用先進的演算法和自然語言處理模型，即時產生精確的答案。結合對豐富的考古題庫和專業解析的訪問，PTest 甄慧考 可以為每個考生提供最高品質的解答，從而簡化考試準備流程。
            </div>
        </div>
    </div>
</template>

<style scoped>
.preview-block {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .preview-capture {
        width: 35rem;
    }
    .preview-text {
        margin-left: 38px;
        width: 35rem;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .preview-title {
            font-size: 3rem;
            font-weight: bold;
        }

        .preview-content {
            color: #5A736E;
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 0.72px;
            line-height: 40px;
        }
    }
}
</style>