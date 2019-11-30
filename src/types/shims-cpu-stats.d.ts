declare interface CpuStatsResult {
    cpu: number;
    idle: number;
    irq: number;
    nice: number;
    sys: number;
    user: number;
}

declare module 'cpu-stats' {
    function cpuStats (timeout: number, cb: (e: Error, results: CpuStatsResult[]) => void): void;
    export = cpuStats;
}
