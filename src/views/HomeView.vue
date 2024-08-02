<script setup>
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <Hero />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
.el-header {
  --el-header-padding: 0;
  margin-bottom: 20px;
}
</style>
