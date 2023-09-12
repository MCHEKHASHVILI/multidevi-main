<script setup>
import template from "@/composables/template";
import RightArrowIcon from "@/components/icons/universalIcons/rightArrowIcon.vue";
const templates = template()
const {favTemplateProjects} = templates()
</script>
<template>
  <section class="bg-[#EEF8FF] items-center justify-center flex py-10">
    <div class="flex flex-col items-center max-w-screen-lg w-11/12 gap-10 justify-center">
      <p class="text-[#25344F] md:text-5xl text-2xl text-center font-semibold">A Few of Our <span class="text-[#6967CE]">Template Projects</span></p>
      <div class="flex md:flex-row flex-col gap-10">
        <div v-for="project in favTemplateProjects" class="flex bg-white  flex-col rounded-2xl">
          <img class="h-5/6 rounded-t-2xl" :src="project.img" alt="">
          <div class="flex h-full	 items-center md:p-0 p-5 justify-around">
            <p class="text-[#515D72]">{{project.name}}</p>
            <a :href="project.link" class="text-[#23A6F0]   flex items-center">View Website <span class="ml-2"><RightArrowIcon color="#23A6F0"/></span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
