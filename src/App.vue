<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import UploadFileBar from '@/components/UploadFileBar.vue';

</script>

<template>
  <div class="wrapper">
    <HomeView />
  </div>
  <UploadFileBar class="upload-bar"/>
</template>

<style scoped>
.wrapper {
  min-width: 100%;
  background-attachment: fixed;
  background-color:hsla(101,0%,100%,1);
  background-image:
  radial-gradient(at 13% 78%, hsla(143,100%,76%,1) 0px, transparent 50%),
  radial-gradient(at 86% 80%, hsla(67,100%,61%,0.61) 0px, transparent 50%);
}

.upload-bar {
  display: none;
  /* display: block; */
  position: fixed;
  bottom: 0;
  height: 150px;
  width: 100%;
}

@media screen and (max-width:1410px) {
  .upload-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 150px;
    width: 100%;
  }
}
/*header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
