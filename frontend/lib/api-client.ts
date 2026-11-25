import { env } from "process";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    // credentials: 'include',
    ...options,
    headers: {
      'x-api-key': 'ak_live_9f3cA2mQw7R8LxE5BvD1HkU6',
  },
  });

  if (!res.ok) throw new Error('API error');
  return res.json();
}

const Elastic_URL = process.env.NEXT_PUBLIC_ELASTIC_URL || 'http://localhost:9200';

export async function elasticApi<T>(  
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${Elastic_URL}${path}`, {
    ...options,
    headers: {
      'x-api-key': process.env.elastic_api_key || '',
    },
  });

  if (!res.ok) throw new Error('Elastic API error');
  return res.json();
}