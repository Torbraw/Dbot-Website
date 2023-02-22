import type { CollectionEntry } from 'astro:content';
import { SIDEBAR, Sidebar, SidebarContent } from './config';

export function paginate(
  lang: keyof Sidebar,
  path: string,
): { prev: SidebarContent | undefined; next: SidebarContent | undefined } {
  const routes = Object.values(SIDEBAR[lang]).flat();
  const index = routes.map((item) => item.link).indexOf(path);
  if (index === -1) return { prev: undefined, next: undefined };
  const prev = index > 0 ? routes[index - 1] : undefined;
  const next = index < routes.length - 1 ? routes[index + 1] : undefined;
  return { prev, next };
}

export function interpolateString(localizedString: string, referenceString: string): string {
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  if (referenceString) {
    const referenceStringMatches = referenceString.match(tagsRegex);
    if (referenceStringMatches) {
      const referenceTags: {
        name: string;
        attributes: string;
      }[] = [];

      referenceStringMatches.forEach((tagNode) => {
        const result = tagsRegex.exec(tagNode);
        if (result) {
          const [, name, attributes] = result;
          referenceTags.push({ name, attributes });
        }
        // reset regex state
        tagsRegex.exec('');
      });

      let interpolatedString = localizedString;
      for (let index = 0; index < referenceTags.length; index++) {
        const referencedTag = referenceTags[index];
        // Replace opening tags
        interpolatedString = interpolatedString.replaceAll(
          `<${index}>`,
          `<${referencedTag.name}${referencedTag.attributes}>`,
        );
        // Replace closing tags
        interpolatedString = interpolatedString.replaceAll(`</${index}>`, `</${referencedTag.name}>`);
      }

      return interpolatedString;
    }
  }
  return localizedString;
}

/** Get a page’s slug, without the language prefix (e.g. `'en/migrate'` => `'migrate'`). */
export const stripLangFromSlug = (slug: CollectionEntry<'docs'>['slug']): string => slug.split('/').slice(1).join('/');

/** Get a page’s lang tag from its slug (e.g. `'en/migrate'` => `'en'`). */
export const getLangFromSlug = (slug: CollectionEntry<'docs'>['slug']): string => slug.split('/')[0];
