<script setup lang="ts">

import type {PropType} from "vue";
import type {Round} from "@/types/Race.type";
import HorseTable from "@/components/Horse/HorseTable.vue";

const props = defineProps({
    round: {
        type: Object as PropType<Round>,
        required: true,
        default: () => {
            return {};
        }
    }
});

</script>
<template>
    <div class="w-full h-full flex flex-col overflow-hidden">
        <div class="flex items-center border-b-2 border-emerald-800  justify-center p-2 text-emerald-800">
            <p class="font-bold text-center">
                {{ `${$t(`${props.round.order}Lap`)} ${round.distance}m` }}
            </p>
        </div>

        <div class="flex-1 overflow-hidden">
            <HorseTable
                :columns="['position', 'name', 'color']"
                :horses="props.round.horses"/>
        </div>
    </div>
</template>
