<template>
  <div class="container mx-auto">
    <!-- Start of container -->
    <div class="sm:flex lg:flex-row sm:flex-col">
      <!-- Start of flex-row 1-->

      <!-- start of text-part of div -->
      <div class="m-4 lg:text-left lg:pl-26 s:text-center">
        <DisplaySmall text="Products" class="mb-5 text-blue-dark" />
        <FeatureText
          class="p-2"
          text="There are thousands of other cool stuff that your students would rather have. Our goal is to ensure that your money is invested in products that will help your students to succeed."
        />
        <!-- start of ul -->
        <div class="lg:p-12 lg:text-left lg:pr-32">
          <ul class="mx-auto">
            <li>
              <FeatureText text="Pre-select the products your students need" />
            </li>
            <li>
              <FeatureText text="Confirm university prescription for your products" />
            </li>
            <li>
              <FeatureText text="Guarantee that your students actually purchased that item " />
            </li>
          </ul>
        </div>
        <!-- end of ul -->

        <!-- START [Icon-Grid] -->
        <IconGrid
          v-bind:links='[
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/backpack.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/calculator.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/stationery.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/tablet.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/book.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/ebook.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/laptop.svg" },
    { url: "https://ask-thuto-assets.s3.amazonaws.com/home/icon-grid-home/stethoscope.svg" },
  ]'
        />
        <!-- END [Icon-Grid] -->

        <!-- End of text-part of div -->
      </div>
    </div>
    <!-- end of flex-row 1 -->

    <div class="sm:flex lg:flex-row sm:flex-col">
      <!-- Start of flex-row 2-->
      <!-- start of text-part of div -->
      <div class="m-4 lg:text-left lg:pl-26 s:text-center">
        <DisplaySmall text="Vendors" class="mb-5 text-blue-dark" />
        <FeatureText
          class="p-2"
          text="Get the best of both worlds. Some of our vendors have more than 150 years in the sector while others are introducing innovative solutions to the education sector."
        />
        <!-- start of ul -->
        <div class="lg:p-12 lg:text-left lg:pr-32">
          <ul class="mx-auto">
            <li>
              <FeatureText text="No need to check multiple vendors" />
            </li>
            <li>
              <FeatureText text="No need to pay multiple vendors" />
            </li>
            <li>
              <FeatureText text="Budget control across multiple vendors" />
            </li>
          </ul>
          <!-- end of ul -->
          <!-- START [Icon-Grid] -->
          <div class="vendors-grid-container">
            <div>
              <embed
                class="vendor-item-short"
                width="200px"
                height="100px"
                src="https://ask-thuto-assets.s3.amazonaws.com/home/vendors/adams.jpg"
              />
            </div>
            <div>
              <embed
                class="vendor-item-wide"
                width="400px"
                height="100px"
                src="https://ask-thuto-assets.s3.amazonaws.com/home/vendors/protea.png"
              />
            </div>
            <div>
              <embed
                class="vendor-item-short"
                width="200px"
                height="100px"
                src="https://ask-thuto-assets.s3.amazonaws.com/home/vendors/pmb.jpg"
              />
            </div>
            <div>
              <embed
                class="vendor-item-wide"
                width="400px"
                height="100px"
                src="https://ask-thuto-assets.s3.amazonaws.com/home/vendors/caxton.jpg"
              />
            </div>
          </div>
          <!-- END [Icon-Grid] -->
        </div>
        <!-- End of text-part of div -->
      </div>
    </div>

    <div>
      <Companies/>
    </div>

    <!-- end of flex-row 2 -->
    <div class="sm:flex lg:flex-row sm:flex-col">
      <!-- Start of flex-row 3-->

      <!-- start of text-part of div -->
      <div class="m-4 lg:text-left lg:pl-26 s:text-center w-full mx-auto">
        <DisplaySmall text="Contact Us Now" class="mb-5 text-blue-dark" />
        <FeatureText
          class="p-2"
          text="We would love to learn more about what you do and to explore how we can help you."
        />

        <!-- START [ContactGrid] -->
        <ContactGrid />
        <!-- END [ContactGrid] -->
        <!-- End of text-part of div -->
      </div>
    </div>
    <!-- end of flex-row 3 -->
  </div>
  <!-- End  of container -->
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall";
import FeatureText from "../Typography/FeatureText";
import IconGrid from "../Grids/IconGrid";
import ContactGrid from "../Grids/ContactGrid";
import Companies from "../Headers/Companies";

export default {
  name: "LandingBody",
  components: {
    DisplaySmall,
    FeatureText,
    IconGrid,
    ContactGrid,
    Companies
  }
};
</script>

<style >
ul li {
  list-style-image: url("https://s3.amazonaws.com/goa-assets/Icons/Group+48.1.svg");
  padding: 10px;
}

.break-all {
  word-break: break-all;
}

.vendors-grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 10px;
  margin: auto;
  padding: 20px;
  padding-bottom: 50px;
}

.vendors-grid-container > div {
  text-align: center;
}

@media screen and (max-width: 720px) {
  .vendors-grid-container {
    grid-template-columns: auto;
    padding-top: 50px;
  }

  .vendor-item-wide {
    width: 270px;
  }

  .vendor-item-short {
    width: 200px;
  }
}
</style>