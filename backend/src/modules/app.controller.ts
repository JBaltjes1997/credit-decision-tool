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

  @Get()
  getAccount(@Query('walletAccount') walletAccount: string) {
    if (!walletAccount) {
      return this.appService.getAccounts();
    }
    return this.appService.getAccount(walletAccount);
  }

  @Get('/limits')
  getLimits(@Query('walletAccount') walletAccount: string) {
    return this.appService.getLimits(walletAccount);
  }

  @Get('/details')
  getDetails(@Query('walletAccount') walletAccount: string) {
    return this.appService.getDetails(walletAccount);
  }

  @Get('/formule')
  getFormule(): null {
    return null;
  }
}
