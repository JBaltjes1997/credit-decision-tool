import { bulkIndexDetails } from '@/elastic/detailsSearchEngine';

async function seed() {
  await bulkIndexDetails(detailsData);
  console.log('Details seeded into Elasticsearch');
}

seed();
