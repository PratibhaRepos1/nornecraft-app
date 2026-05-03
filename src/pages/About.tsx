import comingSoonImg from '../assets/images/coming soon.webp';
import SEO from '../components/SEO';
import { useTranslation } from '../i18n/LanguageContext';
import './About.css';

function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <SEO
        title={t('about.heroTitle')}
        description={t('about.story.p1')}
        path="/about"
      />
      <div className="page-hero">
        <h1>{t('about.heroTitle')}</h1>
      </div>

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={comingSoonImg} alt={t('about.imageAlt')} />
            </div>
            <div className="about-text">
              <h2>{t('about.story.title')}</h2>
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('about.values.title')}</h2>
            <p>{t('about.values.subtitle')}</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>{t('about.values.authenticity.title')}</h3>
              <p>{t('about.values.authenticity.body')}</p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>{t('about.values.quality.title')}</h3>
              <p>{t('about.values.quality.body')}</p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>{t('about.values.sustainability.title')}</h3>
              <p>{t('about.values.sustainability.body')}</p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>{t('about.values.community.title')}</h3>
              <p>{t('about.values.community.body')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
