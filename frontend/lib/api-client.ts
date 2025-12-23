
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    // credentials: 'include',
    ...options,
  });

  if (!res.ok) throw new Error('API error');
  return res.json();
}
