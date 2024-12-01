import type {Horse} from "@/types/Horse.type";

export type Race = {
    id: string;
    rounds: Round[];
    horses: Horse[];
}

export type Round = {
    id: string;
    order: number;
    distance: number; // in meters
    horses: Horse[];
    results: RoundResult[];
    roundFinished: boolean;
}

export type RoundResult = {
    id: string;
    horseId: string;
    lapTime: number; // in milliseconds
    horse: Horse;
}
