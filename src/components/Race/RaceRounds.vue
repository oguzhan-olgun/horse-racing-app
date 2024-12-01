<script setup lang="ts">

import type {PropType} from "vue";
import type {Round} from "@/types/Race.type";
import RoundHorses from "@/components/Round/RoundHorses.vue";
import RoundResult from "@/components/Round/RoundResult.vue";

const props = defineProps({
    rounds: {
        type: Array as PropType<Round[]>,
        required: true,
        default: () => {
            return [];
        }
    }
})

</script>
<template>
    <div id="race-rounds" class="w-full h-full flex flex-col overflow-hidden">
        <div class="grid grid-flow-col grid-cols-2">
            <div
                class="flex items-center justify-center p-2 bg-emerald-800 text-white border-r-2 border-white rounded-tl-lg">
                <p class="font-bold text-center">
                    {{ $t("Program") }}
                </p>
            </div>
            <div class="flex items-center justify-center p-2 bg-emerald-800  text-white rounded-tr-lg">
                <p class="font-bold text-center">
                    {{ $t("Results") }}
                </p>
            </div>
        </div>

        <div class="w-full h-full border-l-2 border-b-2 border-r-2 border-emerald-800 rounded-b-lg overflow-auto">
            <div
                v-for="round in props.rounds"
                :key="round.id"
                class="grid grid-flow-col grid-cols-2">

                <RoundHorses :round="round"/>

                <RoundResult :round="round"/>
            </div>
            <div v-if="props.rounds.length === 0" class="w-full h-full items-center justify-center flex pt-2">
                <p class="text-emerald-800 text-center">
                    {{ $t("RaceIsNotSetYet") }}
                </p>
            </div>
        </div>
    </div>
</template>
