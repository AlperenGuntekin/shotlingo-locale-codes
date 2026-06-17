// App Store + Google Play locale code map for 40+ App Store-supported languages.
// Source: extracted from the Shotlingo localization database (https://shotlingo.com).
// Re-published as a standalone reference so other ASO tools can use the same
// canonical mapping without re-deriving it.

export const LOCALES = [
  { iso: 'ja',      name: 'Japanese',              nativeName: '日本語',           appStore: 'ja',         playStore: 'ja-JP',      rtl: false },
  { iso: 'de',      name: 'German',                nativeName: 'Deutsch',          appStore: 'de-DE',      playStore: 'de-DE',      rtl: false },
  { iso: 'es',      name: 'Spanish',               nativeName: 'Español',          appStore: 'es-ES',      playStore: 'es-ES',      rtl: false },
  { iso: 'es-MX',   name: 'Spanish (Mexico)',      nativeName: 'Español (México)', appStore: 'es-MX',      playStore: 'es-MX',      rtl: false },
  { iso: 'fr',      name: 'French',                nativeName: 'Français',         appStore: 'fr-FR',      playStore: 'fr-FR',      rtl: false },
  { iso: 'fr-CA',   name: 'French (Canada)',       nativeName: 'Français (CA)',    appStore: 'fr-CA',      playStore: 'fr-CA',      rtl: false },
  { iso: 'ko',      name: 'Korean',                nativeName: '한국어',            appStore: 'ko',         playStore: 'ko-KR',      rtl: false },
  { iso: 'zh-Hans', name: 'Chinese (Simplified)',  nativeName: '简体中文',          appStore: 'zh-Hans',    playStore: 'zh-CN',      rtl: false },
  { iso: 'zh-Hant', name: 'Chinese (Traditional)', nativeName: '繁體中文',          appStore: 'zh-Hant',    playStore: 'zh-TW',      rtl: false },
  { iso: 'ar',      name: 'Arabic',                nativeName: 'العربية',           appStore: 'ar-SA',      playStore: 'ar',         rtl: true  },
  { iso: 'pt-BR',   name: 'Portuguese (Brazil)',   nativeName: 'Português (BR)',   appStore: 'pt-BR',      playStore: 'pt-BR',      rtl: false },
  { iso: 'pt-PT',   name: 'Portuguese (Portugal)', nativeName: 'Português (PT)',   appStore: 'pt-PT',      playStore: 'pt-PT',      rtl: false },
  { iso: 'ru',      name: 'Russian',               nativeName: 'Русский',          appStore: 'ru',         playStore: 'ru-RU',      rtl: false },
  { iso: 'it',      name: 'Italian',               nativeName: 'Italiano',         appStore: 'it',         playStore: 'it-IT',      rtl: false },
  { iso: 'nl',      name: 'Dutch',                 nativeName: 'Nederlands',       appStore: 'nl-NL',      playStore: 'nl-NL',      rtl: false },
  { iso: 'pl',      name: 'Polish',                nativeName: 'Polski',           appStore: 'pl',         playStore: 'pl-PL',      rtl: false },
  { iso: 'tr',      name: 'Turkish',               nativeName: 'Türkçe',           appStore: 'tr',         playStore: 'tr-TR',      rtl: false },
  { iso: 'hi',      name: 'Hindi',                 nativeName: 'हिन्दी',             appStore: 'hi',         playStore: 'hi-IN',      rtl: false },
  { iso: 'th',      name: 'Thai',                  nativeName: 'ไทย',               appStore: 'th',         playStore: 'th',         rtl: false },
  { iso: 'vi',      name: 'Vietnamese',            nativeName: 'Tiếng Việt',       appStore: 'vi',         playStore: 'vi',         rtl: false },
  { iso: 'id',      name: 'Indonesian',            nativeName: 'Bahasa Indonesia', appStore: 'id',         playStore: 'id',         rtl: false },
  { iso: 'ms',      name: 'Malay',                 nativeName: 'Bahasa Melayu',    appStore: 'ms',         playStore: 'ms',         rtl: false },
  { iso: 'sv',      name: 'Swedish',               nativeName: 'Svenska',          appStore: 'sv',         playStore: 'sv-SE',      rtl: false },
  { iso: 'no',      name: 'Norwegian',             nativeName: 'Norsk',            appStore: 'no',         playStore: 'no-NO',      rtl: false },
  { iso: 'da',      name: 'Danish',                nativeName: 'Dansk',            appStore: 'da',         playStore: 'da-DK',      rtl: false },
  { iso: 'fi',      name: 'Finnish',               nativeName: 'Suomi',            appStore: 'fi',         playStore: 'fi-FI',      rtl: false },
  { iso: 'el',      name: 'Greek',                 nativeName: 'Ελληνικά',          appStore: 'el',         playStore: 'el-GR',      rtl: false },
  { iso: 'he',      name: 'Hebrew',                nativeName: 'עברית',             appStore: 'he',         playStore: 'iw-IL',      rtl: true  },
  { iso: 'cs',      name: 'Czech',                 nativeName: 'Čeština',          appStore: 'cs',         playStore: 'cs-CZ',      rtl: false },
  { iso: 'sk',      name: 'Slovak',                nativeName: 'Slovenčina',       appStore: 'sk',         playStore: 'sk',         rtl: false },
  { iso: 'hu',      name: 'Hungarian',             nativeName: 'Magyar',           appStore: 'hu',         playStore: 'hu-HU',      rtl: false },
  { iso: 'ro',      name: 'Romanian',              nativeName: 'Română',           appStore: 'ro',         playStore: 'ro',         rtl: false },
  { iso: 'uk',      name: 'Ukrainian',             nativeName: 'Українська',       appStore: 'uk',         playStore: 'uk',         rtl: false },
  { iso: 'ca',      name: 'Catalan',               nativeName: 'Català',           appStore: 'ca',         playStore: 'ca',         rtl: false },
  { iso: 'bg',      name: 'Bulgarian',             nativeName: 'Български',        appStore: 'bg',         playStore: 'bg',         rtl: false },
  { iso: 'hr',      name: 'Croatian',              nativeName: 'Hrvatski',         appStore: 'hr',         playStore: 'hr',         rtl: false },
  { iso: 'sr',      name: 'Serbian',               nativeName: 'Српски',           appStore: 'sr',         playStore: 'sr',         rtl: false },
  { iso: 'sl',      name: 'Slovenian',             nativeName: 'Slovenščina',      appStore: 'sl',         playStore: 'sl',         rtl: false },
  { iso: 'lt',      name: 'Lithuanian',            nativeName: 'Lietuvių',         appStore: 'lt',         playStore: 'lt',         rtl: false },
  { iso: 'lv',      name: 'Latvian',               nativeName: 'Latviešu',         appStore: 'lv',         playStore: 'lv',         rtl: false },
  { iso: 'et',      name: 'Estonian',              nativeName: 'Eesti',            appStore: 'et',         playStore: 'et',         rtl: false },
  { iso: 'fa',      name: 'Persian (Farsi)',       nativeName: 'فارسی',            appStore: 'fa',         playStore: 'fa',         rtl: true  },
  { iso: 'ur',      name: 'Urdu',                  nativeName: 'اردو',              appStore: 'ur',         playStore: 'ur',         rtl: true  },
];

const ISO_INDEX = new Map(LOCALES.map((l) => [l.iso, l]));
const APP_STORE_INDEX = new Map(LOCALES.map((l) => [l.appStore, l]));
const PLAY_STORE_INDEX = new Map(LOCALES.map((l) => [l.playStore, l]));

export function byIso(code) {
  return ISO_INDEX.get(code) || null;
}

export function byAppStore(code) {
  return APP_STORE_INDEX.get(code) || null;
}

export function byPlayStore(code) {
  return PLAY_STORE_INDEX.get(code) || null;
}

export function appStoreCode(iso) {
  const l = ISO_INDEX.get(iso);
  return l ? l.appStore : null;
}

export function playStoreCode(iso) {
  const l = ISO_INDEX.get(iso);
  return l ? l.playStore : null;
}

export function rtlLocales() {
  return LOCALES.filter((l) => l.rtl);
}

export default LOCALES;
