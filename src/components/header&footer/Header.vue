<script setup>
import companyLogo from "../icons/headerIcons/companyLogo.vue";
import UseNavigation from "@/composables/useNavigation";
import BurgerIcon from "@/components/icons/headerIcons/burgerIcon.vue";
import YellowButton from "@/components/universalComponents/buttons/yellowButton.vue";
import DropdownArrow from "../icons/headerIcons/dropdownArrow.vue";
const { navbarComponents, dropdownIndex, show, hide, dropDownVisible } = UseNavigation();
</script>

<template>
  <section class="w-full bg-[#5A58AB] justify-between px-10  items-center flex py-6">
    <a href="/"><company-logo/></a>
    <div class="md:flex hidden ">
      <ul class="flex">
      <p @mouseover="show(index)" @mouseleave="hide(index)"  :class="['mx-4 group ', 'text-white flex flex-col items-center hover:text-opacity-50 ', 'cursor-pointer', component.current ? 'text-opacity-100 ' : 'text-opacity-60' ,  { 'dropdown': index === dropdownIndex }] " v-for="(component, index) in navbarComponents" :key="index">
        <router-link class="flex items-center " :to="component.to">{{ component.name }}
          <dropdown-arrow v-if="index === dropdownIndex" class="dropdown-arrow ml-2 z-50 transform transition duration-200 group-hover:rotate-180"/>
        </router-link>
        <div class=" text-black absolute z-50 flex flex-col items-center justify-center  pt-10 " v-if="index === dropdownIndex && dropDownVisible"><div class="bg-white rounded-2xl py-10 px-5">text for dropdown</div></div>
      </p>
      </ul>
    </div>
    <router-link class="h-10 md:flex hidden" to="/contact-us"><YellowButton text="Let's Talk" arrow/></router-link>
    <burger-icon class="md:hidden cursor-pointer flex"/>
  </section>
</template>
