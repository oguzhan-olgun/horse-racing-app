<script setup lang="ts">

import RaceHorses from "@/components/Race/RaceHorses.vue";
import RaceRounds from "@/components/Race/RaceRounds.vue";
import RaceScreen from "@/components/Race/RaceScreen.vue";
import {type RaceStore, useRaceStore} from "@/stores/race";
import {onUnmounted} from "vue";


const raceStore: RaceStore = useRaceStore();

onUnmounted(() => {
    raceStore.setRaceNull();
});

</script>
<template>
    <div class="w-full h-full d-flex p-2 overflow-hidden">
        <div :key="raceStore.race.id" class="row h-full mobile-overflow">
            <div class="col-sm-12 col-md-3 col-lg-3 h-full p-2 overflow-hidden">
                <RaceHorses :horses="raceStore.race.horses || []"/>
            </div>

            <div class="col-sm-12 col-md-5 col-lg-5 h-full overflow-hidden p-2">
                <RaceScreen></RaceScreen>
            </div>

            <div class="col-sm-12 col-md-4 col-lg-4 h-full overflow-hidden p-2">
                <RaceRounds :rounds="raceStore.race.rounds || []"/>
            </div>
        </div>

        <Teleport to="#header-actions">
            <PrimeButton id="generate-program-button" :label="$t('GenerateProgram')" severity="primary" class="bg-emerald-800 border-emerald-800"
                         @click="raceStore.setNewRace()"/>
        </Teleport>
    </div>
</template>
