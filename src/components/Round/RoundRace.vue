<script setup lang="ts">
import HorseRaceLine from "@/components/Horse/HorseRaceLine.vue";
import type {PropType} from "vue";
import type {Round} from "@/types/Race.type";
import {type RaceStore, useRaceStore} from "@/stores/race";

const props = defineProps({
    round: {
        type: Object as PropType<Round>,
        required: true,
        default: () => {
            return {};
        }
    }
});

const raceStore: RaceStore = useRaceStore()
</script>
<template>
    <div class="w-full h-full flex flex-col mobile-overflow gap-2">
        <div class=" d-flex flex-column overflow-auto  ">
            <HorseRaceLine
                v-for="(horse,index) in props.round.horses"
                :key="horse.id"
                :horse-index="index"
                :horse="horse"
                :round="props.round"/>
        </div>
        <div v-if="Object.keys(props.round).length !== 0" class="w-full flex justify-between align-items-center">
            <p class="text-emerald-800 font-bold">
                {{ $t(`${props.round.order}Lap`) }}
            </p>

            <p class="text-emerald-800 font-bold">
                {{ `${props.round.distance}m` }}
            </p>

            <p class="text-emerald-800 font-bold">
                {{ $t("Finish") }}
            </p>
        </div>
        <div v-if="Object.keys(props.round).length !== 0" class="flex items-center justify-between gap-2">
            <PrimeButton
                icon="pi pi-fast-forward"
                :label="$t('Skip')"
                severity="primary"
                @click="raceStore.setSkipRound()"/>

            <PrimeButton
                :icon="raceStore.pauseRound ? 'pi pi-play' : 'pi pi-pause'"
                :label="raceStore.pauseRound ? $t('Start') : $t('Pause')"
                severity="primary"
                @click="raceStore.setPauseRound(!raceStore.pauseRound)"/>
        </div>
    </div>
</template>
