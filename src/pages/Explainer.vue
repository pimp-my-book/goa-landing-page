<!---
Explainer Component:

this component houses a tut on how to palce an  order on GOA.

-->

<template>
  <div>
    <div class="flex flex-col justify-center mt-5 mb-10">
      <DisplayLarge class="xl:text-4xl" text="How It Works" />
      <FeatureText
        class="xl:text-2xl"
        text=""
      />
    </div>
    <HowToGrid v-bind:links='[
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
    ]'/>
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
