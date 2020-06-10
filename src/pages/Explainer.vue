<!---
Explainer Component:

this component houses a tut on how to palce an  order on GOA.

-->

<template>
  <div>
    <div class="flex flex-col justify-center mt-5 mb-10">
      <DisplayLarge class="xl:text-4xl" text="How It Works" />
      <FeatureText class="xl:text-2xl" text />
    </div>
    <HowToGrid
      v-bind:links='[
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/01_handshake.svg",
            header: "1.	Meet new client (Online too)"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/02_student_analysis.svg",
            header: "2. Student needs are analysed by AskThuto"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/03_online_order.svg",
            header: "3.	Students order online"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/04_check_approved_product.svg",
            header: "4. AskThuto checks if product is approved"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/05_vendor_deliver.svg",
            header: "5. Vendor delivers to student"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/06_collect_vendor.svg",
            header: "6. Student Collects at Vendor"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/07_client_reports.svg",
            header: "7. Client gets live reports"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/08_pay_askthuto.svg",
            header: "8. Client Pays AskThuto"
        },
        {
            url: "https://ask-thuto-assets.s3.amazonaws.com/how_to_order/09_askthuto_pays_vendor.svg",
            header: "9. Askthuto pays Vendor"
        }
    ]'
    />
    <div class="flex flex-col justify-center mt-10 mb-10">
      <DisplayLarge class="xl:text-4xl" text="AskThuto Pricing" />
    </div>
    <div class="cost-grid-container sm:flex lg:flex-row sm:flex-col content-center mx-auto">
      <div class="cost-grid-item mx-auto text-lg rounded-lg shadow-lg p-6">
        <p class="leading-normal text-left">
          <strong>Normal Retail Price</strong><br/><br/>
          Textbooks: Supplier Cost + (+/-25%) Mark Up - Bulk Discounts<br/><br/>
          Laptops: Cost + 15% Mark Up - Bulk Discount<br/><br/>
          Other Products: Margin Varies<br/>
          <br/>
          <strong>Includes</strong><br/>
          <ul class="mb-4">
            <li>Delivery nationwide</li>
            <li>Unlimited use of platform</li>
            <li>Controls to track and review activity</li>
            <li>Expenditure reports</li>
            <li>+/-30% saving on overall budget (removing wasteful expenditure)</li>
          </ul>
        </p>
          <div class="py-3 divider-line"></div>
        <strong>Success Fee</strong><br/>
        % of saving from waste reduction
      </div>
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";
import FeatureText from "../components/Typography/FeatureText";
import HowToGrid from "../components/Grids/HowToGrid";

export default {
  name: "Explainer",
  components: {
    DisplayLarge,
    FeatureText,
    HowToGrid
  }
};
</script>

<style>
  ul li {
    list-style-image: url("https://s3.amazonaws.com/goa-assets/Icons/Group+48.1.svg");
  }

  .cost-grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
    padding: 10px;
    margin: auto;
    max-width: 1000px;
  }

  .cost-grid-container > div {
    text-align: center;
  }

  .cost-grid-item {
    width: 100%;
    height: 100%;
    max-width: 420px
  }

  .divider-line {
    border-top: 2px solid #000;
    width: 80%;
    margin: auto;
    opacity: 0.4
  }

  @media screen and (max-width: 720px) {
    .cost-grid-item {
      max-width: 330px
    }
  }
</style>
