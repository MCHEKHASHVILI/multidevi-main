<script setup>
const props = defineProps({
    whiteText: String,
    orangeText: String,
})
</script>

<template>
  <section class="bg-[#6967CE] py-16 flex md:items-center md:pl-auto pl-5 gap-2 flex-col justify-center">
    <p class="text-white md:text-5xl text-2xl">{{props.whiteText}}</p>
    <p class="text-[#FFB902] md:text-5xl text-3xl underline-offset-8 underline">{{props.orangeText}}</p>
  </section>
</template>