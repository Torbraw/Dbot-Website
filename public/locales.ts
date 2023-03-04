import indexFr from './locales/fr/index.json';
import docsFr from './locales/fr/docs.json';
import fourOhFourFr from './locales/fr/404.json';
import encyclopediaFr from './locales/fr/encyclopedia.json';
import headerFr from './locales/fr/header.json';
import footerFr from './locales/fr/footer.json';
import indexEn from './locales/en/index.json';
import docsEn from './locales/en/docs.json';
import fourOhFourEn from './locales/en/404.json';
import encyclopediaEn from './locales/en/encyclopedia.json';
import headerEn from './locales/en/header.json';
import footerEn from './locales/en/footer.json';

const locales = {
  fr: {
    index: indexFr,
    docs: docsFr,
    '404': fourOhFourFr,
    encyclopedia: encyclopediaFr,
    header: headerFr,
    footer: footerFr,
  },
  en: {
    index: indexEn,
    docs: docsEn,
    '404': fourOhFourEn,
    encyclopedia: encyclopediaEn,
    header: headerEn,
    footer: footerEn,
  }
}

export default locales;