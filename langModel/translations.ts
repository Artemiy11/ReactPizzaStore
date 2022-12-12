export interface Translations {
  [key: string]: {[key: string]: string};
}
const translations: Translations = {
  'Привет мир': {en: 'Hello, World!'},
};

export default translations;
