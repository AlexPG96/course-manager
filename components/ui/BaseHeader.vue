<template>
    <header class="flex items-center justify-between p-4 bg-light dark:text-white dark:bg-blue-main-800">
        <nuxt-link class="flex item-center" to="/">
            <LogoIcon class="w-5 mr-3"/>
            <h1 class="font-bold text-base">Devmind</h1>
        </nuxt-link>
        <nuxt-link class="hidden md:block" to="/profile">
            <img class="w-10 rounded-full" src="@/assets/images/defaultImage.jpg" alt="Default images">
        </nuxt-link>
    </header>
</template>

<script>
import LogoIcon from '@/assets/icons/tv.svg?inline';
export default {
    name: 'BaseHeader',
    components: {
        LogoIcon,
    }


}
</script>