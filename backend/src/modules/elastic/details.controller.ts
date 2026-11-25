import { Controller, Get, Param } from '@nestjs/common';
import { DetailsService } from './details.service';

@Controller('/details')
export class DetailsController {
  constructor(private readonly service: DetailsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
