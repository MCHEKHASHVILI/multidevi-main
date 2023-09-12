<script setup>
import Rating from "@/components/icons/homePageIcons/rating.vue";

const props = defineProps({
  title:String,
  description: String,
  rating:Boolean
})
</script>
<template>

  <section class=" bg-[#6967CE] w-full py-16 flex-col flex font-[arial] items-center  justify-center">
    <Rating v-if="rating" class="mb-10"/>
    <div :class="['flex flex-col  max-w-screen-md items-center text-center'] ">
      <p class="md:text-5xl text-4xl md:w-full w-11/12  text-white font-bold mb-6">{{props.title}}</p>
      <p v-if="description" class="text-[#BDC8DB] md:w-4/5 w-11/12 	md:text-xl  mb-6">{{props.description}}</p>
    </div>
    <slot></slot>
  </section>
</template>