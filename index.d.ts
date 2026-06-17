export interface Locale {
  iso: string;
  name: string;
  nativeName: string;
  appStore: string;
  playStore: string;
  rtl: boolean;
}

export const LOCALES: Locale[];
export function byIso(code: string): Locale | null;
export function byAppStore(code: string): Locale | null;
export function byPlayStore(code: string): Locale | null;
export function appStoreCode(iso: string): string | null;
export function playStoreCode(iso: string): string | null;
export function rtlLocales(): Locale[];

declare const _default: Locale[];
export default _default;
