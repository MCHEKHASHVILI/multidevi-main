<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import post from "@/composables/posts";
import {useRoute} from "vue-router";
import PostInfo from "@/components/universalComponents/postInfo.vue";
import FooterIntro from "@/components/universalComponents/footerIntro.vue";
const postebi = post()

const {posts} = postebi()
const route = useRoute()

</script>

<template>
<main-layout>
  <div class=" bg-[#EEF8FF] h-screen flex flex-col items-center ">
    <div class="md:w-5/12 w-11/12 flex flex-col gap-5 py-16">
      <post-info show-img img="https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg" color="text-[#6967CE]" :title=posts[route.params.id].title :publisher="posts[route.params.id].publisher" :date="posts[route.params.id].date" :description="posts[route.params.id].description"/>
      <img class="w-full	" :src="posts[route.params.id].img" alt="">
      <p>{{posts[route.params.id].innerText}}</p>
    </div>
  </div>
  <FooterIntro orange-text="Contact Us Today!" white-text="Ready to work with us?"/>

</main-layout>
</template>
