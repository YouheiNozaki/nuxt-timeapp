import { InjectionKey, Ref, inject } from '@nuxtjs/composition-api'
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
