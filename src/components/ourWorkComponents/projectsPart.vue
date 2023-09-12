<script setup>
import OurProjects from "@/composables/ourProjects";
const projects = OurProjects()
const {ourProjects} =projects()
</script>
<template>
  <div class="my-10 flex flex-col items-center">
    <div v-for="project in ourProjects" :class='[project.background, "  max-w-screen-lg w-11/12 my-3 md:pt-14 pt-5 rounded-xl flex md:flex-row flex-col "]'>
      <div class="md:w-1/2">
        <img class="w-full h-full	" :src="project.img" alt="">
      </div>
      <div class="md:w-1/2  flex flex-col items-center ">
        <div class="md:w-7/12	w-11/12 pt-5 md:pb-20 pb-10 gap-5 flex flex-col	">
          <p class="text-white  text-4xl">{{project.title}}</p>
          <p class="text-[#EEF8FF] text-lg ">{{project.description}}</p>
          <button class="bg-white w-5/12	 flex py-3.5  items-center justify-center rounded-3xl  ">Visit Site</button>
        </div>
      </div>
    </div>
  </div>
</template>
