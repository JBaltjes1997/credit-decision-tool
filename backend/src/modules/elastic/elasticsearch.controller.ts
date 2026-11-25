import { Controller, Get } from '@nestjs/common';
import { ElasticsearchService } from './elasticsearch.service';

@Controller('api/elasticsearch')
export class ElasticsearchController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @Get('details')
  getDetails() {
    return this.elasticsearchService.searchDetails();
  }
}
