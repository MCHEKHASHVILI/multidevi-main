<script setup>
import {shallowRef} from "vue";
import FigmaIcon from "@/components/icons/homePageIcons/technologiesWeUse/figmaIcon.vue";
import WordpressIcon from "@/components/icons/homePageIcons/technologiesWeUse/wordpressIcon.vue";
import WooIcon from "@/components/icons/homePageIcons/technologiesWeUse/wooIcon.vue";
import ShopifyIcon from "@/components/icons/homePageIcons/technologiesWeUse/shopifyIcon.vue";
import VueIcon from "@/components/icons/homePageIcons/technologiesWeUse/vueIcon.vue";
import LaravelIcon from "@/components/icons/homePageIcons/technologiesWeUse/laravelIcon.vue";
const techWeUse = shallowRef([
  FigmaIcon,
  WordpressIcon,
  WooIcon,
  ShopifyIcon,
  VueIcon,
  LaravelIcon
]);
const getIconComponent = (company) => {
  return company;
};
</script>
<template>
  <slot></slot>
    <div class="w-full mb-10">
      <p class="font-semibold mb-9 flex justify-center text-4xl text-[#25344F]">Technologies We Use</p>
      <div class="w-full flex md:justify-center   md:overflow-x-hidden overflow-x-scroll">
        <div class="md:mx-15 mx-10 " v-for="company in techWeUse" >
          <component class="mb-2" :is="getIconComponent(company)" />
        </div>
      </div>
    </div>

</template>
