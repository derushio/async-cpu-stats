import * as sourceMapSupport from 'source-map-support';

import * as _ from 'lodash';

import cpuStats from 'cpu-stats';

export interface CpuStatsResult {
    cpu: number;
    idle: number;
    irq: number;
    nice: number;
    sys: number;
    user: number;
}

async function asyncCpuStats() {
    return await new Promise<CpuStatsResult[]>((resolve, reject) => {
        cpuStats(5000, (e, results) => {
            if (e) { reject(e); }
            resolve(results);
        });
    });
}

export default asyncCpuStats;
