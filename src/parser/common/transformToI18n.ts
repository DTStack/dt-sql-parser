import { LOCALE_TYPE } from './types';
import i18n from '../../locale/locale.json';

/**
 * transform message to locale language
 * @param message error msg
 * @param locale language setting
 */
function transformToI18n(message: string, locale: LOCALE_TYPE) {
    const regex = /{([^}]+)}/g;
    return message.replace(
        regex,
        (_, key: keyof (typeof i18n)[typeof locale]) => i18n[locale][key] || ''
    );
}

export { transformToI18n };
