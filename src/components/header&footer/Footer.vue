<script setup>
import MultidevIcon from "@/components/icons/universalIcons/multidevIcon.vue";
import FacebookIcon from "@/components/icons/socialMediaIcons/facebookIcon.vue";
import InstagramIcon from "@/components/icons/socialMediaIcons/instagramIcon.vue";
import TwitterIcon from "@/components/icons/socialMediaIcons/twitterIcon.vue";
import {shallowRef} from "vue";
import UseNavigation from "@/composables/useNavigation";
const {footerLearnMore,footerContact} = UseNavigation()
const socialMediaIcons = shallowRef([
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
])
const getIconComponent = (company) => {
  return company;
};
</script>
<template>
  <footer class="bg-[#0B0B0B] text-[#EEF8FF] items-center   md:pt-20 pt-10   flex-col flex">
    <div class="max-w-6xl text-sm md:text-base w-11/12" >
      <div class="flex  justify-between md:mb-20 mb-10 md:flex-row flex-col  ">
        <div class="gap-5 mb-5  flex flex-col ">
          <MultidevIcon/>
          <p class="md:w-2/4 ">We help businesses generate more revenue through strategic web design and SEO services.</p>
          <p>Follow Us</p>
          <div class="flex">
            <component class="mr-5 cursor-pointer" v-for="icon in socialMediaIcons" :key="icon" :is="getIconComponent(icon)" />
          </div>
        </div>
        <div class="flex md:gap-10">
          <ul class="grid gap-3">
            <p class="text-white">Learn More</p>
            <li v-for="component in footerLearnMore" class="cursor-pointer">{{component.name}}</li>
          </ul>
          <ul class="grid gap-3 w-8/12">
            <p class="text-white">Locations</p>
            <li v-for="component in footerContact" class="cursor-pointer">{{component.name}}</li>
          </ul>
        </div>
      </div>
      <div class="border-t opacity-80   py-6 md:items-center">
          <div class="flex md:flex-row flex-col-reverse justify-between md:w-full gap-7 w-8/12 ">
            <p >© 2023 - Icepick Development, LLC</p>
            <div class="flex justify-between ">
              <p class="mr-4 cursor-pointer">Privacy Policy</p>
              <p class="cursor-pointer">Sitemap</p>
            </div>
          </div>
      </div>
    </div>
  </footer>
</template>
