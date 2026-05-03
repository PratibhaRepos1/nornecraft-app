import { useTranslation } from '../i18n/LanguageContext';
import {
  LANGUAGE_LABELS,
  LANGUAGE_SHORT_LABELS,
  SUPPORTED_LANGUAGES,
} from '../i18n/translations';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t('a11y.languageSwitcher')}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`language-switcher-btn ${
            lang === language ? 'is-active' : ''
          }`}
          onClick={() => setLanguage(lang)}
          aria-pressed={lang === language}
          aria-label={LANGUAGE_LABELS[lang]}
          title={LANGUAGE_LABELS[lang]}
        >
          {LANGUAGE_SHORT_LABELS[lang]}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
