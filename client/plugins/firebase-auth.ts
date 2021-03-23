import {
  defineNuxtPlugin,
  onGlobalSetup,
  onUnmounted,
  ref,
  provide,
} from '@nuxtjs/composition-api'
import firebase from 'firebase'

import { CurrentUser } from '../compositions/user'
import { User } from '../types/user'

export default defineNuxtPlugin(async (_context, inject) => {
  const currentUser = ref<User | null>(null)
  // NuxtのContextに値を注入する
  inject('currentUser', currentUser)

  // TODO fix:any
  const unsubscribe: any = await new Promise((resolve) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        currentUser.value = null
      } else {
        currentUser.value = {
          displayName: user.displayName!,
          photoURL: user.photoURL!,
        }
      }
      resolve(unsubscribe)
    })
  })
  onGlobalSetup(() => {
    provide(CurrentUser, currentUser)
    onUnmounted(unsubscribe)
  })
})
