<script setup>
import RightArrowIcon from "@/components/icons/universalIcons/rightArrowIcon.vue";
const props = defineProps({
  text: String,
  arrow: Boolean,
})
</script>
<template>
  <button class="bg-[#FFB902]  px-8 flex py-3  items-center justify-center rounded-3xl  "><span>{{props.text}}</span><RightArrowIcon v-if="props.arrow" class="ml-2" color="black" /></button>
</template>
