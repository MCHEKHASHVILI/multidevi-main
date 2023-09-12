<script setup>
import RecentProjects from "@/components/universalComponents/recentProjects.vue";
import RecentPosts from "@/components/homePageComponents/recentPosts.vue";
import YellowButton from "@/components/universalComponents/buttons/yellowButton.vue";
</script>
<template>
  <RecentProjects/>
  <recent-posts>
    <div class="bg-[#6967CE] md:px-52 flex flex-col items-center justify-center rounded-3xl md:py-14 py-10">
      <div class=" md:w-2/3	 w-10/12 mb-8 text-center">
        <p class="text-white font-medium md:text-4xl text-2xl mb-3 ">Want to see if Icepick is the right fit for you?</p>
        <p class="text-[#97A5BF] text-lg">Give us a shout and let’s see if we’re the right match for you and your business!</p>
      </div>
        <a href="/contact-us"><YellowButton text="Let's Talk" arrow/></a>
    </div>
  </recent-posts>

</template>
