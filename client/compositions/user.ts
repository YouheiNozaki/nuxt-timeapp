import { InjectionKey, Ref, inject } from '@nuxtjs/composition-api'
import 'firebase/auth'
import firebase from 'firebase/app'
import { User } from '../types/user'

export const CurrentUser: InjectionKey<Ref<User | null>> = Symbol('Unique User')

export const useCurrentUser = () => {
  const currentUser = inject(CurrentUser)
  if (currentUser === undefined) {
    throw new Error('currentUser is not provided')
  }
  return {
    currentUser,
  }
}

export async function logIn() {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    const user = await firebase.auth().signInWithPopup(provider)
    // eslint-disable-next-line no-console
    console.log(user)
  } catch (error) {
    throw new Error(error)
  }
}

// @ts-ignore
globalThis._app = firebase
export async function logOut() {
  try {
    const user = await firebase.auth().signOut()
    // eslint-disable-next-line no-console
    console.log(user)
  } catch (error) {
    throw new Error(error)
  }
}
