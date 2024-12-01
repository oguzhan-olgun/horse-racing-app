import {defineStore} from "pinia";
import type {Race, Round, RoundResult} from "@/types/Race.type";
import {createRace} from "@/services/race";
import type {Horse} from "@/types/Horse.type";
import {v4 as uuidv4} from 'uuid';

export const useRaceStore = defineStore("race", {
    state: () => {
        return {
            race: {
                id: "" as string,
                horses: [] as Horse[],
                rounds: [] as Round[],
            } as Race,
            roundCountdown: 3,
            activeRoundIndex: 0,
            raceFinished: false,
            pauseRound: false,
            skipRound: false,
        }
    },
    actions: {
        setNewRace() {
            this.roundCountdown = 3;
            this.activeRoundIndex = 0;
            this.raceFinished = false;
            this.pauseRound = false;
            this.skipRound = false;
            this.race = createRace();
        },
        setRaceNull(){
            this.roundCountdown = 3;
            this.activeRoundIndex = 0;
            this.raceFinished = false;
            this.pauseRound = false;
            this.skipRound = false;
            this.race = {
                id: "" as string,
                horses: [] as Horse[],
                rounds: [] as Round[],
            };
        },
        setRoundResultOfActiveRound(horse: Horse, lapTime: number) {
            const round = this.race.rounds[this.activeRoundIndex];
            if (round) {
                const result = round.results.find((r: RoundResult) => r.horseId === horse.id);
                const resultIdx = round.results.findIndex((r: RoundResult) => r.horseId === horse.id);
                if (result) {
                    result.lapTime = lapTime;
                    round.results.splice(resultIdx, 1, result);
                } else {
                    round.results.push({
                        id: uuidv4(),
                        horseId: horse.id,
                        horse,
                        lapTime: lapTime
                    })
                }
                if (round.results.length === round.horses.length) {
                    round.roundFinished = true;
                    if (this.activeRoundIndex === 5) {
                        this.raceFinished = true;
                    }
                }
                this.race.rounds.splice(this.activeRoundIndex, 1, round);
            }
        },
        decreaseRoundCountdown() {
            if (this.roundCountdown > 0) {
                this.roundCountdown -= 1;
            }
        },
        increaseActiveRoundIndex() {
            if (this.activeRoundIndex < 5) {
                this.activeRoundIndex += 1;
                this.roundCountdown = 3;
                this.pauseRound = false;
                this.skipRound = false;
            }
        },
        setSkipRound() {
            this.skipRound = true;
        },
        setPauseRound(value: boolean) {
            this.pauseRound = value;
        }
    },
    getters: {
        getRace(): Race {
            return this.race;
        },
        getActiveRoundIndex(): number {
            return this.activeRoundIndex;
        },
        getRoundCountdown(): number {
            return this.roundCountdown;
        },
        getRaceFinished(): boolean {
            return this.raceFinished;
        }
    }
});

export type RaceStore = ReturnType<typeof useRaceStore>;
