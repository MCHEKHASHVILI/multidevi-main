<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import ClientFeedbacks from "@/composables/clientFeedbacks";
import RightArrowIcon from "@/components/icons/universalIcons/rightArrowIcon.vue";
const feedbacks = ClientFeedbacks()
const {clientFeedbacks} = feedbacks()
const mainOptions = {
  type: 'slide',
  perPage: 3.2,
  pagination: false,
  focus: 'center',
  gap: '1rem',
  arrows: true,
  breakpoints: {
    768:{
      perPage: 1,
    }
  }
};
</script>
<template>
  <section class="w-full flex flex-col items-center pb-10 px-5 py-16 bg-[#EEF2F6] ">
    <p class="text-[#25344F] font-medium text-2xl md:text-4xl mb-9">Hear It From Our Clients</p>
  <Splide class="w-full" :options="mainOptions" :has-track="false" aria-label="My Favorite Images">
    <SplideTrack>
      <SplideSlide v-for="feedback in [...clientFeedbacks].reverse()">
        <div class="flex bg-white rounded-3xl px-3  py-7 flex-col items-center justify-center">
          <img class="w-2/12 mb-5" :src="feedback.img">
          <p class="text-lg text-[#25344F] font-medium mb-1">{{feedback.name}}</p>
          <p class="text-[#23A6F0] mb-4">{{feedback.firm}}</p>
          <p class="md:w-11/12 text-[#52627A] text-center">{{feedback.comment}}</p>
        </div>
      </SplideSlide>
    </SplideTrack>
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev "><RightArrowIcon color="white"/></button>
      <button class="splide__arrow splide__arrow--next "><RightArrowIcon color="white"/></button>
    </div>
  </Splide>
  </section>
</template>
<style>
.splide__arrow{
  width: 50px;
  height: 50px;
  background-color:#25344F;
}
@media screen and (max-width: 768px) {
  .splide__arrow {
    top: 40%;
  }
}
</style>