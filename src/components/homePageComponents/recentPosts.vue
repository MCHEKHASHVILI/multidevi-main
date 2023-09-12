<script setup>
import Posts from "@/composables/posts";
const post = Posts()
const {lastThreePosts} = post()
import RightArrowIcon from "@/components/icons/universalIcons/rightArrowIcon.vue";
</script>

<template>
  <section class="flex px-5 flex-col mb-10  items-center justify-center">
  <div class="max-w-screen-lg w-full	">
    <div class="flex items-center mb-24 justify-center flex-col">
      <p class="py-12 text-[#25344F] font-medium  text-4xl ">Recent Posts</p>
      <div class="flex md:flex-row flex-col items-center justify-center mb-10">
        <div class="md:w-1/3 w-full  md:h-48 mb-16  mx-3 "  v-for="(post, index) in [...lastThreePosts].reverse()">
          <img :class="['rounded-2xl mb-2 w-full   h-44', (index===0) ? 'md:h-full ' : 'md:h-5/6']" :src="post.img" alt="">
          <p class="w-full font-medium text-lg mb-1  text-[#25344F]">{{post.title}}</p>
          <router-link :to="'/blog/'+post.id" class="text-[#23A6F0] flex opacity-80 items-center text "><span class="mr-1.5">Read More</span> <RightArrowIcon color="#23A6F0"/> </router-link>
        </div>
      </div>
        <a href="/blog"><button class="bg-transparent border border-black border-opacity-30 px-8 flex items-center text-black justify-center rounded-3xl py-3.5 "><span class="mr-2">View All Posts</span><right-arrow-icon color="black"/></button></a>
    </div>
  <slot></slot>
  </div>
  </section>
</template>
>