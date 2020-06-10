<!--
Componanies component

this houses all the images of the companies u\who use GOA.

-->

<template>
  <section class="max-w-screen-xl w-full mt-10 p-2">
    <div class="text-center mb-8 p-2">
      <p class="xl:text-3xl text-2xl font-display">
        Now you know why the best chose the
        <span style="color: #4eca5d">smart</span> way
      </p>
    </div>
    <div class="flex x:flex-row lg:flex-row s:flex-col lapie:flex-wrap justify-center">
      <img
        class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64"
        src="https://s3.amazonaws.com/goa-assets/Images/companies/AGOF-Logo.png"
        alt="Alan Gray"
      />
      <img
        class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-150 lg:w-64"
        src="https://s3.amazonaws.com/goa-assets/Images/companies/Acc_Logo_Black_Purple_RGB.PNG"
        alt="Accenture"
      />
      <img
        class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64"
        src="https://s3.amazonaws.com/goa-assets/Images/companies/Moshal_weloveIT_logo254-90.png"
        alt="Moshal"
      />
      <img
        class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64"
        src="https://s3.amazonaws.com/goa-assets/Images/companies/CRF+EDU.jpg"
        alt="Cyril Ramamphosa"
      />
      <img
        class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64"
        src="https://ask-thuto-assets.s3.amazonaws.com/home/companies-grid/jakes_gerwel.jpg"
        alt="Jakes Gerwel"
      />
    </div>
  </section>
</template>

<script>
import DisplayLarge from "../Typography/DisplayLarge";

export default {
  name: "Companies",
  components: {
    DisplayLarge
  }
};
</script>
