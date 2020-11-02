<template>
  <section
    class="pt-20 flex flex-col md:flex-row flex-wrap items-center min-h-screen md:h-screen"
  >
    <div class="p-5 ml-5 flex flex-col items-start flex-1">
      <h1
        class="text-xl md:text-2xl lg:text-5xl font-bold mb-3 md:mb-5 lg:mb-8 w-full md:w-10/12"
      >
        Champions in quality cleaning
      </h1>
      <p class="">
        If you are not completely satisfied with our services, we will return at
        no additional change to address your concerns. If you are unsatisfied,
        we will honor our money-back guarantee.
      </p>
      <h5 class="my-8 font-semibold">+254 742 087 558; +254 745 456 324</h5>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mb-8"
      >
        Contact us
      </button>
      <h5 class="">702, Down town street.</h5>
    </div>
    <div class="mt-5 md:mt-10 flex flex-col justify-end relative md:w-1/4">
      <img class="md:mb-10 w-2/4 md:w-3/4 self-end" src="../../assets/images/cleaner.png" />
      <div
        class="relative md:absolute md:bottom-0 md:right-0 md:mr-5 flex justify-around md:flex-col"
      >
        <a href="https://instagram.com/cresit">
          <font-awesome-icon
            class="mb-2 text-gray-600 hover:text-green-900"
            :icon="['fab', 'instagram']"
          />
        </a>
        <a href="https://facebook.com/cresit">
          <font-awesome-icon
            class="mb-2 text-gray-600 hover:text-green-900"
            :icon="['fab', 'facebook']"
          />
        </a>
        <a href="https://twitter.com/cresit">
          <font-awesome-icon
            class="mb-2 text-gray-600 hover:text-green-900"
            :icon="['fab', 'twitter']"
          />
        </a>
      </div>
    </div>
    <div class="w-full hidden md:block">
      <scroll-down />
    </div>
  </section>
</template>

<script>
import ScrollDown from "../widgets/scroll-mouse";

export default {
  name: "landing",
  components: {
    "scroll-down": ScrollDown,
  },
};
</script>

<style>
</style>
