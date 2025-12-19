// src/database/database.service.ts
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: 'db', // docker compose service name
      port: 5432,
      user: 'postgres',
      password: 'password',
      database: 'app',
    });
  }

  async onModuleInit() {
    console.log('📦 Connecting to PostgreSQL...');
    await this.pool.connect(); // throws if connection fails
    console.log('✅ Connected to PostgreSQL');
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  /**
   * Perform a simple SQL query safely.
   */
  async query<T = any>(text: string, params?: any[]): Promise<T[]> {
    const result = await this.pool.query(text, params);
    return result.rows;
  }

  /**
   * Start a transaction (returns a connected client).
   */
  async getClient(): Promise<PoolClient> {
    return this.pool.connect();
  }
}
