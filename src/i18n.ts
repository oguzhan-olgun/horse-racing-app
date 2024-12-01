import { createI18n } from 'vue-i18n';
import en from './locales/en.json';


const messages = {
    en
};

const i18n = createI18n({
    locale: 'en', // Default locale
    fallbackLocale: 'en', // Fallback locale if a translation is missing
    messages,
});

export default i18n;
