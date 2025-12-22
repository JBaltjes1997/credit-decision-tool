import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { Account } from 'src/common/types/account';
import { Limit } from 'src/common/types/Limit';
import { Detail } from 'src/common/types/detail';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getHello(): Promise<Record<string, string>> {
    const queryResult = (await this.databaseService.query(
      'SELECT NOW() AS now',
    )) as unknown as { now: string };

    return {
      message: `Current time from DB is: ${queryResult[0].now}`,
    };
  }

  getDetails(): Detail[] {
    return [
      {
        CRBScore: 'JJ',
        estimatedIncome: 1000,
        salaryIn: 500,
        totalVolumeIn: 200,
        totalVolumeOut: 300,
        wholesaleAvgOut: 150,
        wholesaleMaxOut: 250,
        creditIn: 100,
        creditOut: 200,
        fuliza: 50,
        overdraft: 75,
        liquorOut: 125,
      },
      {
        CRBScore: 'II',
        estimatedIncome: 1500,
        salaryIn: 750,
        totalVolumeIn: 300,
        totalVolumeOut: 450,
        wholesaleAvgOut: 225,
        wholesaleMaxOut: 375,
        creditIn: 150,
        creditOut: 300,
        fuliza: 75,
        overdraft: 112.5,
        liquorOut: 187.5,
      },
    ];
  }

  getAccounts(): Account[] {
    return [
      { username: 'A. Nonymous', phonenumber: 2541001001 },
      { username: "N. O'Body", phonenumber: 2543141592 },
    ];
  }

  getLimits(): Limit[] {
    return [
      {
        proposedLimit: 1000,
        predictedLimit: 1200,
        expectedLimit: 1100,
        advice: 50,
      },
      {
        proposedLimit: 1000,
        predictedLimit: 1200,
        expectedLimit: 1100,
        advice: 50,
      },
    ];
  }

  getFormule(): null {
    return null;
  }
}
