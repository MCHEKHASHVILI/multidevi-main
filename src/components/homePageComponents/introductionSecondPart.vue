<script setup>
import SearchEnglineIcon from "@/components/icons/homePageIcons/aboutUsIcons/searchEnglineIcon.vue";
import CustomWebsitesIcon from "@/components/icons/homePageIcons/aboutUsIcons/customWebsitesIcon.vue";
import TransparentButton from "@/components/universalComponents/buttons/transparentButton.vue";
import TechWeUse from "@/components/universalComponents/techWeUse.vue";
</script>
<template>
  <div class="flex flex-col items-center  max-w-screen-lg	justify-center">
    <div class="flex flex-col items-center px-5 justify-center" >
      <div class=" flex flex-col md:w-10/12	  mb-16 items-center justify-center gap-7">
        <p class="font-semibold md:w-3/5 w-11/12 text-[#25344F]	 text-center md:text-4xl text-2xl">Your Dedicated Web Design & Development Team</p>
        <p class="text-center md:w-3/5 text-[#52627A] ">We are small team of experts that have been building on the internet for over a decade. We are passionate about helping businesses thrive online and creating user-focused websites that drive real results.</p>
      </div>
      <div class="bg-[#6967CE] rounded-3xl py-14">
          <div class="flex md:flex-row items-center   flex-col justify-center">
              <div class="flex flex-col items-center mb-10 gap-4 md:w-1/2 w-11/12 justify-center">
                  <custom-websites-icon/>
                  <p class="text-white text-xl font-medium">Custom Websites</p>
                  <p class="text-white text-center opacity-70 md:w-3/5	">Whether you’re looking to build a custom marketing website or the next Twitter we can help you build it.</p>
                  <a href="/custom-websites"><transparent-button text="Learn More" arrow/></a>
              </div>
              <div class="bg-white md:flex hidden w-px h-56 opacity-20"></div>
              <div class="flex flex-col items-center mb-10 gap-4 md:w-1/2 w-11/12 justify-center">
                  <search-engline-icon/>
                  <p class="text-white text-xl font-medium">Search Engine Optimization</p>
                  <p class="text-white text-center opacity-70 md:w-3/5	">You’ve got yourself a beautiful website but now you need your customers to find it, let us help you.</p>
                <a href="/custom-websites"><transparent-button text="Learn More" arrow/></a>
              </div>
          </div>
      </div>
    </div>
  </div>
  <TechWeUse/>
</template>
