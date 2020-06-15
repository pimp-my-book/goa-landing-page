<template>
  <div>
    <header :style="styles" class="bg-scroll lg:p-32 s:p-20 bg-center bg-no-repeat bg-cover h-350">
      <DisplayLarge
        class="text-white"
        text="We make educational materials and supporting technologies affordable and accessible to students."
      />
    </header>
    <div class="p-5">
      <DisplayLarge text="Our Story" />
      <div class="flex flex-col p-5 m-5">
        <p class="text-xl text-center">
          In 2007 Thandile Fassi came to sell her book at the Pimp My Book table at the University of Cape Town. She loved the concept and joined the start up as operations manager. Thandile was part of the team that grew Pimp My Book from a dormitory to a national chain of stores.  She later observed that there were many bursary students coming to the store to ask for quotations for their textbooks. These students have to send these quotations to their bursaries and wait for their bursary to pay the bookstore. There were many bursary students coming to the Pimp My Book store to ask what textbooks they could purchase with their bursary account and sell back immediately for cash. Thandile was convinced that there is a <span style="color: #4eca5d">smarter</span> and <span style="color: #4eca5d">faster</span> way of procuring textbooks for bursary students.<br/>
          <br/>
          AskThuto was founded in 2017 to help bursaries to manage their book allowances the <span style="color: #4eca5d">smart</span> way. Today AskThuto supplies more than 6000 textbooks to students in Universities across the country. The business has head offices in Cape Town and also has a distribution office in Johannesburg. AskThuto currently delivers to students in 6 provinces in the country. Everything happens online through the ordering platform which makes it easy for students to place and track orders. It removes wastage by students saving bursaries millions of rands per annum. AskThuto has reduced its client’s book allowance budgets by an average of 30% in the first year.
        </p>
      </div>
    </div>
    <div>
      <DisplayLarge text="Our Team" class="mb-5" />

      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrBBIrIZ6arTUhSm?backgroundColor=pink&viewControls=on"
        frameborder="0"
        onmousewheel
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc;"
      />
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";
import FeatureText from "../components/Typography/FeatureText";
import AboutImg from "../assets/about.svg";
import { about } from "../copy";

export default {
  name: "About",
  components: {
    DisplayLarge,
    FeatureText
  },
  data() {
    return { About: about };
  },
  computed: {
    styles() {
      return {
        "background-image": `url(${AboutImg})`
      };
    }
  }
};
</script>
