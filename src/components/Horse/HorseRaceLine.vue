<script setup lang="ts">

import {onMounted, onUnmounted, type PropType, ref, watch} from "vue";
import type {Round} from "@/types/Race.type";
import type {Horse} from "@/types/Horse.type";
import {type RaceStore, useRaceStore} from "@/stores/race";
import {sortByField} from "@/services/utils";

const props = defineProps({
    round: {
        type: Object as PropType<Round>,
        required: true,
        default: () => {
            return {};
        }
    },
    horse: {
        type: Object as PropType<Horse>,
        required: true,
        default: () => {
            return {};
        }
    },
    horseIndex: {
        type: Number,
        required: true,
        default: () => {
            return 0;
        }
    }
});

const raceStore: RaceStore = useRaceStore()

const raceContainer = ref<HTMLDivElement | null>(null);

const horseComponent = ref<HTMLDivElement | null>();

const interval = ref()

const getMedal = (): string => {
    const sortedResults = sortByField(raceStore.race.rounds[raceStore.activeRoundIndex].results, 'lapTime')
    if (sortedResults[0]?.horseId === props.horse.id) {
        return "/1st-place.png"
    } else if (sortedResults[1]?.horseId === props.horse.id) {
        return "/2nd-place.png"
    } else if (sortedResults[2]?.horseId === props.horse.id) {
        return "/3rd-place.png"
    }

    return ""
}

const isQualified = (): boolean => {
    const sortedResults = sortByField(raceStore.race.rounds[raceStore.activeRoundIndex]?.results || [], 'lapTime')

    return sortedResults[0]?.horseId === props.horse.id || sortedResults[1]?.horseId === props.horse.id || sortedResults[2]?.horseId === props.horse.id
}

const moveHorse = () => {
    let lapTime = 0;
    interval.value = setInterval(() => {
        if (horseComponent.value && raceContainer.value && Number(horseComponent.value.style.left?.replace('px', '')) < (raceContainer.value.clientWidth - 85)) {

            lapTime += 1;
            const distanceInMillis = (((props.horse.condition / 100) * props.horse.speed) / 1000);
            const distanceInPixels = (distanceInMillis * (raceContainer.value.clientWidth - 85)) / props.round.distance;
            const currentPosition = Number(horseComponent.value.style.left?.replace('px', ''))
            horseComponent.value.style.left = `${currentPosition + distanceInPixels}px`;

        } else {
            clearInterval(interval.value);
            raceStore.setRoundResultOfActiveRound(props.horse, lapTime);
        }
    }, 1)
}

watch(() => raceStore.pauseRound, () => {
    if (raceStore.pauseRound) {
        clearInterval(interval.value);
    } else {
        moveHorse();
    }
})

watch(() => raceStore.skipRound, () => {
    if (raceStore.skipRound) {
        clearInterval(interval.value);
        if (horseComponent.value && raceContainer.value && Number(horseComponent.value.style.left?.replace('px', '')) < (raceContainer.value.clientWidth - 85)) {

            const distanceInMillis = (((props.horse.condition / 100) * props.horse.speed) / 1000);
            const distanceInPixels = (distanceInMillis * (raceContainer.value.clientWidth - 85)) / props.round.distance;

            const lapTime = (raceContainer.value.clientWidth - 85) / distanceInPixels;

            raceStore.setRoundResultOfActiveRound(props.horse, lapTime);
        }
    }
})

onMounted(() => {
    moveHorse();
})

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value);
    }
})

</script>
<template>
    <div :id="`race-line-${props.horse.id}`" class="w-full flex relative border-b-2 border-dashed border-emerald-800"
         :class="{'border-t-2 border-emerald-800 border-dashed': props.horseIndex === 0}">
        <div class="w-50 p-4 flex text-white items-center justify-center width-50px"
             :style="{background: props.horse?.color}">
            <p class="font-bold rotate-270">
                {{ (props.horseIndex + 1) }}
            </p>
        </div>
        <div ref="raceContainer" class="horse border-r-4 border-red-800">
            <img v-if="isQualified()" :src="getMedal()" class="qualifying-logo-line" alt="qualify"/>
            <div ref="horseComponent" class="content">
                <img :id="`img-${props.horse.id}`" src="/horse-logo.png" class="img" alt="horse"/>
            </div>
        </div>
    </div>
</template>
