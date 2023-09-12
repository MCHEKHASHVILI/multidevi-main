<script setup>
import template from "@/composables/template";
const templates = template()
const {advantages} = templates()
</script>
<template>
<section class="bg-[#EEF8FF] py-20 flex flex-col items-center justify-center">
  <div class="max-w-6xl w-11/12 flex gap-10  flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-5">
      <p class="font-semibold md:text-5xl text-2xl text-[#25344F]">Built for <span class="text-[#6967CE]">Speed and SEO</span></p>
      <p class="text-[#25344F] text-center ">Everything you would expect with a website comes standard with us.</p>
    </div>
    <div class="md:grid-cols-2 grid  gap-5 ">
      <div class="p-8 bg-white  rounded-2xl it  flex flex-col gap-3 justify-center" v-for="advantage in advantages">
        <component  :is="advantage.icon" />
        <p class="text-[#25344F] text-2xl font-semibold">{{advantage.title}}</p>
        <p class="text-[#515D72] ">{{advantage.description}}</p>
      </div>
    </div>
  </div>
</section>
</template>
