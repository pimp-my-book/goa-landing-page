<!--
Componanies component

this houses all the images of the companies u\who use GOA.

-->

<template>
  <section class="max-w-screen-xl w-full mb-12 p-2">
    <div class="text-center mb-8 p-2">
      <p class="xl:text-3xl text-2xl font-display">
        Now you know why the best chose the
        <span style="color: #4eca5d">smart</span> way
      </p>
    </div>
    <div class="w-full p-2 companies-grid-container">
      <div class="p-2">
        <img
          class="companies-block-landscape"
          src="https://s3.amazonaws.com/goa-assets/Images/companies/AGOF-Logo.png"
          alt="Alan Gray Orbis Foundation"
        />
      </div>
      <div class="p-2">
        <img
          class="companies-block-landscape"
          src="https://s3.amazonaws.com/goa-assets/Images/companies/Acc_Logo_Black_Purple_RGB.PNG"
          alt="Accenture"
        />
      </div>
      <div class="p-2">
        <img
          class="companies-block-landscape"
          src="https://s3.amazonaws.com/goa-assets/Images/companies/CRF+EDU.jpg"
          alt="Cyril Ramaphosa Education Trust"
        />
      </div>
      <div class="p-2">
        <img
          class="companies-block-landscape"
          src="https://s3.amazonaws.com/goa-assets/Images/companies/Moshal_weloveIT_logo254-90.png"
          alt="Moshal Scholarship"
        />
      </div>
      <div class="p-2">
        <img
          class="companies-block"
          src="https://ask-thuto-assets.s3.amazonaws.com/home/companies-grid/jakes_gerwel.jpg"
          alt="Jakes Gerwel Fellowship"
        />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Companies"
};
</script>

<style>
.companies-grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  row-gap: 10px;
  margin: auto;
  padding: 20px
}

.companies-block {
  width: 100%;
  max-width: 150px;
  height: 150px;
  margin: auto;
}

.companies-block-landscape {
  width: 100%;
  max-width: 256px;
  height: 110px;
  margin: auto;
}

@media screen and (max-width: 720px) {
  .companies-grid-container {
    grid-template-columns: auto;
  }
}
</style>
