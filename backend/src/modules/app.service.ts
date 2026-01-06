import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { Account } from 'src/common/types/account';
import { Limit } from 'src/common/types/Limit';
import { Detail } from 'src/common/types/detail';
import { get } from 'http';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getAccounts(): Promise<Account[]> {
    const queryResult = await this.databaseService.query(
      `SELECT * FROM accounts`,
    );
    return queryResult as unknown as Account[];
  }

  async getAccount(walletAccount: string): Promise<Account> {
    const queryResult = await this.databaseService.query(
      `SELECT * FROM accounts WHERE walletAccount = $1`,
      [walletAccount],
    );
    if (!queryResult || queryResult.length === 0) {
      throw new NotFoundException('Account not found');
    }
    return queryResult[0] as unknown as Account;
  }

  async getLimits(walletAccount: string): Promise<Limit> {
    const queryResult = await this.databaseService.query(
      `SELECT * FROM limits WHERE walletAccount = $1`,
      [walletAccount],
    );
    if (!queryResult || queryResult.length === 0) {
      throw new NotFoundException('Limit not found');
    }
    return queryResult[0] as unknown as Limit;
  }

  async getDetails(walletAccount: string): Promise<Detail> {
    const queryResult = await this.databaseService.query(
      `SELECT * FROM details WHERE walletAccount = $1`,
      [walletAccount],
    );
    if (!queryResult || queryResult.length === 0) {
      throw new NotFoundException('Details not found');
    }
    return queryResult[0] as unknown as Detail;
  }
}
