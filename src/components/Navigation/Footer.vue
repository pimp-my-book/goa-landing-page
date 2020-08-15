<template>
    <footer class="bg-black-light mt-32 w-full ">
        
      <div class="container  ">
          <div class="flex lg:flex-row s:flex-col  justify-center Links__Container absolute mt-32 pt-32">
         
         <!-- Contact -->
         <router-link
         to="/contact"
         class="no-underline"
         >
           <FeatureText
           text="Contact Us"
          
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
           </router-link>
           

           <!-- help -->
             <a
         href="https://help.gogoa.co.za"
         class="no-underline"
         >
            <FeatureText
           text="Help"
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
            </a>


 <!-- privacy -->
  <router-link
         to="/privacy"
         class="no-underline"
         >
           <FeatureText
           text="Privacy"
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
           </router-link>

            <!-- TERMS OF SERVICE -->
             <router-link
         to="/terms"
         class="no-underline"
         >
           <FeatureText
           text="Terms of Service"
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
           </router-link>
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
    height: 400px;
    
    
}

.Links__Container, .Copyright__Container{
    left:35vw;
}
</style>

