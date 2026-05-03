import { Link } from 'react-router-dom';
import comingSoonImg from '../assets/images/coming soon.webp';
import logo from '../assets/images/nornecraft logo.webp';
import SEO from '../components/SEO';
import { SITE_URL } from '../lib/seo';
import { useBasePath, withBase } from '../config/site';
import { useTranslation } from '../i18n/LanguageContext';
import './Home.css';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Norne Craft',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/shop?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

function Home() {
  const basePath = useBasePath();
  const { t } = useTranslation();
  return (
    <div className="home">
      <SEO
        title="Ancient Magic, Modern Craft"
        description="Handcrafted Norse-inspired drinking horns, jewelry, and home decor forged with tradition and built to last. Worldwide shipping, 30-day returns."
        path="/"
        jsonLd={homeJsonLd}
      />
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <img src={logo} alt="Norne Craft" className="hero-logo" />
            <h1>{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-buttons">
              <Link to={withBase(basePath, '/shop')} className="btn btn-primary">{t('hero.shopNow')}</Link>
              <Link to={withBase(basePath, '/about')} className="btn btn-outline">{t('hero.ourStory')}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-grid">
            <div className="coming-soon-image">
              <img src={comingSoonImg} alt="Norse craft products" />
            </div>
            <div className="coming-soon-text">
              <h2>{t('comingSoon.title')}</h2>
              <p>{t('comingSoon.homeBody')}</p>
              <p>{t('comingSoon.homeNewsletter')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>{t('features.authentic.title')}</h3>
              <p>{t('features.authentic.body')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <h3>{t('features.love.title')}</h3>
              <p>{t('features.love.body')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
              </div>
              <h3>{t('features.shipping.title')}</h3>
              <p>{t('features.shipping.body')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
