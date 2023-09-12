<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import TransparentButton from "@/components/universalComponents/buttons/transparentButton.vue";
import YellowButton from "@/components/universalComponents/buttons/yellowButton.vue";
import TechWeUse from "@/components/universalComponents/techWeUse.vue";
import SplidePart from "@/components/homePageComponents/splidePart.vue";
import RecentProjects from "@/components/universalComponents/recentProjects.vue";
import ContactForm from "@/components/universalComponents/contactForm.vue";
</script>
<template>
<main-layout>
  <section class=" bg-[#6967CE] py-16  flex font-[arial] items-center relative flex-col  justify-center">
    <div :class="['flex flex-col max-w-screen-md md:text-start  text-center md:items-start items-center'] ">
      <p class="md:text-5xl text-4xl w-9/12			 text-white font-medium mb-6"><span class="text-[#FFB902]">Custom </span><span>Website</span></p>
      <p class="text-[#BDC8DB] md:w-3/5	 w-11/12 	md:text-lg  mb-6"> Whether you’re looking to build a custom marketing website or
        the next Twitter we can help you build anything you’re
        envisioning.
      </p>
      <transparent-button text="Get In Touch"/>
      <img class="absolute md:flex hidden w-3/12		 h-full right-0 top-0" src="../assets/images/customWebsites.png" alt="">
    </div>
  </section>
  <tech-we-use>
    <div class="flex mb-10 md:flex-row flex-col">
      <div class="md:w-1/2 pt-28 md:mb-0 mb-5 md:px-8 px-5">
        <div class="mb-5 w-11/12">
          <p class="text-[#25344F] font-semibold mb-5 text-4xl">Custom Websites Set You Apart</p>
          <p class="text-[#52627A]  mb-5">In a world where attention spans are decreasing by the day you need to stand out from the crowd.
            One way to do that is by creating a custom website that is unique to you and your brand.</p>
          <p class="text-[#52627A]">Having a custom website means you’re getting a fully built website from scratch which includes a
            design and development process from the ground up.</p>
        </div>
        <div class="flex text-[#52627A] flex-col w-2/5			 mb-8 md:w-1/3	">
          <p class=" mb-5">This comes with many benefits including:</p>
          <div class="w-full  md:pl-9  flex flex-col">
            <p>Unique Design</p>
            <p>Structured Around Your Content</p>
            <p>More Credibility</p>
            <p>Faster Page Speeds</p>
          </div>
        </div>
        <YellowButton class="w-52" arrow text="Work With Us"/>
      </div>
      <div class="md:w-1/2 md:h-[700px] 	">
        <img class="w-full  h-full" src="../assets/images/computer.png" alt="">
      </div>
    </div>
  </tech-we-use>
  <SplidePart/>
  <RecentProjects/>
  <ContactForm class="my-16"/>

</main-layout>
</template>