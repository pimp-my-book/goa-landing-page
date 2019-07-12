<template>
    <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display text-white">
            <a 
            class="no-underline text-white"
            href="/">
            GOA
            </a>
            </h1>
        </div>
        <div class="block sm:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">
                <img src="../../assets/menu.svg"/>
                </span>
        </div>
        <div :class="open ? 'block':'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto ">
            <div class=" text-md sm:flex-grow ">
                
                 <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                   
                       <router-link class="text-white no-underline" to="/how-it-works">
                       <p class="font-body hover:text-green">
                        How It Works
                        </p>
                        </router-link>
                 </a>
                <a href="#" class="block mt-4  no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                    <router-link class="text-white no-underline" to="/contact">
                    <p class="font-body hover:text-green">
                        
                        Contact
                        
                        </p>
                        </router-link>
                </a>
                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                    <router-link class="text-white no-underline" to="/faq">
                    <p class="font-body hover:text-green">
                        FAQ
                    </p>
                    </router-link>
                </a>
                <a href="https://help.gogoa.co.za" target="_blank" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                   
                    <p class="font-body hover:text-green">
                        Help
                    </p>
                    
                </a>

                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                   
                       <router-link class="text-white no-underline" to="/features">
                       <p class="font-body hover:text-green">
                        Bursaries
                        </p>
                        </router-link>
                 </a>
            </div>
            <div class="nav__drawer--right">
                <p class="text-white font-body mr-4 hover:text-green">
                    <a 
                    href="http://app.gogoa.co.za/login"
                    class="no-underline text-white">
                    Login
                    </a>
                </p>
            </div>
            <div class="nav__drawer--right ">
                <a href="http://app.gogoa.co.za/new_register"
                    class="no-underline text-white">
               <PrimaryButton 
               text="Sign Up" 
              
               regular/>
               </a>
            </div>
        </div>
    </nav>
</template>
<script>
import PrimaryButton from '../Buttons/PrimaryButton';

export default {
    name: 'NavigationBar',
    components: {
        PrimaryButton
    },
    data: () =>{
        return {
            open: false
        }
    },
    methods: {
        toggle(){
            this.open = !this.open
        }
    }
}
</script>

<style >

 @media (min-width: 300px){
        .nav__drawer--right{
            margin-top: 10px;
   
}


    }

</style>


