<template>
  <div id="app">
        <BaseHeader />
        <main class="bg-light dark:bg-dark">
            <nuxt />
        </main>
  </div>
</template>

<script>
import BaseHeader from '../components/ui/BaseHeader.vue'
export default {
    components: {
        BaseHeader,
    }
}
</script>