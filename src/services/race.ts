import type {Horse} from "@/types/Horse.type";
import type {Race, Round} from "@/types/Race.type";
import {v4 as uuidv4} from 'uuid';
import {generateHorses, getHorsesByLength} from "@/services/horse";
import {getEnv} from "@/services/utils";

export function generateRound(order: number, distance: number, allHorses: Horse[]): Round {

    const numberOfHorsesRound = Number(getEnv("NUMBER_OF_HORSES_ROUND")) || 20;

    return {
        id: uuidv4(),
        order,
        distance,
        horses: getHorsesByLength(numberOfHorsesRound, allHorses),
        results: [],
        roundFinished: false,
    }
}

export function createRace(): Race {
    const horses = generateHorses();
    const rounds: Round[] = [];
    const distances: number[] = [1200, 1400, 1600, 1800, 2000, 2200]

    distances.forEach((distance, roundIdx) => {
        rounds.push(generateRound((roundIdx + 1), distance, horses))
    })

    return {
        id: uuidv4(),
        rounds,
        horses,
    }
}
