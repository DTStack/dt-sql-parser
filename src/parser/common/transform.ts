import { LOCALE_TYPE } from './types';
import { i18n } from '../../locale/locale';

/**
 * transform message to locale language
 * @param message error msg
 * @param locale language setting
 */
function transform(message: string, locale: LOCALE_TYPE) {
    const regex = /{([^}]+)}/g;
    return message.replace(
        regex,
        (_, key: keyof (typeof i18n)[typeof locale]) => i18n[locale][key] || ''
    );
}

export { transform };
