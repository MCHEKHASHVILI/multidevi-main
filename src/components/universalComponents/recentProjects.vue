<script setup>
import { onMounted } from "vue";
import useProjects from "@/composables/useProjects";
import TransparentButton from "@/components/universalComponents/buttons/transparentButton.vue"
const { lastProjects, getProjects } = useProjects()
onMounted(()=> getProjects())
</script>
<template>
  <section class="bg-[#6967CE] py-16 items-center justify-center flex flex-col ">
    <p class="text-white font-medium mb-10 text-4xl">Recent Projects</p>
    <div class="grid md:grid-cols-2 md:w-1/2	md:px-0 px-4   mb-14 gap-4 ">
      <div  v-for="(image, index) in lastProjects" :key="index" :class="[
          image?.background,
          'flex px-7 pt-7 w-full items-end rounded-lg justify-center',
          'bg-gradient-to-b from-[#292929] to-[#000000]'
          ]">
        <img class="col-span-1 rounded-xl w-full rounded-b-none	h-full" :src="image.avatar" alt="">
      </div>
    </div>
      <a href="/our-work">
        <transparent-button text="View All Projects" arrow />
      </a>
  </section>
</template>