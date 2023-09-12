<script setup>
import mainLayout from "../layouts/mainLayout.vue"
import IntroductionPart from "@/components/homePageComponents/introductionPart.vue";
import SplidePart from "@/components/homePageComponents/splidePart.vue";
import LastPart from "@/components/homePageComponents/lastPart.vue";
</script>
<template>
  <mainLayout>
    <introduction-part/>
    <splide-part/>
    <last-part/>

  </mainLayout>
</template>
