<template>
  <div class="h-screen">
        <BaseHeader />
        <main class="main bg-light dark:bg-dark">
            <nuxt />
        </main>
        <BaseFooter class="md:hidden" />
  </div>
</template>

<script>
import BaseHeader from '../components/ui/BaseHeader.vue'
import BaseFooter from '../components/ui/BaseFooter.vue'
export default {
    components: {
        BaseHeader,
        BaseFooter,
    }
}
</script>

<style scoped>
    .main {
        height: calc(100% - var(--header) - var(--footer));
    }

    @media (min-width: 768px) {
        .main {
            height: calc(100% - var(--header));
        }
    }
</style>