<script setup>
import Header from "@/components/header&footer/Header.vue";
import Footer from "@/components/header&footer/Footer.vue";
</script>
<template>
  <Header/>
  <main >
    <slot/>
  </main>
  <Footer/>
</template>