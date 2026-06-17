# @shotlingo/locale-codes

> App Store + Google Play locale code reference for 40+ supported languages.

Maps ISO 639-1 language codes to **App Store Connect** language codes and
**Google Play Console** language codes — the two are subtly different
(e.g. Hebrew is `he` on iOS but `iw-IL` on Google Play; Simplified Chinese
is `zh-Hans` on iOS but `zh-CN` on Google Play). Includes RTL flag.

## Install

```bash
npm install @shotlingo/locale-codes
```

## Usage

```js
import { LOCALES, byIso, appStoreCode, playStoreCode, rtlLocales } from '@shotlingo/locale-codes';

LOCALES.length; // 42

byIso('zh-Hans');
// { iso: 'zh-Hans', name: 'Chinese (Simplified)', nativeName: '简体中文',
//   appStore: 'zh-Hans', playStore: 'zh-CN', rtl: false }

appStoreCode('he');  // 'he'
playStoreCode('he'); // 'iw-IL'  ← different on purpose

rtlLocales().map((l) => l.iso);
// ['ar', 'he', 'fa', 'ur']
```

## Why this exists

Indie iOS/Android developers shipping to multiple App Store markets keep
re-deriving this mapping from scattered Apple docs + Google Play console
hints. This package extracts it once, from the canonical mapping used
internally by [Shotlingo](https://shotlingo.com) (an AI-powered App Store
screenshot localization tool that supports 40+ markets), and republishes
it as a standalone reference.

## License

MIT © [Alperen Güntekin](https://shotlingo.com)
