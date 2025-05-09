<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<nav class="navbar bg-body-tertiary navbar-dark">
  <div class="container-fluid">

    <RouterLink class="navbar-brand" to="/">
      <img 
      src="@/assets/logo.png" 
      alt="Logo" 
      width="30" 
      height="24" 
      class="d-inline-block align-text-top">
      
    </RouterLink>Pokeapi
  </div>
  <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Pokemons">pokemons</RouterLink>

      </nav>
</nav>

<div class="container text-center">
  <RouterView />
  </div>
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 20%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}



nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 25;

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  }
</style>
