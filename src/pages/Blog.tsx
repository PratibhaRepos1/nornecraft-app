import SEO from '../components/SEO';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './Blog.css';

interface BlogPost {
  id: number;
  titleKey: TranslationKey;
  excerptKey: TranslationKey;
  categoryKey: TranslationKey;
  readTimeKey: TranslationKey;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    titleKey: 'blog.post.1.title',
    excerptKey: 'blog.post.1.excerpt',
    categoryKey: 'blog.cat.history',
    readTimeKey: 'blog.readTime.5',
  },
  {
    id: 2,
    titleKey: 'blog.post.2.title',
    excerptKey: 'blog.post.2.excerpt',
    categoryKey: 'blog.cat.culture',
    readTimeKey: 'blog.readTime.7',
  },
  {
    id: 3,
    titleKey: 'blog.post.3.title',
    excerptKey: 'blog.post.3.excerpt',
    categoryKey: 'blog.cat.guide',
    readTimeKey: 'blog.readTime.4',
  },
  {
    id: 4,
    titleKey: 'blog.post.4.title',
    excerptKey: 'blog.post.4.excerpt',
    categoryKey: 'blog.cat.mythology',
    readTimeKey: 'blog.readTime.6',
  },
  {
    id: 5,
    titleKey: 'blog.post.5.title',
    excerptKey: 'blog.post.5.excerpt',
    categoryKey: 'blog.cat.craft',
    readTimeKey: 'blog.readTime.8',
  },
  {
    id: 6,
    titleKey: 'blog.post.6.title',
    excerptKey: 'blog.post.6.excerpt',
    categoryKey: 'blog.cat.history',
    readTimeKey: 'blog.readTime.5',
  },
];

function Blog() {
  const { t } = useTranslation();
  return (
    <div className="blog">
      <SEO
        title={t('blog.heroTitle')}
        description={t('blog.section.subtitle')}
        path="/blog"
      />
      <div className="page-hero">
        <h1>{t('blog.heroTitle')}</h1>
      </div>

      <section className="blog-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('blog.section.title')}</h2>
            <p>{t('blog.section.subtitle')}</p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => {
              const title = t(post.titleKey);
              return (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <span className="blog-category">{t(post.categoryKey)}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span>{t('blog.date.comingSoon')}</span>
                      <span>{t(post.readTimeKey)}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{t(post.excerptKey)}</p>
                    <span
                      className="read-more"
                      aria-label={t('blog.aria.comingSoon', { title })}
                    >
                      {t('blog.readMore')}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
