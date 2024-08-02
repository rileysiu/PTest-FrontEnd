<script setup>
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import Feature from '@/components/Feature.vue';
import Preview from '@/components/Preview.vue';
import Step from '@/components/Step.vue';

import backToTopIcon from '@/assets/icons/backToTop.svg'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <Hero />
      <back-to-top visibleoffset="500">
        <img :src="backToTopIcon" />
      </back-to-top>
      <Feature />
      <Preview/>
      <Step />
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
.el-header {
  --el-header-padding: 0;
  margin-bottom: 20px;
}

.el-main {
  --el-main-padding: 20px 0;
}

</style>
