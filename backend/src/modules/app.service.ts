import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { Account } from 'src/common/types/account';
import { Limit } from 'src/common/types/Limit';
import { Detail } from 'src/common/types/detail';
import { get } from 'http';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}
  private accounts = [
    {
      walletAccount: 'p1234567',
      username: 'A. Nonymous',
      phonenumber: 2541001001,
    },
    {
      walletAccount: 'q7654321',
      username: "N. O'Body",
      phonenumber: 2543141592,
    },
  ];
  private limits = [
    {
      walletAccount: 'p1234567',
      currentLimit: 0,
      proposedLimit: 1000,
      predictedLimit: 1200,
      expectedLimit: 1100,
    },
    {
      walletAccount: 'q7654321',
      currentLimit: 0,
      proposedLimit: 1000,
      predictedLimit: 1200,
      expectedLimit: 1100,
    },
  ];
  private details = [
    {
      walletAccount: 'p1234567',
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
      gamblingOut: 175,
    },
    {
      walletAccount: 'q7654321',
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
      gamblingOut: 262.5,
    },
  ];

  async getHello(): Promise<Record<string, string>> {
    // const queryResult = (await this.databaseService.query(
    //   // 'SELECT NOW() AS now',
    //   'select * from account',
    // )) as unknown as { now: string };
    // console.log(queryResult);
    // return {
    //   message: `Tables are : ${queryResult[0]}`,
    // };

    // const queryResult = await this.databaseService.getClient();
    const queryResult = await queryResult.query('SELECT * from accounts');
    return {
      message: `Database client acquired ${JSON.stringify(queryResult.rows)}`,
    };
  }

  // async getAccounts(): Promise<Account[]> {
  //   // return this.accounts;
  //   const queryResult = await this.databaseService.query(
  //     `SELECT * FROM accounts`,
  //   );
  //   console.log(queryResult);
  //   return JSON.stringify(queryResult.rows) as unknown as Account[];
  // }
  async getAccounts(): Promise<Account[]> {
    const queryResult = await this.databaseService.query(
      `SELECT * FROM accounts`,
    );

    return queryResult as unknown as Account[];
  }

  getAccount(walletAccount: string): Account {
    const account = this.accounts.find((acc) => {
      return acc.walletAccount === walletAccount;
    });

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account;
  }

  getLimits(walletAccount: string): Limit {
    const limit = this.limits.find((lim) => {
      return lim.walletAccount === walletAccount;
    });

    if (!limit) {
      throw new NotFoundException('Limit not found');
    }
    return limit;
  }

  getDetails(walletAccount: string): Detail {
    const detail = this.details.find((det) => {
      return det.walletAccount === walletAccount;
    });

    if (!detail) {
      throw new NotFoundException('Detail not found');
    }
    return detail;
  }

  getFormule(): null {
    return null;
  }
}
