import {NativeModules, Platform} from 'react-native';
import translations from './translations';
import store from '../store';

const RU_LANGS = [
  'ru',
  'az',
  'am',
  'by',
  'ge',
  'kz',
  'kg',
  'md',
  'tj',
  'tm',
  'uz',
  'ua',
];

class LangModel {
  lang = 'en';

  constructor() {
    this.init();
  }

  async init() {
    const lang = store.language;
    if (store.language === '') {
      let deviceLanguage = (
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
          : NativeModules.I18nManager.localeIdentifier
      ).toLowerCase();
      if (RU_LANGS.findIndex(rulang => deviceLanguage.includes(rulang)) > -1) {
        this.lang = 'ru';
      }
      store.changeLanguage(this.lang);
    } else {
      this.lang = lang;
    }
  }

  rk(text) {
    if (!text) {
      return text;
    }
    // если локаль ru, то переводить не нужно
    if (this.lang === 'ru') {
      return text;
    }
    // если перевода нет, кинем предупреждение
    if (
      translations[text] === undefined ||
      translations[text][this.lang] === undefined
    ) {
      // console.warn(text);
      return text;
    }

    return translations[text][this.lang];
  }
}

export default new LangModel();
