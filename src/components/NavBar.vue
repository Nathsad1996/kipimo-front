<template>
    <nav class>
        <div class="flex justify-between menu-bar">
            <div class="menu-brand">
                <router-link to="/">KIPIMO App</router-link>
            </div>
            <div>
                <ul>
                    <li class="menu-item">
                        <router-link to="/">
                            Accueil
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/map">
                            Carte
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/station">
                            Stations
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/report">
                            Rapports
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <button class="btn-menu" @click="logout">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

const logout = () => {
    
}
</script>