<template>
    <NavBarVue></NavBarVue>
    <div class="flex flex-row mt-5">
        <div class="station-detail">
            ICI SERA LE TABLEAU DES MESURES
        </div>
        <div class="station-card">
            <img class="w-24 h-24 mb-5" src="../assets/electric-tower-tower-svgrepo-com.svg" alt="">
            <hr>
            <div class="flex flex-col">
                <div class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium iste tempora nihil autem, 
                    vero itaque odio officiis fugit cupiditate error 
                    eius omnis provident voluptatum obcaecati sunt doloremque!
                     Eum, sapiente quisquam!
                </div>
                <div class="mt-2">
                    <button class="station-btn-action hover:bg-blue-700 bg-blue-500">Imprimer fiche</button>
                    <button class="station-btn-action hover:bg-red-700 bg-red-500">Suspendre mésures</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBarVue from '../components/NavBar.vue';

</script>