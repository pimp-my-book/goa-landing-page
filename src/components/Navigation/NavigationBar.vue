<template>
    <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display text-white">GOA</h1>
        </div>
        <div class="block lg:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">MENU</span>
        </div>
        <div :class="open ? 'block':'hidden'" class="w-full lg:flex-grow lg:flex lg:items-center lg:w-auto ">
            <div class=" text-sm md:flex-grow ">
                <a href="#" class="block mt-4 no-underline lg:inline-block lg:mt-0 text-white hover:text-bg-green-light mr-4">
                   <p class="font-body"> How It Works</p>
                 </a>
                <a href="#" class="block mt-4 no-underline lg:inline-block lg:mt-0 text-white hover:text-bg-green-light mr-4">
                    <p class="font-body">Contact</p>
                </a>
                <a href="#" class="block mt-4 no-underline lg:inline-block lg:mt-0 text-white hover:text-bg-green-light mr-4">
                    <p class="font-body">Support</p>
                </a>
            </div>
            <div class="mt-4">
                <p class="text-white font-body mr-4 ">Login</p>
            </div>
            <div>
               <PrimaryButton text="Sign Up"/>
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

