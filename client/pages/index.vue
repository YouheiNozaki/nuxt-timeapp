<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const message = ref('Hello World')

    return {
      message,
    }
  },
})
</script>
