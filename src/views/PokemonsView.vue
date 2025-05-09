<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {RouterLink} from 'vue-router';

const pokemons = ref([]);

const getData = async () => {
    try {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
        pokemons.value = data.results
    }catch (error) {
        console.error(error);
    }
};
getData();
</script>



<template>
  <div class="nintendo-3ds">

    <div class="screen top-screen">
      <h1>Pokemons</h1>
      <p>List of Pokemons</p>
    </div>



    <!-- Pantalla inferior -->
    <div class="screen bottom-screen">
      <ul>
        <li v-for="poke in pokemons" :key="poke.name">
          <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
      </ul>

 </div>


    <!-- Botones -->
  <div class="buton">
    <div class="buttons" >
      <div class="btn a">A</div>
    </div>
    <div class="buttons">
      <div class="btn b">B</div>
      
      <div class="btn x">X</div>
      </div>
    <div class="buttons">
      <div class="btn y">Y</div>
    </div>
    </div>
  </div>

  


</template>

  

<style scoped>
.nintendo-3ds {
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
  background: #1a1a1a;
  border: 8px solid black;
  border-radius: 20px;
  box-shadow: 0 0 20px #000;
  font-family: 'Courier New', Courier, monospace;
}

.screen {
  background: #333;
  border-radius: 12px;
  margin: 25px 30px;
  padding: 15px;
  color: white;
}

.top-screen {
  background: #111;
}

.bottom-screen {
  background: #ffffff;
  height: 200px;
  overflow-y: auto;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  margin: 15px 0;
}

a {
  color: #000000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}


.btn {
  width: 40px;
  height: 40px;
  background: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 5px #000;
}
</style>
