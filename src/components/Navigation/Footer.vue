<template>
    <footer class="bg-green-darker mt-32 w-full z-0 relative">
        
      <div class="container relative">
          <div class="flex s:flex-col Links__Container absolute mt-32 pt-32">
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

      <div class="container relative py-32">
          <div class="flex  s:flex-col Copyright__Container absolute mt-32 pt-32">
           <Credits/>
           <Copyright/>
          </div>
      </div>
    </footer>
</template>
<script>
import FeatureText from "../Typography/FeatureText"
import Credits from "../Typography/Credits"
import Copyright from "../Typography/Copyright"

export default {
    name:'Footer',
    components: {
        FeatureText,
        Credits,
        Copyright
    }
}
</script>
<style>
footer {
    clip-path: polygon(59% 21%, 100% 1%, 100% 100%, 0 100%, 0 49%);
    height: 500px;
    /*transform: matrix(0.98, -0.2, 0.21, 0.98,0,0);*/
    
}

.Links__Container, .Copyright__Container{
    left:35vw;
}
</style>

