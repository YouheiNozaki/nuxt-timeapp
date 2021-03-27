<template>
  <header>
    <h1>SenseiTime</h1>
    <BaseButton size="large">ログイン</BaseButton>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseButton from '@/components/atoms/BaseButton/index.vue'

export default defineComponent({
  name: 'Header',
  components: {
    BaseButton,
  },
})
</script>
