<template>
    <footer class="bg-green-darker mt-32 w-full z-0 relative">
        
      <div class="container relative">
          <div class="flex absolute mt-32 pt-32">
           <FeatureText
           text="Contact Us"
           class="mr-4 text-white"
           />
            <FeatureText
           text="Support"
           class="mr-4 text-white"
           />
           <FeatureText
           text="Privacy"
           class="mr-4 text-white"
           />
           <FeatureText
           text="Terms of Service"
           class="mr-4 text-white"
           />
          </div>
        
      </div>
    </footer>
</template>
<script>
import FeatureText from "../Typography/FeatureText"

export default {
    name:'Footer',
    components: {
        FeatureText
    }
}
</script>
<style>
footer {
    clip-path: polygon(59% 21%, 100% 1%, 100% 100%, 0 100%, 0 49%);
    height: 500px;
    /*transform: matrix(0.98, -0.2, 0.21, 0.98,0,0);*/
    
}

.flex{
    left:35vw;
}
</style>

