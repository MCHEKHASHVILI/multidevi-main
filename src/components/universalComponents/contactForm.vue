<script setup>
import contact from "@/composables/contact";
const contacts = contact()
const {contactInputs} = contacts()
</script>

<template>
  <form class="flex items-center my-10 justify-center">
    <div class="bg-white rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  max-w-screen-lg	 w-11/12 flex flex-col md:items-start items-center	md:p-10 p-7 ">
      <p class="text-[#6967CE]  text-sm">READY TO GET STARTED?</p>
      <p class="text-[#25344F] text-3xl font-medium mb-5">Let’s Grow Together.</p>
      <div class="flex items-center w-full flex-col md:gap-3 justify-center">
        <div class="md:grid grid-cols-2 w-full gap-3 ">
          <input class="bg-[#F4F8FB] px-3 py-3  md:mb-0 mb-3	w-full outline-none	  rounded-lg" v-for="input in contactInputs" :placeholder="input.name" :required="input.required" :type=input.type>
        </div>
        <textarea class="bg-[#F4F8FB] resize-none px-3  py-3 w-full md:mb-0 mb-3 outline-none md:h-80 h-56 	rounded-lg" ></textarea>
        <button class="bg-[#FFB902] w-full  flex py-3.5  items-center justify-center rounded-3xl  "><span class="mr-2">Submit</span></button>
      </div>
    </div>
  </form>
</template>
