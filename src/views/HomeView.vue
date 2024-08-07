<script setup>
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import Feature from '@/components/Feature.vue';
import Preview from '@/components/Preview.vue';
import Step from '@/components/Step.vue';

import backToTopIcon from '@/assets/icons/backToTop.svg'
import Comment from '@/components/Comment.vue';
import QA from '@/components/QA.vue';
import Start from '@/components/Start.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  
  <back-to-top visibleoffset="500" bottom="150px" right="2rem">
    <img class="back-top-icon" :src="backToTopIcon" />
  </back-to-top>
  <!-- <el-container> -->
  <el-header>
    <NavBar />
  </el-header>
  <Hero />
  <Feature />
  <Preview />
  <Step />
  <Comment />
  <QA />
  <Start />
  <el-footer>
    <Footer />
  </el-footer>
  <!-- </el-container> -->
</template>

<style>
.el-header {
  min-width: 100%;
  --el-header-padding: 0;
  margin-bottom: 20px;
}

.el-footer {
  --el-footer-padding: 0;
}

@media screen and (max-width: 658px) {
  .back-top-icon {
    width: 55px;
  }
}

</style>
