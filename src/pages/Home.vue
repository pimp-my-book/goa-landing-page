<template>
  <div>
    <!-- Main header  -->
    <MainHeader />

    <!-- Start of cards that explain GOA's Benefits  -->
    <div class="container pb-8 pt-10 w-full mx-auto">
      <div class="mb-20">
        <DisplayLarge text="Stop paying MORE and MORE for LESS and LESS" class="mb-2 xl:text-3xl" />
        <FeatureText
          class="xl:text-2xl p-4"
          text="Our clients have reduced their budgets by 30% while still providing students with all the tools which they need to succeed."
        />
      </div>
      <div class="sm:flex lg:flex-row sm:flex-col s:flex s:flex-col items-center">
        <SmallCard
          img="https://ask-thuto-assets.s3.amazonaws.com/home/document-magnified.svg"
          cardTitle="Know how your money was spent"
          class="p-2 lg:ml-5 mb-5"
          cardText="Get detailed reports on what your students are buying."
        />

        <SmallCard
          class="p-2 ml-5 mb-5"
          img="https://ask-thuto-assets.s3.amazonaws.com/home/dedicated-staff.svg"
          cardTitle="Dedicated Support Staff"
          cardText="Your students should not have to wait in long lines or talk to computers that don’t know their names. AskThuto gives your students personal support as they figure out what they need to succeed."
        />

        <SmallCard
          class="p-2 ml-5 mb-5"
          img="https://ask-thuto-assets.s3.amazonaws.com/home/stop-wastage.svg"
          cardTitle="Prevent Wastage"
          cardText="AskThuto monitors what your students are buying and eliminates wasteful expenditure."
        />
      </div>
      <ProductsGrid/>
    </div>
    <!--  End of GOA card benefits-->

    <!-- content for the body of the landing page -->
    <LandingBody />

    <!-- The large card contact sales -->
    <div class="flex justify-center mt-2 lg:pl-32">
      <LargeCard
        img="https://s3.amazonaws.com/goa-assets/Illustrations/stock.svg"
        cardTitle="Make managing student needs easier"
        show
        buttonURL="/contact"
        primaryText="Contact Sales"
        secondaryText="Book A Demo"
      />
    </div>
  </div>
</template>
<script>
import MainHeader from "../components/Headers/MainHeader";
import SmallCard from "../components/Cards/SmallCard";
import LargeCard from "../components/Cards/LargeCard";
import LandingBody from "../components/Bodies/LandingBody";
import DisplayLarge from "../components/Typography/DisplayLarge";
import FeatureText from "../components/Typography/FeatureText";
import ProductsGrid from "../components/Grids/ProductsGrid";
import { page } from "vue-analytics";

export default {
  name: "Home",
  components: {
    MainHeader,
    SmallCard,
    LandingBody,
    LargeCard,
    DisplayLarge,
    FeatureText,
    ProductsGrid
  },
  methods: {
    track() {
      page("/");
    }
  }
};
</script>

<style>
.CardDiv {
  width: 30vw;
}
</style>
