import { Inject, Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class DetailsRepository {
  private readonly index = 'details';

  constructor(
    @Inject('ELASTICSEARCH_CLIENT')
    private readonly esClient: Client,
  ) {}

  async findById(id: string) {
    const result = await this.esClient.get({
      index: this.index,
      id,
    });

    return result._source;
  }

  async searchAll() {
    const result = await this.esClient.search({
      index: this.index,
      query: {
        match_all: {},
      },
    });

    return result.hits.hits.map((hit) => ({
      id: hit._id,
      ...hit._source,
    }));
  }

  async searchByField(email: string) {
    const result = await this.esClient.search({
      index: this.index,
      query: {
        match: {
          email,
        },
      },
    });

    return result.hits.hits.map((hit) => hit._source);
  }
}
