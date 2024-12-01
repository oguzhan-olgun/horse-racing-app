<script setup lang="ts">
import {type RaceStore, useRaceStore} from "@/stores/race";
import {onMounted, onUnmounted, ref} from "vue";

const raceStore: RaceStore = useRaceStore();

const interval = ref()

onMounted(() => {
    interval.value = setInterval(() => {
        if (raceStore.roundCountdown !== 0) {

            raceStore.decreaseRoundCountdown();

        } else {
            clearInterval(interval.value)
        }
    }, 1000)
});

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value);
    }
})
</script>
<template>
    <div class="w-full h-full flex items-center justify-center">
        <p class="text-9xl font-bold text-emerald-800">
            {{ raceStore.roundCountdown }}
        </p>
    </div>
</template>
