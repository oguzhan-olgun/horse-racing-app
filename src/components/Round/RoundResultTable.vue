<script setup lang="ts">

import type {PropType} from "vue";
import type {RoundResult} from "@/types/Race.type";
import {formatMilliseconds, sortByField} from "@/services/utils";

const props = defineProps({
    results: {
        type: Array as PropType<RoundResult[]>,
        required: true,
        default: () => {
            return [];
        }
    },
    columns: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => {
            return ["rank", "name", "lapTime"];
        }
    }
});

</script>
<template>

    <DataTable
        :value="sortByField(props.results, 'lapTime')"
        table-class="app-bg h-full text-emerald-800 rounded-b-lg"
        tableStyle="width: 100%; height: 100%; overflow: hidden"
    >
        <TableColumn
            v-if="props.columns.includes('rank')"
            :header="$t('Rank')"
            body-class="text-emerald-800"
            field="rank">
            <template #body="{index}">
                {{ index + 1 }}
            </template>
        </TableColumn>

        <TableColumn
            v-if="props.columns.includes('name')"
            :header="$t('Name')"
            body-class="text-emerald-800"
            field="Name">
            <template #body="{data}">
                {{ data.horse.name }}
            </template>
        </TableColumn>

        <TableColumn
            v-if="props.columns.includes('lapTime')"
            :header="$t('LapTime')"
            field="lapTime">
            <template #body="{data}">
                {{ formatMilliseconds(data.lapTime)}}
            </template>
        </TableColumn>

        <template #empty>
            <p class="text-emerald-800">
                {{ $t("RoundNotCompleteYet") }}
            </p>
        </template>
    </DataTable>

</template>
