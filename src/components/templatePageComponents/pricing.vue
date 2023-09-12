<script setup>
import template from "@/composables/template";
const templates = template()
const {prices} = templates()
</script>
<template>
<section class="flex items-center py-20 justify-center">
  <div class="flex  max-w-screen-xl flex-col  gap-8 items-center text-[#25344F] justify-center">
    <div class="text-center flex items-center justify-center flex-col gap-5">
      <p class="md:text-5xl text-2xl font-semibold">Simple and <span class="text-[#6967CE]">Affordable</span> Pricing</p>
      <p class="md:w-full w-11/12	 md:text-lg	text-xl		">We can get your website up and running for as little as $500.</p>
    </div>
    <div class="flex md:flex-row flex-col gap-10">
      <div :class="[' py-7  rounded-xl shadow-2xl', (index%2===0) ? 'bg-white text-[#515D72]': 'bg-[#25344F] text-[#D4E4F7] ']" v-for="(price,index ) in prices">
          <div class="px-12 flex flex-col gap-2 mb-2">
            <p >{{price.type}}</p>
            <p :class="['text-2xl ', (index%2===0) ? 'text-black': 'text-white']">{{price.currency}}<span>{{price.price}}</span> <span :class="['text-sm', (index%2===0) ? 'text-[#515D72]': 'text-[#F0F0F0]']">{{price.duration}}</span></p>
          </div>
        <ul class="list-inside list-disc w-full">
          <li :class="['py-2 px-12 w-full',  (index === 0) ? 'marker:text-[#1AA2EF]' : ((index === 1) ? 'marker:text-[#5CE5DE] text-white text-opacity-70' : 'marker:text-[#FFB201]'), (index === 0 && ind ===0) ? 'bg-[#EBF6FF]' : (index === 1&& ind === 0) ? 'bg-[#214863]' : (index === 2&& ind === 0) ? 'bg-[#FFF7E6]' : '' ]" v-for="(advantage, ind) in price.advantages">{{advantage}}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>
