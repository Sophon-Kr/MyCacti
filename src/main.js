import { createApp } from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import './index.css'
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'

let app

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDCrX46jhIMvRd2KbdK_QDNAW6fr4jmpn8",
    authDomain: "userpage-9062b.firebaseapp.com",
    projectId: "userpage-9062b",
    storageBucket: "userpage-9062b.appspot.com",
    messagingSenderId: "33133573507",
    appId: "1:33133573507:web:2b35802b6dc52042d372b6",
    measurementId: "G-28EX59ZJSF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})
