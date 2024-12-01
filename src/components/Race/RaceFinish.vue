<script setup lang="ts">

import {type RaceStore, useRaceStore} from "@/stores/race";
import {sortByField} from "@/services/utils";

const raceStore: RaceStore = useRaceStore()

</script>
<template>
    <div class="w-full h-full flex flex-col items-center justify-center gap-4">
        <p class="font-bold text-lg text-emerald-800">
            {{$t("Winners").toUpperCase()}}
        </p>
        <div class="flex flex-col gap-2">
            <div class="flex flex-row items-center gap-2">
                <img src="/1st-place.png" class="qualifying-logo" alt="1st">
                <p class="font-bold text-emerald-800">
                    {{
                        sortByField(raceStore.race.rounds[raceStore.activeRoundIndex].results, 'lapTime')[0].horse.name
                    }}
                </p>
            </div>

            <div class="flex flex-row items-center gap-2">
                <img src="/2nd-place.png" class="qualifying-logo" alt="1st">
                <p class="font-bold text-emerald-800">
                    {{ sortByField(raceStore.race.rounds[raceStore.activeRoundIndex].results, 'lapTime')[1].horse.name }}
                </p>
            </div>

            <div class="flex flex-row items-center gap-2">
                <img src="/3rd-place.png" class="qualifying-logo" alt="1st">
                <p class="font-bold text-emerald-800">
                    {{ sortByField(raceStore.race.rounds[raceStore.activeRoundIndex].results, 'lapTime')[2].horse.name }}
                </p>
            </div>
        </div>
        <p class="text-emerald-800">
            {{ $t("FinishText") }}
        </p>
    </div>
</template>
