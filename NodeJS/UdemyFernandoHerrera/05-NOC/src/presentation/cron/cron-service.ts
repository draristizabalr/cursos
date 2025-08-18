import { CronJob } from 'cron';

type CronTime = string | Date;
type OnType = () => void;

export class CronService {
  static createJob( cronTime: CronTime, onTick: OnType ) {
    const job = new CronJob(
      cronTime,
      onTick,
      null, // onComplete
      true, // start
      'America/Los_Angeles' // timeZone
    );

    return job;
  }
}
