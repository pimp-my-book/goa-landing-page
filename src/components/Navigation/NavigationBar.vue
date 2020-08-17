<template>
  <nav class="border-top flex items-center justify-between flex-wrap bg-black-light p-6">
    <div class="flex items-center flex-no-shrink m-0 p-0">
      <img class="h-auto w-4/5" src="https://ask-thuto-assets.s3.amazonaws.com/home/Askthuto+Logo_Face+Only_Small_Close_Border.png"/>
    </div>
    <div class="flex items-center text-left flex-no-shrink text font-sec font-bold">
      <a class="no-underline" href="/">
        <h1 class="text-white">
          askthuto
        </h1>
        <span class="text-white text-xs font-medium">
          Efficient Educational Allowances
        </span>
      </a>
    </div>
    <div class="block lg:hidden">
      <span @click="toggle" class="flex items-center px-3 py-2">
        <img src="../../assets/menu.svg" />
      </span>
    </div>
    <div
      :class="open ? 'block sm-600:block md:block sm-land:block':'hidden'"
      class="w-full flex-grow sm:hidden lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-md sm:flex-grow">
        <a
          href="#"
          class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4"
        >
          <router-link class="text-white no-underline" to="/how-it-works">
            <p class="font-body">How It Works</p>
          </router-link>
        </a>
        <a
          href="#"
          class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4"
        >
          <router-link class="text-white no-underline" to="/contact">
            <p class="font-body">Contact</p>
          </router-link>
        </a>
        <a
          href="#"
          class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4"
        >
          <router-link class="text-white no-underline" to="/faq">
            <p class="font-body">FAQ</p>
          </router-link>
        </a>

        <a
          href="#"
          class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4"
        >
          <router-link class="text-white no-underline" to="/bursaries">
            <p class="font-body">Bursaries</p>
          </router-link>
        </a>
        <a
          href="#"
          class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4"
        >
          <router-link class="text-white no-underline" to="/about">
            <p class="font-body">About</p>
          </router-link>
        </a>
      </div>
      <div class="nav__drawer--right">
        <p class="text-white font-body mr-4">
          <a
            href="http://app.gogoa.co.za/login"
            class="no-underline text-white"
          >Login</a>
        </p>
      </div>
      <div class="nav__drawer--right">
        <a href="http://app.gogoa.co.za/new_register" class="no-underline text-white">
          <PrimaryButton text="Sign Up" regular />
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import PrimaryButton from "../Buttons/PrimaryButton";

export default {
  name: "NavigationBar",
  components: {
    PrimaryButton
  },
  data: () => {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style >
@media (min-width: 300px) {
  .nav__drawer--right {
    margin-top: 10px;
  }
}
</style>


