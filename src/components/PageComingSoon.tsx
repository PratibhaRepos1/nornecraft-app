import comingSoonImg from '../assets/images/coming soon.webp';
import SEO from './SEO';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import '../pages/Home.css';
import '../pages/Shop.css';

interface PageComingSoonProps {
  titleKey: TranslationKey;
  path: string;
  bodyKey?: TranslationKey;
  seoDescription?: string;
}

function PageComingSoon({
  titleKey,
  path,
  bodyKey = 'comingSoon.pageBody',
  seoDescription,
}: PageComingSoonProps) {
  const { t } = useTranslation();
  const pageTitle = t(titleKey);
  return (
    <div className="shop">
      <SEO
        title={pageTitle}
        description={seoDescription ?? t(bodyKey)}
        path={path}
      />
      <div className="page-hero">
        <h1>{pageTitle}</h1>
      </div>

      <section className="shop-content">
        <div className="container">
          <section className="coming-soon-section shop-coming-soon">
            <div className="coming-soon-grid">
              <div className="coming-soon-image">
                <img src={comingSoonImg} alt="Norse craft products" />
              </div>
              <div className="coming-soon-text">
                <h2>{t('comingSoon.title')}</h2>
                <p>{t(bodyKey)}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default PageComingSoon;
