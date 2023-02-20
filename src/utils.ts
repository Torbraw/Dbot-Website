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

export function getLanguageFromURL(pathname: string): string {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : 'en';
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
