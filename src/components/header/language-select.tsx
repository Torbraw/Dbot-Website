import type { Component } from 'solid-js';
import { createSignal, onMount, onCleanup } from 'solid-js';
import i18next from 'i18next';
import ISO6991 from 'iso-639-1';

const supportedLanguages = i18next.languages;

export const LanguageSelect: Component = () => {
  const [isDropdownOpen, setIsDropdownOpen] = createSignal<boolean>(false);

  const handleSelect = (code: string): void => {
    const [_1, _2, ...slug] = window.location.pathname.split('/');
    window.location.pathname = `/${code}/${slug.join('/')}`;
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen());
  };

  const checkHeightDiff = (header: HTMLElement, langDropdown: HTMLElement, page: HTMLElement): void => {
    if (!header.classList.contains('sticky')) {
      const d = page.clientHeight - page.scrollTop - header.offsetHeight;
      langDropdown.classList.toggle('top-[-150px]', d > 0);
    }
  };

  onMount(() => {
    const header = document.getElementById('page-header') as HTMLElement;
    const langDropdown = document.getElementById('lang-dropdown') as HTMLElement;
    const page = document.documentElement;

    // Initial check
    checkHeightDiff(header, langDropdown, page);

    addEventListener('scroll', () => {
      checkHeightDiff(header, langDropdown, page);
    });
  });

  onCleanup(() => {
    removeEventListener('scroll', () => {
      //
    });
  });

  return (
    <div>
      <button
        onClick={(): void => toggleDropdown()}
        class="h-[44px] w-[44px] cursor-pointer rounded-lg border-2 border-current bg-inherit p-2 hover:text-secondary-offset"
      >
        <svg viewBox="0 0 88.6 77.3" class="h-6 w-6" role="img">
          <path
            fill="currentColor"
            d="M61 24.6h7.9l18.7 51.6h-7.7l-5.4-15.5H54.3l-5.6 15.5h-7.2L61 24.6zM72.6 55l-8-22.8L56.3 55h16.3z"
          ></path>
          <path
            fill="currentColor"
            d="M53.6 60.6c-10-4-16-9-22-14 0 0 1.3 1.3 0 0-6 5-20 13-20 13l-4-6c8-5 10-6 19-13-2.1-1.9-12-13-13-19h8c4 9 10 14 10 14 10-8 10-19 10-19h8s-1 13-12 24c5 5 10 9 19 13l-3 7zm-52-44h56v-8h-23v-7h-9v7h-24v8z"
          ></path>
        </svg>
      </button>
      <div class="relative" id="lang-dropdown">
        {isDropdownOpen() && (
          <div class="focus-none shadow-l absolute right-0 mt-2 rounded-lg border-2 bg-default focus:outline-none focus-visible:outline-none">
            {supportedLanguages.map((supportedLanguage: string) => (
              <div>
                <button
                  class="w-full cursor-pointer rounded-lg border-2 border-transparent py-2 px-4 text-left transition-colors duration-200 hover:bg-offset hover:text-secondary-offset"
                  onClick={(): void => handleSelect(supportedLanguage)}
                >
                  {ISO6991.getNativeName(supportedLanguage)}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
