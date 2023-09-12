<script setup>
import WhyUseTemplates from "@/components/templatePageComponents/whyUseTemplates.vue";
import MainLayout from "@/layouts/mainLayout.vue";
import TransparentButton from "@/components/universalComponents/buttons/transparentButton.vue";
import AdvantagesComponent from "@/components/templatePageComponents/advantagesComponent.vue";
import Pricing from "@/components/templatePageComponents/pricing.vue";
import ThreeTemplates from "@/components/templatePageComponents/threeTemplates.vue";
import FAQ from "@/components/templatePageComponents/FAQ.vue";
import ContactForm from "@/components/universalComponents/contactForm.vue";
</script>
<template>
  <main-layout>
    <section class=" bg-[#6967CE] py-16  flex font-[arial] items-center  justify-center">
      <div :class="['flex flex-col  max-w-screen-md md:text-start text-center md:items-start items-center  '] ">
        <p class="md:text-5xl text-4xl w-9/12			 text-white font-medium mb-6"><span>Templated Websites For </span><span class="text-[#FFB902]">Small Businesses</span></p>
        <p class="text-[#BDC8DB] md:w-8/12 w-11/12 	md:text-lg  mb-6">If your business doesn’t need a custom website you can utilize our templates and get it up and running in 2-3 weeks!
        </p>
        <transparent-button class="md:flex hidden" text="Get in Touch"/>
      </div>
    </section>
    <why-use-templates/>
    <AdvantagesComponent/>
    <pricing/>
    <three-templates/>
    <FAQ/>
    <ContactForm/>
  </main-layout>

</template>
