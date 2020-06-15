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

        <!-- START [ProductsGrid] -->
        <ProductsGrid />
        <!-- END [ProductsGrid] -->

        <!-- End of text-part of div -->
      </div>
    </div>
    <!-- end of flex-row 1 -->

    <div class="sm:flex lg:flex-row sm:flex-col mb-10">
      <!-- Start of flex-row 2-->
      <!-- start of text-part of div -->
      <div class="mx-auto text-left w-full">
        <DisplaySmall text="Our Track Record" class="mb-5 text-blue-dark" />

        <!-- START [VendorsGrid] -->
        <VendorsGrid />
        <!-- END [VendorsGrid] -->

        <!-- End of text-part of div -->
      </div>
    </div>

    <!-- START [Companies] -->
    <div>
      <Companies />
    </div>
    <!-- END [Companies] -->

    <!-- START [PayItForward] -->
    <div class="mb-20">
      <PayItForward/>
    </div>
    <!-- END [PayItForward] -->

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
import ContactGrid from "../Grids/ContactGrid";
import Companies from "../Headers/Companies";
import ProductsGrid from "../Grids/ProductsGrid";
import VendorsGrid from "../Grids/VendorsGrid";
import PayItForward from "../Containers/PayItForward";

export default {
  name: "LandingBody",
  components: {
    DisplaySmall,
    FeatureText,
    ContactGrid,
    Companies,
    ProductsGrid,
    VendorsGrid,
    PayItForward
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
</style>