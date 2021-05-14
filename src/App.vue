<template>
  <div>
    <nav class="navbar navbar-light bg-light">
       <a class="navbar-brand" href="/"></a>
        <router-link to="/"><button  >Home</button></router-link>
        
    
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
   
  },
}
</script>
