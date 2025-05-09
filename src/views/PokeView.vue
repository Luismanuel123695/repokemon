<script setup>
import axios from 'axios';
import {useRoute ,useRouter} from 'vue-router';
import {ref} from 'vue';
const pokem = ref([]);
const route = useRoute();
const router = useRouter();



const back = () => {
    router.push('/pokemons')
}


const getData = async () => {
    try {
        const {data} = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
        );
        console.log(data);
        pokem.value = data;
    }catch (error) {
        console.error(error);
    }
};
getData();

</script>

<template>
    
  <img :src="pokem.sprites?.front_default" alt="">
    <h1>Poke name: {{ $route.params.name }}</h1>
    <button @click="back">Back</button>

</template>
