import {describe, it, expect, beforeEach} from 'vitest'
import {createPinia} from "pinia";
import {shallowMount, VueWrapper} from '@vue/test-utils'
import RaceHorses from "@/components/Race/RaceHorses.vue";
import i18n from "@/i18n";

describe('HorseRaceLine', () => {
    let pinia;
    let wrapper: VueWrapper | null = null;


    const horses = [{
        id: "1",
        name: "Horse",
        color: "#ffffff",
        condition: 50,
        speed: 200
    }];

    beforeEach(() => {
        pinia = createPinia();
        wrapper = shallowMount(RaceHorses, {
            global: {
                plugins: [pinia, i18n],

            },
            props: {
                horses
            },
        })
    })


    it('Renders Properly', () => {
        expect(wrapper?.text()).not.toContain('not ready')
    });

})
