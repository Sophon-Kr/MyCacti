<template>
    <div class="container">
        <h1>Signin</h1>
        <br><br>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <input type="email" v-model="formData.email" class="form-control" placeholder="email"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" v-model="formData.password" class="form-control" placeholder="password"/>
                <br> 
                <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
            </div>
            <div class="col-lg-3"/>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'SignIn',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            errorMessgae: '',
            succeessMessage: ''
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.formData.email, this.formData.password)
                .then( user =>{
                    this.$router.replace('/users')
                    this.succeessMessage = "Success" 
                })
                .catch(error =>{
                    alert(error.message)
                    this.errorMessgae = error.message
                })
        }
    },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

