<template>
  <button>
    <p class="button-text">ボタン</p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseButton',
})
</script>
<style scoped lang="scss">
.button-text {
  color: $primary;
}
</style>
