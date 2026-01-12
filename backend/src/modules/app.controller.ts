import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Account } from 'src/common/types/account';
import { wallet } from 'src/common/types/wallet';

@Controller('/wallets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWallet(@Query('walletAccount') walletAccount: string) {
    if (!walletAccount) {
      return this.appService.getWallets();
    }
    return this.appService.getWallet(walletAccount);
  }

  @Get('/limits')
  getLimits(@Query('walletAccount') walletAccount: string) {
    return this.appService.getLimits(walletAccount);
  }

  @Get('/details')
  getDetails(@Query('walletAccount') walletAccount: string) {
    return this.appService.getDetails(walletAccount);
  }
}
