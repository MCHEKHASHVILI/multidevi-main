<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import ContactForm from "@/components/universalComponents/contactForm.vue";
</script>

<template>
<main-layout>
  <section class=" bg-[#6967CE] py-16  flex font-[arial] items-center  justify-center">
    <div :class="['flex flex-col max-w-screen-md md:text-start text-center md:items-start items-center  '] ">
      <p class="md:text-5xl text-4xl w-9/12			 text-white font-medium mb-6">Contact Us</p>
      <p class="text-[#BDC8DB] md:w-8/12 w-11/12 	md:text-lg  mb-6">Whether you’re needing help with a new project or just want to pick our
        brain we’re here for you!
      </p>
    </div>
  </section>
  <contact-form/>

</main-layout>
</template>

<style scoped>

</style>