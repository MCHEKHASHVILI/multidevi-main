<script setup>
import FAQs from "@/composables/FAQs";

const {questions, openQuestion, openedQuestion} = FAQs()
</script>
<template>
  <section class="flex items-center justify-center">
    <div class="max-w-screen-md w-11/12 flex items-center justify-center text-[#25344F] py-10 flex-col gap-10 ">
      <p class="font-semibold md:text-4xl  text-2xl">FAQs</p>
      <div class="w-10/12">
        <div @click="openQuestion(question.id)" v-for="(question, index) in questions"  class="border-b cursor-pointer pr-16 py-5">
          <p>{{question.question}}</p>
          <div class="mt-10" v-if="index === openedQuestion">
            {{questions[openedQuestion].answer}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
