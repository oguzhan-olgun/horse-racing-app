<script setup lang="ts">
import router from "@/router";
import {getEnv} from "@/services/utils";

</script>

<template>
    <div class="w-full h-full overflow-hidden flex gap-4">

        <div class="row w-full h-full mobile-overflow">
            <div class="col-sm-12 col-md-6 col-lg-6 flex items-center justify-center">
                <img src="/app-logo.png" class="mobile-logo" alt="logo"/>
            </div>

            <div id="welcome" class="col-sm-12 col-md-6 col-lg-6 flex flex-col items-center justify-center p-8 gap-28">
                <p class="text-5xl font-bold text-emerald-800">
                    {{ $t("Welcome") }}
                </p>

                <ul class="circle">
                    <li class="text-emerald-800 text-lg font-bold">
                        {{ $t("Rule1", {'horse': getEnv('NUMBER_OF_HORSES_RACE')}) }}
                    </li>

                    <li class="text-emerald-800 text-lg font-bold">
                        {{ $t("Rule2") }}
                    </li>

                    <li class="text-emerald-800 text-lg font-bold">
                        {{ $t("Rule3") }}
                    </li>

                    <li class="text-emerald-800 text-lg font-bold">
                        {{
                            $t("Rule4", {
                                'race': getEnv('NUMBER_OF_HORSES_RACE'),
                                'round': getEnv('NUMBER_OF_HORSES_ROUND')
                            })
                        }}
                    </li>

                    <li class="text-emerald-800 text-lg font-bold">
                        {{ $t("Rule5") }}
                    </li>
                </ul>

                <PrimeButton :label="$t('StartRace')" @click="router.push('/race')"></PrimeButton>
            </div>
        </div>
    </div>
</template>
