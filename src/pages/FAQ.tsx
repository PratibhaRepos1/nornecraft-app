import { useState } from 'react';
import SEO from '../components/SEO';
import './FAQ.css';

const faqData = [
  {
    category: 'Products',
    questions: [
      {
        q: 'Are your drinking horns food-safe?',
        a: 'Yes! All our drinking horns are thoroughly cleaned, polished, and sealed with a food-grade coating, making them completely safe for drinking beverages.',
      },
      {
        q: 'What materials do you use?',
        a: 'We use ethically sourced natural materials including genuine ox horn, sustainably harvested wood, hand-forged metals, and natural leather. Each material is carefully selected for quality and authenticity.',
      },
      {
        q: 'Are the products handmade?',
        a: 'Yes, every piece is handcrafted by skilled artisans. Due to the handmade nature of our products, slight variations in color, size, and pattern are normal and make each piece unique.',
      },
    ],
  },
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Domestic orders typically arrive within 5-7 business days. International shipping takes 10-20 business days depending on location. Express shipping options are available at checkout.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship worldwide! Shipping costs and delivery times vary by location. All international orders are carefully packaged to ensure safe arrival.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely! Once your order ships, you will receive an email with a tracking number so you can follow your package every step of the way.',
      },
    ],
  },
  {
    category: 'Returns & Care',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy for unused items in their original packaging. Custom orders are non-refundable. Please contact us to initiate a return.',
      },
      {
        q: 'How do I care for my drinking horn?',
        a: 'Hand wash with warm water and mild soap. Do not use a dishwasher or microwave. Avoid hot liquids above 60 degrees Celsius. Occasionally apply a thin layer of food-grade oil to maintain the finish.',
      },
      {
        q: 'Do you offer custom orders?',
        a: 'Yes! We love creating custom pieces. Whether it is a personalized engraving or a bespoke design, contact us with your ideas and we will work together to bring your vision to life.',
      },
    ],
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.flatMap((cat) =>
    cat.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="faq">
      <SEO
        title="FAQ"
        description="Answers about Norne Craft products, shipping, returns, and care: are drinking horns food-safe, do you ship internationally, what is your return policy."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <div className="page-hero">
        <h1>FAQ</h1>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our products and services</p>
          </div>

          <div className="faq-content">
            {faqData.map((category) => (
              <div key={category.category} className="faq-category">
                <h3 className="faq-category-title">{category.category}</h3>
                <div className="faq-list">
                  {category.questions.map((item, idx) => {
                    const key = `${category.category}-${idx}`;
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
                          <span>{item.q}</span>
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
                            <p>{item.a}</p>
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
