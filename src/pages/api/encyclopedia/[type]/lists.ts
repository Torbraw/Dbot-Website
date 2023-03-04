import type { APIContext } from 'astro';
import type { UpstashScanResponse, UpstashResponse, EncyclopediaTypeParams } from '../../../../types';
const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = import.meta.env;

export async function get({ params, request }: APIContext): Promise<Response> {
  const { type } = params as EncyclopediaTypeParams;
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || '0';

  // Scan the redis database for the keys matching the type
  const keys = await fetch(`${UPSTASH_REDIS_REST_URL}/SCAN/${token}/match/${type}:*/count/10`, {
    headers: {
      Authorization: UPSTASH_REDIS_REST_TOKEN,
      'content-type': 'application/json',
    },
  });

  const keysReponse = (await keys.json()) as UpstashScanResponse;
  if (keysReponse.error) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const [nextToken, ids] = keysReponse.result;
  if ((ids as string[]).length === 0) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  // Get the items associated with the ids
  const entries = await fetch(`${UPSTASH_REDIS_REST_URL}/pipeline`, {
    headers: {
      Authorization: UPSTASH_REDIS_REST_TOKEN,
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify((ids as string[]).map((id) => ['JSON.GET', id])),
  }).then((res) => res.json() as Promise<UpstashResponse[]>);

  return new Response(
    JSON.stringify({
      nextToken: nextToken as string,
      entries: entries.map((entry) => JSON.parse(entry.result) as unknown),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
