<template>
<header class="Header">
    <div class="lg:mt-32 lg:mr-20 sm:items-center sm:flex sm:flex-col">
   <DisplayXLarge 
  text="A 22nd Century Educational Experince"
  class="text-white"
  />
    </div>
  
</header>

</template>
<script>
import DisplayXLarge from "../Typography/DisplayXLarge";

export default{
    name: 'MainHeader',
    components: {
        DisplayXLarge
    }
}
</script>

<style>
 .Header{
     position: absolute;
     width: 100%;
     height: 729px;
     background-image: url('https://s3.amazonaws.com/goa-assets/Images/Home__Header-min.png');
     background-size: cover;
 }

</style>
