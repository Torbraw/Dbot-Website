import type { APIContext } from 'astro';
import type { EncyclopediaParams, UpstashResponse } from '../../../../types';
const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = import.meta.env;

//achievement:628c262e59c07a92c4d3c70a
//monster:635f0afc9a4be2f560084751
//item:61e23670a9caad0b38e5f100
//questResource:62b52f2d1179d0e11b2a28eb
//spell:628aeb705a1f543f5e0c8549

export async function get({ params }: APIContext): Promise<Response> {
  const { type, id } = params as EncyclopediaParams;

  const entry = await fetch(`${UPSTASH_REDIS_REST_URL}/JSON.GET/${type}:${id}`, {
    headers: {
      Authorization: UPSTASH_REDIS_REST_TOKEN,
    },
  });

  const json = (await entry.json()) as UpstashResponse;
  if (!json.result) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  return new Response(json.result, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
