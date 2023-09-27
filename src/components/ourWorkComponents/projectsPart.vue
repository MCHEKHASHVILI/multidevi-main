<script setup>
import { onMounted } from "vue";
import useProjects from "@/composables/useProjects";
const { projects, lastProjects, getProjects } = useProjects()

onMounted(() => getProjects())
</script>
<template>
  <div class="my-10 flex flex-col items-center">
    <div v-for="project in projects" :class="[ project?.background, 'bg-gradient-to-b from-[#292929] to-[#000000]',
      'max-w-screen-lg w-11/12 my-3 md:pt-14 pt-5 rounded-xl flex md:flex-row flex-col', (project?.avatar) ? '' : 'hidden' ]">
      <div class="md:w-1/2">
        <img class="w-full h-full	" :src="project.avatar" alt="">
      </div>
      <div class="md:w-1/2  flex flex-col items-center ">
        <div class="md:w-7/12	w-11/12 pt-5 md:pb-20 pb-10 gap-5 flex flex-col	">
          <p class="text-white  text-4xl">{{project.title}}</p>
          <p class="text-[#EEF8FF] text-lg ">{{project.description}}</p>
          <a :href="project.url" target="_blank" class="bg-white w-5/12	 flex py-3.5  items-center justify-center rounded-3xl">Visit Site</a>
        </div>
      </div>
    </div>
  </div>
</template>
