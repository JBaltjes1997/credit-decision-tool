import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // moet nog een /met 'iets' toegevoegd worden
  async getHello(): Promise<Record<string, string>> {
    return this.appService.getHello();
  }

  @Get('/details')
  getDetails(): null {
    return null;
  }

  @Get('/accounts')
  getAccounts(): null {
    return null;
  }

  @Get('/limits')
  getLimits(): null {
    return null;
  }

  @Get('/formule')
  getFormule(): null {
    return null;
  }
}
