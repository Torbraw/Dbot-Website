// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDFRONT_BASE_URL: string;
  readonly PUBLIC_INVITE_LINK: string;
  readonly DBOT_DISCORD_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
