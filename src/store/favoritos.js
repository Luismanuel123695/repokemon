import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritosStore = defineStore('favoritos', () => {
    const favoritos = ref([])

    const add = (poke) =>{
        favoritos.value.push(poke)

    };
    const remove = (id) => {
       favoritos.value = favoritos.value.filter((poke) => poke.id !== id);

      
    };
    const findpoke = (name) => favoritos.value.find(item => item.name === name);



    return {
        favoritos,
        add,
        remove,
        findpoke
    };



});