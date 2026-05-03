import { useState } from 'react';
import SEO from '../components/SEO';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './FAQ.css';

interface FaqItem {
  qKey: TranslationKey;
  aKey: TranslationKey;
}

interface FaqCategory {
  categoryKey: TranslationKey;
  questions: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    categoryKey: 'faq.cat.products',
    questions: [
      { qKey: 'faq.q.foodSafe.q', aKey: 'faq.q.foodSafe.a' },
      { qKey: 'faq.q.materials.q', aKey: 'faq.q.materials.a' },
      { qKey: 'faq.q.handmade.q', aKey: 'faq.q.handmade.a' },
    ],
  },
  {
    categoryKey: 'faq.cat.shipping',
    questions: [
      { qKey: 'faq.q.shipTime.q', aKey: 'faq.q.shipTime.a' },
      { qKey: 'faq.q.intl.q', aKey: 'faq.q.intl.a' },
      { qKey: 'faq.q.track.q', aKey: 'faq.q.track.a' },
    ],
  },
  {
    categoryKey: 'faq.cat.returns',
    questions: [
      { qKey: 'faq.q.return.q', aKey: 'faq.q.return.a' },
      { qKey: 'faq.q.care.q', aKey: 'faq.q.care.a' },
      { qKey: 'faq.q.custom.q', aKey: 'faq.q.custom.a' },
    ],
  },
];

function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  // JSON-LD always uses the visible (current-language) text so search engines
  // index whatever the user actually sees.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap((cat) =>
      cat.questions.map((item) => ({
        '@type': 'Question',
        name: t(item.qKey),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(item.aKey),
        },
      }))
    ),
  };

  return (
    <div className="faq">
      <SEO
        title={t('faq.heroTitle')}
        description={t('faq.section.subtitle')}
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <div className="page-hero">
        <h1>{t('faq.heroTitle')}</h1>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('faq.section.title')}</h2>
            <p>{t('faq.section.subtitle')}</p>
          </div>

          <div className="faq-content">
            {faqData.map((category) => (
              <div key={category.categoryKey} className="faq-category">
                <h3 className="faq-category-title">{t(category.categoryKey)}</h3>
                <div className="faq-list">
                  {category.questions.map((item, idx) => {
                    const key = `${category.categoryKey}-${idx}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={key}
                        className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                      >
                        <button
                          className="faq-question"
                          onClick={() => toggleQuestion(key)}
                          aria-expanded={isOpen}
                        >
                          <span>{t(item.qKey)}</span>
                          <svg
                            className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{t(item.aKey)}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
