<template>
    <NavBarVue></NavBarVue>
    <div class="mx-4 mt-10 flex justify-center">
        <div class="flex flex-row">
            <MenuCardVue :icon="map.icon" :message="map.message" :path="map.path"></MenuCardVue>
            <MenuCardVue :icon="report.icon" :message="report.message" :path="report.path"></MenuCardVue>
            <MenuCardVue :icon="station.icon" :message="station.message" :path="station.path"></MenuCardVue>
        </div>
    </div>
</template>
<script setup>
import MenuCardVue from '../components/HomeCard.vue';
import NavBarVue from '../components/NavBar.vue';

const map = {
    message: "Parcourir la Map",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    path: "map"
}

const report = {
    message: "Produire un Rapport",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    path: "report"
}

const station = {
    message: "Détails de chaque Station",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    path: "station"
}

</script>