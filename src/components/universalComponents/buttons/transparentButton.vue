<script setup>

import RightArrowIcon from "@/components/icons/universalIcons/rightArrowIcon.vue";

const props = defineProps({
  text: String,
  arrow: Boolean,
})


</script>

<template>
  <button class="bg-transparent  border border-white border-opacity-30 px-8 flex items-center text-white justify-center rounded-3xl py-3.5 "><span >{{props.text}}</span><right-arrow-icon class="ml-2" v-if="props.arrow" color="white"/></button>
</template>

<style scoped>

</style>