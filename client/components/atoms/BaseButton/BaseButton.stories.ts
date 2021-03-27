import BaseButton from './index.vue'

export default {
  title: 'atoms/BaseButton',
}

export const Normal = () => ({
  components: { BaseButton },
  template: '<BaseButton size="middle"/>',
})
export const Small = () => ({
  components: { BaseButton },
  template: '<BaseButton size="small"/>',
})
export const Large = () => ({
  components: { BaseButton },
  template: '<BaseButton size="large"/>',
})
