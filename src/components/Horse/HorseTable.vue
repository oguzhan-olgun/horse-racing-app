<script setup lang="ts">

import type {PropType} from "vue";
import type {Horse} from "@/types/Horse.type";

const props = defineProps({
    horses: {
        type: Array as PropType<Horse[]>,
        required: true,
        default: () => {
            return [];
        }
    },
    columns: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => {
            return ["name", "position", "condition", "speed", "color"];
        }
    }
})

</script>
<template>

    <DataTable
        :value="props.horses"
        table-class="app-bg h-full text-emerald-800 rounded-b-lg"
        tableStyle="width: 100%; height: 100%; overflow: hidden"
    >
        <TableColumn
            v-if="props.columns.includes('position')"
            :header="$t('Position')"
            body-class="text-emerald-800"
            field="position">
            <template #body="{index}">
                {{ index + 1 }}
            </template>
        </TableColumn>

        <TableColumn
            v-if="props.columns.includes('name')"
            :header="$t('Name')"
            body-class="text-emerald-800"
            field="name">
            <template #body="{data}">
                {{ data.name }}
            </template>
        </TableColumn>

        <TableColumn
            v-if="props.columns.includes('condition')"
            :header="$t('Condition')"
            field="condition">
            <template #body="{data}">
                <ProgressBar :value="data.condition" :showValue="false" style="height: 6px"></ProgressBar>
            </template>
        </TableColumn>

        <TableColumn
            v-if="props.columns.includes('speed')"
            :header="$t('Speed')"
            body-class="text-emerald-800"
            field="speed">
            <template #body="{data}">
                {{ `${data.speed} m/s` }}
            </template>
        </TableColumn>

        <TableColumn
            v-if="props.columns.includes('color')"
            :header="$t('Color')"
            field="color">
            <template #body="{data}">
                <div class="flex items-center justify-center">
                    <div class=" rounded-full p-2 shadow-sm" :style="{'background-color': data.color}"/>
                </div>
            </template>
        </TableColumn>

        <template #empty>
            <p class="text-emerald-800">
                {{ $t("HorsesAreNotReadyYet") }}
            </p>
        </template>
    </DataTable>

</template>
