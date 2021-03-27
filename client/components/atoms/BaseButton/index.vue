<template>
  <button class="BaseButton" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseButton',
  props: {
    size: {
      type: String as PropType<'small' | 'middle' | 'large'>,
      default: 'middle',
    },
  },
  setup(props) {
    const classes = computed(() => {
      return '_' + props.size
    })

    return {
      classes,
    }
  },
})
</script>
<style scoped lang="scss">
.BaseButton {
  background-color: $blue;
}
.BaseButton._small {
  height: 24px;
  font-size: 10px;
}
.BaseButton._middle {
  height: 32px;
  font-size: 12px;
}
.BaseButton._large {
  height: 40px;
  font-size: 14px;
}
</style>
