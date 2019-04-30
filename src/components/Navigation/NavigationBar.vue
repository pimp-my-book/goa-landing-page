<template>
    <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <span class="font-display text-white">GOA</span>
        </div>
        <div class="block lg:hidden">
            <span class="flex items-center px-3 py-2">MENU</span>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-bg-green-light mr-4">
                    How It Works
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-bg-green-light mr-4">
                    Contact
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-bg-green-light mr-4">
                    Support
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavigationBar'
}
</script>

