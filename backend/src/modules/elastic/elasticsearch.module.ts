// import { Module } from '@nestjs/common';
// import { Client } from '@elastic/elasticsearch';

// @Module({
//   providers: [
//     {
//       provide: 'ELASTIC_CLIENT',
//       useFactory: () =>
//         new Client({
//           node: process.env.ELASTICSEARCH_URL!,
//           auth: {
//             username: process.env.ELASTIC_USERNAME!,
//             password: process.env.ELASTIC_PASSWORD!,
//           },
//         }),
//     },
//   ],
//   exports: ['ELASTIC_CLIENT'],
// })
// export class ElasticsearchModule {}
