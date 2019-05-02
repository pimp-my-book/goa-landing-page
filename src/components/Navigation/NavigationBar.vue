<template>
    <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display text-white">GOA</h1>
        </div>
        <div class="block sm:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">MENU</span>
        </div>
        <div :class="open ? 'block':'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto ">
            <div class=" text-md sm:flex-grow ">
                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                   <p class="font-body"> How It Works</p>
                 </a>
                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                    <p class="font-body">Contact</p>
                </a>
                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                    <p class="font-body">Support</p>
                </a>
            </div>
            <div class="nav__drawer--right">
                <p class="text-white font-body mr-4 ">Login</p>
            </div>
            <div class="nav__drawer--right ">
               <PrimaryButton text="Sign Up" regular/>
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


