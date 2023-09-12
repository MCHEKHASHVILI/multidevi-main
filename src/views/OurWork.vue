<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import IntroComponent from "../components/universalComponents/IntroComponent.vue"
import ProjectsPart from "@/components/ourWorkComponents/projectsPart.vue";
import FooterIntro from "@/components/universalComponents/footerIntro.vue";
</script>

<template>
<main-layout>
  <intro-component text-align="text-center" items-align="items-center" title="Our Work" description="We take pride in the work we do and love helping businesses succeed online.">
  </intro-component>
  <projects-part/>
  <footer-intro whiteText="Ready to work with us?" orangeText="Let's build something awesome."/>
</main-layout>
</template>

<style scoped>

</style>