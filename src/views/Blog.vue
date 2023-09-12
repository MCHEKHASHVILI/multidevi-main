<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import PostInfo from "@/components/universalComponents/postInfo.vue";
import IntroComponent from "@/components/universalComponents/IntroComponent.vue";
import posted from "@/composables/posts";
import YellowButton from "../components/universalComponents/buttons/yellowButton.vue";
import FooterIntro from "../components/universalComponents/footerIntro.vue";
const post = posted()
const {posts} = post()
</script>
<template>
  <main-layout>
    <intro-component title="Blog"/>
  <div class="flex items-center justify-center">
    <div class="grid-cols-2 md:grid max-w-screen-lg w-11/12 gap-5 py-20 ">
      <div class="flex flex-col md:mb-0 mb-5 gap-5" v-for="post in [...posts].reverse()">
        <img class="h-1/2 w-full" :src="post.img" alt="">
        <div class=" flex flex-col   gap-3">
          <div class="w-10/12">
            <post-info color="text-[#407BEC]" :title=post.title :publisher="post.publisher" :date="post.date" :description="post.description"/>
          </div>
            <a :href='"/blog/"+post.id' ><YellowButton  class="md:w-1/3 w-2/5" text="Read Post"/></a>
        </div>
      </div>
    </div>
  </div>
      <footer-intro white-text="Ready to work with us?" orange-text="Let's build something awesome."/>
  </main-layout>
</template>
