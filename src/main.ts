import * as sourceMapSupport from 'source-map-support';

import * as _ from 'lodash';

import cpuStats from 'cpu-stats';

async function asyncCpuStats() {
    return await new Promise<CpuStatsResult[]>((resolve, reject) => {
        cpuStats(1000, (e, results) => {
            if (e) { reject(e); }
            resolve(results);
        });
    });
}

export default asyncCpuStats;
