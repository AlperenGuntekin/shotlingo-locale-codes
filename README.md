# @shotlingo/locale-codes

[![npm version](https://img.shields.io/npm/v/@shotlingo/locale-codes.svg)](https://www.npmjs.com/package/@shotlingo/locale-codes)
[![npm downloads](https://img.shields.io/npm/dm/@shotlingo/locale-codes.svg)](https://www.npmjs.com/package/@shotlingo/locale-codes)
[![license](https://img.shields.io/npm/l/@shotlingo/locale-codes.svg)](https://github.com/AlperenGuntekin/shotlingo-locale-codes/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AlperenGuntekin/shotlingo-locale-codes.svg?style=social)](https://github.com/AlperenGuntekin/shotlingo-locale-codes)

> App Store + Google Play locale codes for 40+ supported languages.

Maps ISO 639-1 language codes to **App Store Connect** language codes and
**Google Play Console** language codes — the two are subtly different
(e.g. Hebrew is `he` on iOS but `iw-IL` on Google Play; Simplified Chinese
is `zh-Hans` on iOS but `zh-CN` on Google Play). Includes an RTL flag and
native name per locale.

Maintained alongside [Shotlingo](https://shotlingo.com) — the canonical mapping
this package ships is the one used internally by Shotlingo's screenshot
localization pipeline for 40+ App Store markets.

## Install

```bash
npm install @shotlingo/locale-codes
```

## Usage

```js
import { LOCALES, byIso, appStoreCode, playStoreCode, rtlLocales } from '@shotlingo/locale-codes';

LOCALES.length; // 43

byIso('zh-Hans');
// { iso: 'zh-Hans', name: 'Chinese (Simplified)', nativeName: '简体中文',
//   appStore: 'zh-Hans', playStore: 'zh-CN', rtl: false }

appStoreCode('he');  // 'he'
playStoreCode('he'); // 'iw-IL'  ← different on purpose

rtlLocales().map((l) => l.iso);
// ['ar', 'he', 'fa', 'ur']
```

### Pipe into a fastlane Deliverfile or App Store Connect upload

```ruby
# Deliverfile — only upload metadata for locales App Store Connect accepts
APP_STORE_CONNECT_LOCALES = %w[
  en-US ja de-DE es-ES fr-FR ko zh-Hans zh-Hant ar-SA pt-BR
]
languages(APP_STORE_CONNECT_LOCALES)
```

The package's `LOCALES` array gives you the canonical App Store + Play list
without re-deriving it from scattered Apple / Google docs.

## Companion tool

[**App Store Locale Codes lookup (Shotlingo)**](https://shotlingo.com/tools/app-store-locale-codes) —
interactive search + copy-to-clipboard for every locale. The same dataset,
visually filtered, with the iOS / Play / RTL columns side by side.

[Shotlingo](https://shotlingo.com) localizes App Store screenshots into 40+
languages at the right device sizes in one upload — the locale mapping in
this package is what powers its language selector.

## See also

- [`@shotlingo/screenshot-sizes`](https://www.npmjs.com/package/@shotlingo/screenshot-sizes) — current App Store + Google Play screenshot dimensions per device class (2026).
- [`@shotlingo/text-expansion`](https://www.npmjs.com/package/@shotlingo/text-expansion) — translation length expansion ratios per locale so UI layouts don't break after translation.

## License

MIT © [Alperen Güntekin](https://shotlingo.com)
