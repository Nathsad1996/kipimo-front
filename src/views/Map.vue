<template>
    <NavBarVue></NavBarVue>
    <div class="flex justify-center mx-2 mt-10">
        <div class="flex justify-between">
            <div
                class="map-container"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi beatae mollitia aut repellat itaque molestiae repellendus eius, pariatur sit, dolor rem! Quia dicta aperiam doloribus unde cupiditate, impedit ullam!</div>
            <div class="station-info">
                <img class="w-40 h-40" src="../assets/electric-tower-tower-svgrepo-com.svg" alt />
                <div class="flex flex-col">
                    <div class="text-justify mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt maxime nulla aut autem nihil magni veritatis,
                        doloremque error fuga iusto cum
                    </div>
                    <div>
                        <button class="btn-station-info" @click="goStation">Plus de détails</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBarVue from '../components/NavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goStation = () => {
    router.push('/station')
}

</script>