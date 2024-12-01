<script setup lang="ts">

import router from "@/router";
</script>
<template>
    <div class="flex items-center justify-between gap-2 p-4">
        <img src="/app-logo.png" class="app-logo cursor-pointer" alt="logo" @click="router.push('/')"/>

        <p class="font-bold text-xl cursor-pointer text-emerald-800" @click="router.push('/')">
            {{ $t("HorseRacingApp") }}
        </p>

        <div id="header-actions">

        </div>
    </div>
</template>
