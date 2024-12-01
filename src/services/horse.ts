import type {Horse} from "@/types/Horse.type";
import HorseNames from "@/data/HorseNames.json";
import {v4 as uuidv4} from 'uuid';
import {generateRandomColor, getEnv, getRandomNumber} from "@/services/utils";

export function generateHorses(): Horse[] {
    const availableNames = [...HorseNames];

    const numberOfHorsesRace =  Number(getEnv("NUMBER_OF_HORSES_RACE")) || 20;

    const conditionMin =  Number(getEnv("CONDITION_MIN")) || 1;

    const conditionMax =  Number(getEnv("CONDITION_MAX")) || 1;

    const speedMin =  Number(getEnv("SPEED_MIN")) || 200;

    const speedMax =  Number(getEnv("SPEED_MAX")) || 250;


    return Array.from({length: numberOfHorsesRace}, () => {
        const nameIndex = getRandomNumber(0, availableNames.length - 1);
        const name = availableNames.splice(nameIndex, 1)[0];

        return {
            id: uuidv4(),
            name,
            color: generateRandomColor(),
            condition: getRandomNumber(conditionMin, conditionMax),
            speed: getRandomNumber(speedMin, speedMax),
        };
    });
}

export function getHorsesByLength(length: number, horses: Horse[]): Horse[] {
    const availableHorses = [...horses];

    return Array.from({length: length}, () => {
        const horseIndex = getRandomNumber(0, availableHorses.length - 1);
        return availableHorses.splice(horseIndex, 1)[0];
    })
}
