<script setup lang="ts">
import RoundRace from "@/components/Round/RoundRace.vue";
import {type RaceStore, useRaceStore} from "@/stores/race";
import RoundCountdown from "@/components/Round/RoundCountdown.vue";
import NextRoundPending from "@/components/Round/NextRoundPending.vue";
import RaceFinish from "@/components/Race/RaceFinish.vue";

const raceStore: RaceStore = useRaceStore()

</script>
<template>
    <div :key="raceStore.race.id" id="race-screen" class="w-full h-full flex flex-col overflow-hidden ">
        <div class="flex items-center justify-center p-2 bg-emerald-800 text-white rounded-t-lg">
            <p class="font-bold text-center">
                {{ $t("RaceScreen") }}
            </p>
        </div>

        <div
            v-if="raceStore.race.rounds[raceStore.activeRoundIndex]"
            class="flex-1 flex flex-col p-2 rounded-b-lg border-l-2 border-b-2 border-r-2 mobile-overflow border-emerald-800">
            <RoundRace
                v-if="raceStore.roundCountdown === 0 && !raceStore.race.rounds[raceStore.activeRoundIndex].roundFinished"
                :key="raceStore.activeRoundIndex"
                :round="raceStore.race.rounds[raceStore.activeRoundIndex]"/>

            <RoundCountdown
                v-else-if="raceStore.roundCountdown !== 0 && !raceStore.race.rounds[raceStore.activeRoundIndex].roundFinished"/>

            <NextRoundPending
                v-else-if="raceStore.race.rounds[raceStore.activeRoundIndex].roundFinished && !raceStore.raceFinished"/>

            <RaceFinish v-else-if="raceStore.raceFinished"/>
        </div>
        <div v-else
             id="generate-program-text"
             class="flex-1 flex items-center justify-center p-2  rounded-b-lg border-l-2 border-b-2 border-r-2 border-emerald-800 ">
            <p class="text-emerald-800">
                {{ $t('PleaseGenerateProgram') }}
            </p>
        </div>
    </div>
</template>
