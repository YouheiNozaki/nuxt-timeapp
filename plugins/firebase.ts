import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import firebase from 'firebase'

export default defineNuxtPlugin(() => {
  if (firebase.apps.length !== 0) {
    return
  }
  firebase.initializeApp({
    apiKey: 'AIzaSyA3PqKsxdRHSdbO6IuferqfKC7rMXuZCCU',
    authDomain: 'senseitime-a0c8d.firebaseapp.com',
    projectId: 'senseitime-a0c8d',
    storageBucket: 'senseitime-a0c8d.appspot.com',
    messagingSenderId: '409589300715',
    appId: '1:409589300715:web:985f3841adca55c273adae',
    measurementId: 'G-MYE9M95JJ2',
  })
})
