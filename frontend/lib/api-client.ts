
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
