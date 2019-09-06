<template>
  <header class="Header">
    <div
      class="lg:text-left p-5 sm:text-left ml-3 lg:flex lg:flex-col pt-32 lg:mr-20 sm:flex sm:flex-col"
    >
      <DisplayXLarge text="Making your funds go further." class="text-white xl:text-7xl" />
      <FeatureText
        text="Giving bursaries control, insightful expenditure reports and removing wastage from your allowances."
        class="text-white-lighter mt-2 xl:text-3xl"
      />
    </div>
    <div class="flex mt-10 s:pl-10 lg:mr-20 ml-10">
      <a href="http://app.gogoa.co.za/new_register" class="no-underline text-white">
        <PrimaryButton text="Sign Up" />
      </a>
      <SecondaryButton text="How It Works" url="/how-it-works" class="ml-3" />
    </div>
  </header>
</template>
<script>
import DisplayXLarge from "../Typography/DisplayXLarge";
import FeatureText from "../Typography/FeatureText";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default {
  name: "MainHeader",
  components: {
    DisplayXLarge,
    FeatureText,
    PrimaryButton,
    SecondaryButton
  }
};
</script>

<style>
.Header {
  width: 100%;
  height: 729px;
  background-image: url("https://s3.amazonaws.com/goa-assets/Images/Home__Header-min.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
