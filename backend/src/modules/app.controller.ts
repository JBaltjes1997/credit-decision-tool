import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Account } from 'src/common/types/account';
import { Limit } from 'src/common/types/Limit';
import { Detail } from 'src/common/types/detail';

@Controller('/accounts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get() // moet nog een /met 'iets' toegevoegd worden
  // async getHello(): Promise<Record<string, string>> {
  //   return this.appService.getHello();
  // }

  // @Get()
  // getAccounts(): Promise<Account[]> {
  //   return this.appService.getAccounts();
  // }

  @Get('/:number/details')
  getDetails(): Promise<Detail[]> {
    return this.appService.getDetails();
  }

  // @Get(':number')
  // getAccount(@Param('number') number: number): Promise<Account> {
  //   return this.appService.getAccount(number);
  // }
  @Get()
  getAccount(@Query('walletAccount') walletAccount: string) {
    if (!walletAccount) {
      throw new BadRequestException(
        'walletAccount query parameter is required',
      );
    }
    // return this.appService.findByWalletAccount(walletAccount);
    return this.appService.getAccount(walletAccount);
  }

  @Get('/limits')
  getLimits(): Promise<Limit[]> {
    return this.appService.getLimits();
  }

  @Get('/formule')
  getFormule(): null {
    return null;
  }
}
