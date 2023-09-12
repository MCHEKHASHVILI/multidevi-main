<script setup>
import {shallowRef} from "vue";
import aegisIcon from "../../components/icons/homePageIcons/support_companies/aegisLivingIcon.vue";
import IntroductionSecondPart from "@/components/homePageComponents/introductionSecondPart.vue";
import IntroComponent from "../universalComponents/IntroComponent.vue"
import TransparentButton from "@/components/universalComponents/buttons/transparentButton.vue";
import YellowButton from "@/components/universalComponents/buttons/yellowButton.vue";
const supportCompanies = shallowRef([
  aegisIcon,
  aegisIcon,
  aegisIcon,
  aegisIcon,
  aegisIcon,
]);
const getIconComponent = (company) => {
  return company;
};
</script>

<template>
  <div class="flex flex-col gap-24 justify-center items-center">
    <IntroComponent rating text-align="text-center" items-align="items-center" title="We Design & Develop Websites
That Deliver Results" description="Our goal is to develop simple and modern websites that are
optimized for both search engines and user experience, ultimately
driving more traffic and revenue to your business.">
      <div class="flex gap-5 w-full mt-5 mb-20 justify-center  ">
        <a href="/contact-us"><yellow-button class="h-full"  text="Book a Call" arrow/></a>
        <a href="/our-work"><transparent-button text="Our Work" arrow/></a>
      </div>
      <div class="md:w-1/2 w-full  text-center gap-36 h-full flex items-center justify-between  flex-col ">
        <div class="w-11/12">
          <div class="flex w-full items-center mb-10 ">
            <hr class="bg-white md:flex hidden opacity-30 w-1/2">
            <p class="md:mx-6 w-full  text-white">Trusted by Innovative Companies Worldwide</p>
            <hr class="bg-white md:flex hidden opacity-30 w-1/2">
          </div>
          <div class="w-full flex items-center md:justify-center md:overflow-x-auto overflow-x-scroll">
            <div v-for="company in supportCompanies" >
              <component  class="md:w-full mb-2"  :is="getIconComponent(company)" />
            </div>
          </div>
        </div>
      </div>
    </IntroComponent>
<IntroductionSecondPart/>
  </div>
</template>
