<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore();
const {favoritos} = storeToRefs(useFavoritos);
const {remove} = useFavoritos;
</script>



<template>
    <h1>Favoritos</h1>
    <p v-if=" favoritos.length === 0">sin favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item active"
            v-for="poke in favoritos" :key="poke.id">

            <div>
            <button class="btn btn-sm btn-danger" @click="remove(poke.id)">eliminar</button>
            </div>

            <div>
            {{poke.name}}
        
            </div>

        </li>
    </ul>

</template>
