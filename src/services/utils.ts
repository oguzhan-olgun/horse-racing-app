export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomColor(): string {
    const r = Math.floor(Math.random() * 101);
    const g = Math.floor(Math.random() * 101);
    const b = Math.floor(Math.random() * 101);


    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export function formatMilliseconds(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000 / 10);

    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");
    const millisecondsStr = String(milliseconds).padStart(2, "0");

    return `${minutesStr}:${secondsStr}:${millisecondsStr}`;
}

export function sortByField<T>(array: T[], field: keyof T, ascending: boolean = true): T[] {
    return array.slice().sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];

        if (valueA === valueB) return 0;

        const comparison = valueA > valueB ? 1 : -1;
        return ascending ? comparison : -comparison;
    });
}

export function getEnv(key: string): string | undefined {
    return import.meta.env[`VITE_${key}`];
}
