<script setup lang="ts">

import type {PropType} from "vue";
import type {Horse} from "@/types/Horse.type";
import HorseTable from "@/components/Horse/HorseTable.vue";

const props = defineProps({
    horses: {
        type: Array as PropType<Horse[]>,
        required: true,
        default: () => {
            return [];
        }
    }
})

</script>
<template>
    <div id="race-horses" class="w-full h-full flex flex-col overflow-hidden">
        <div class="flex items-center justify-center p-2 bg-emerald-800 text-white rounded-t-lg">
            <p class="font-bold text-center">
                {{ `${$t("Horses")} (1-20)` }}
            </p>
        </div>

        <div class="w-full h-full overflow-hidden border-l-2 border-b-2 border-r-2 border-emerald-800 rounded-b-lg">
            <HorseTable
                :columns="['name', 'condition', 'speed', 'color']"
                :horses="props.horses"/>
        </div>
    </div>
</template>
