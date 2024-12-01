import {describe, it, expect, beforeEach} from 'vitest'
import {createPinia} from "pinia";
import {shallowMount, VueWrapper} from '@vue/test-utils'
import HorseRaceLine from "@/components/Horse/HorseRaceLine.vue";

describe('HorseRaceLine', () => {
    let pinia;
    let wrapper: VueWrapper | null = null;

    const round = {
        id: "1",
        order: 1,
        distance: 1200,
        horses: [{
            id: "1",
            name: "Horse",
            color: "#ffffff",
            condition: 50,
            speed: 200
        }],
        results: [],
        roundFinished: false,
    }

    const horse = {
        id: "1",
        name: "Horse",
        color: "#ffffff",
        condition: 50,
        speed: 200
    };

    beforeEach(() => {
        pinia = createPinia();
        wrapper = shallowMount(HorseRaceLine, {
            global: {
                plugins: [pinia],

            },
            props: {
                round,
                horse,
                horseIndex: 0
            },
        })
    })


    it('Renders Properly', () => {
        expect(wrapper?.text()).toContain('1')
    });

    it('Contains horse', () => {
        const img = wrapper?.find("#img-1")

        expect(img?.exists()).toBe(true);
    });

})
