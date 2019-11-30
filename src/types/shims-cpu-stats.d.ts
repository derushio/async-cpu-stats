declare module 'cpu-stats' {
    import { CpuStatsResult } from '@/main';

    function cpuStats (timeout: number, cb: (e: Error, results: CpuStatsResult[]) => void): void;
    export = cpuStats;
}
