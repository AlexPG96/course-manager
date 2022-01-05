<template>
  <div class="container dark:bg-black">
    <div>
      <ColorSwitch />
      <Tutorial />
    </div>
  </div>
</template>

<script>
import ColorSwitch from '../components/ui/ColorSwitch.vue';

export default {
  name: 'IndexPage',
  components: {
    ColorSwitch,
  }
}
</script>
