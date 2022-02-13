<template>
    <NavBarVue></NavBarVue>
    <div class="mt-5 flex flex-col items-center">
        <div class="flex flex-row mb-5">
            <div class="text-lg place-self-center px-4 py-2">Veuillez selectionner une station :</div>
            <select name="station" class="select-station">
                <option value="1">UNIKIN</option>
                <option value="2">UPN</option>
                <option value="3">Rev KIM</option>
                <option value="4">ULK</option>
                <option value="5">UNILU</option>
            </select>
            <button class="btn-search">Charger les données</button>
        </div>
        <div class="w-full text-center text-white text-4xl border-8 bg-gray-500 rounded-xl h-96">
            on va call grafana here
        </div>
    </div>
</template>

<script setup>
import NavBarVue from '../components/NavBar.vue';

</script>