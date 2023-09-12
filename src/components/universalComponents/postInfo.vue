<script setup>
const props = defineProps({
  title:String,
  publisher:String,
  date:String,
  description:String,
  img:String,
  color:String,
  showImg:Boolean,
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="md:text-2xl text-xl  text-[#6967CE] font-medium">{{props.title}}</p>
    <div :class="['text-sm flex items-center',color ] ">
      <img class="w-8 h-8 mr-2 rounded-full " v-if="showImg" :src=props.img alt="">
      <p class="border-r pr-1 h-4 flex items-center border-[#407BEC]">{{props.publisher}}</p>
      <p class="md:w-1/4 h-4 pl-1 flex items-center">{{props.date}}</p>
    </div>
    <p class="text-sm text-[#556D9A]">{{props.description}}</p>
  </div>
</template>
