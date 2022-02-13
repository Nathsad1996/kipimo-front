<template>
    <div class="home-card" @click="navigate">
        <svg
            class="w-40 h-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg>
        <div class="text-2xl place-self-center">{{ message }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    message: String,
    icon: String,
    path: String
})

const navigate = () => {
    router.push(`/${props.path}`)
}

</script>