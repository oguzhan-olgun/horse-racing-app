<script setup lang="ts">

import type {PropType} from "vue";
import type {Round} from "@/types/Race.type";
import RoundResultTable from "@/components/Round/RoundResultTable.vue";

const props = defineProps({
    round: {
        type: Object as PropType<Round>,
        required: true,
        default: () => {
            return {};
        }
    }
})

</script>
<template>
    <div class="w-full h-full flex flex-col overflow-hidden">
        <div class="flex items-center justify-center p-2  border-b-2 border-emerald-800 text-emerald-800">
            <p class="font-bold text-center">
                {{ `${$t(`${props.round.order}Lap`)} ${round.distance}m` }}
            </p>
        </div>

        <div class="flex-1 overflow-hidden">
            <RoundResultTable
                :results="props.round.roundFinished ? props.round.results : []"/>
        </div>
    </div>
</template>
