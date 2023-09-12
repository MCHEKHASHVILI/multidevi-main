<script setup>

import TimeIcon from "@/components/icons/templatePageIcons/timeIcon.vue";
import MoneyIcon from "@/components/icons/templatePageIcons/moneyIcon.vue";
</script>

<template>
  <section class="flex py-20 gap-8 flex-col items-center justify-center">
    <div class=" max-w-screen-lg 	flex flex-col items-center justify-center gap-7">
      <div class=" flex flex-col gap-5 md:w-1/2	 items-center justify-center">
        <p class="md:text-5xl text-2xl  text-[#25344F] font-semibold">Why Use <span class="text-[#6967CE]">Templates?</span></p>
        <p class="text-center w-11/12  text-[#212529]	">We’re glad you asked! There’s two main benefits to going with
          templates versus a custom website:</p>
      </div>

      <div class="md:w-full w-11/12">
        <div class="flex gap-7 w-full md:flex-row flex-col items-center md:px-10 justify-center">
          <div class="bg-[#FFF8EB] md:w-1/2   flex flex-col gap-4 rounded-2xl p-9">
            <time-icon/>
            <p class="text-[#25344F] font-semibold text-3xl">Time</p>
            <p class="text-[#515D72]">Since we have a starting point we’re able to build quickly and efficiently.</p>
          </div>
          <div class="bg-[#EBFEFE] md:w-1/2 flex flex-col gap-4 rounded-2xl p-9">
            <money-icon/>
            <p class="text-[#25344F] font-semibold text-3xl">Money</p>
            <p class="text-[#515D72]">Our base templates are already built and we just
              need to reskin it to match your brand.</p>
          </div>
        </div>
      </div>
      <div class="md:w-full w-11/12 flex flex-col items-center justify-center gap-10">
        <p class="text-[#212529] md:w-1/2		   text-center">If your company doesn’t need a flashy or totally unique website this is usually the best way to go.</p>
        <img class="rounded-2xl" src="../../assets/images/templateExample.png" alt="">
      </div>
    </div>
  </section>
</template>
