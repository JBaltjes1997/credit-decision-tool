// import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import { firstValueFrom } from 'rxjs';

// @Injectable()
// export class ElasticsearchService {
//   private readonly ES_URL = 'http://localhost:9200';

//   constructor(private readonly http: HttpService) {}

//   async searchDetails() {
//     try {
//       const response = await firstValueFrom(
//         this.http.post(
//           `${this.ES_URL}/details/_search?filter_path=hits.hits._source`,
//           {
//             query: { match_all: {} },
//           },
//           {
//             headers: { 'Content-Type': 'application/json' },
//           },
//         ),
//       );

//       return response.data;
//     } catch (error) {
//       throw new HttpException(
//         error.response?.data || 'Elasticsearch error',
//         error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
//       );
//     }
//   }
// }
