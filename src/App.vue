<script setup lang="ts">
import {RouterView} from 'vue-router';
import AppHeader from "@/components/Layout/AppHeader.vue";
import router from "@/router";
</script>

<template>
    <div class="w-full h-full overflow-hidden flex flex-col">

        <AppHeader v-if="router.currentRoute.value.name !== 'home'"/>

        <RouterView/>
    </div>
</template>

<style scoped>

</style>
