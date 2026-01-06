import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Account } from 'src/common/types/account';

@Controller('/accounts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // getAccount(@Query('walletAccount') walletAccount: string) {
  getAccount(@Query('walletAccount') walletAccount: string) {
    if (!walletAccount) {
      return this.appService.getAccounts();
    }
    return this.appService.getAccount(walletAccount);
  }

  // @Get('/hello')
  // getGreeting(): Promise<Record<string, string>> {
  //   return this.appService.getHello();
  // }

  @Get('/limits')
  getLimits(@Query('walletAccount') walletAccount: string) {
    return this.appService.getLimits(walletAccount);
  }

  @Get('/details')
  getDetails(@Query('walletAccount') walletAccount: string) {
    return this.appService.getDetails(walletAccount);
  }

  @Get('/hello')
  getTime(): Promise<Record<string, string>> {
    return this.appService.getHello();
  }
}
