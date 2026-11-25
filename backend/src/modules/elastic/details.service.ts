import { Injectable } from '@nestjs/common';
import { DetailsRepository } from './details.repository';

@Injectable()
export class DetailsService {
  constructor(private readonly repo: DetailsRepository) {}

  findAll() {
    return this.repo.searchAll();
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }
}
