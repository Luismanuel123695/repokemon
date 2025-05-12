<script setup>
import {useRoute ,useRouter} from 'vue-router';
import {useGetData} from '@/composables/GetData';
import { useFavoritosStore } from '@/store/favoritos';


const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore();

const {add}= useFavoritos

const {getData,data,loading,} = useGetData()



const back = () => {
    router.push('/pokemons')
}


getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>




<template>
    <p v-if="loading">Loading...</p>
      <div v-else="data" class="nintendo-3ds">

        <div class="screen top-screen">
        <img :src="data.sprites?.front_default" alt="">
        </div>



        <!-- Pantalla inferior -->
        <div class="screen bottom-screen">
        <ul>
            <li>
            Poke name: {{ $route.params.name }}
            </li>
        </ul>

    </div>
    


     <!-- Botones -->
  <div class="buton">
    <div class="buttons" >
      <div class="btn a">A</div>
    </div>
    <div class="buttons" >
      <div @click="back" class="btn b">B
      </div>
      <div class="btn x">X</div>
      </div>
    <div class="buttons">
      <div class="btn y">Y</div>
    </div>
    <div class="butons">
      <button class="btn" @click="add(data)">Favoritos</button>
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
  color: rgb(0, 0, 0);
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

.butons {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}



.btn {
  width: 40px;
  height: 40px;
  background: red;
  color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 5px #000;
}
.bottom-screen {
  background: #ffffff;
  height: 200px;
  overflow-y: auto;
}
</style>

