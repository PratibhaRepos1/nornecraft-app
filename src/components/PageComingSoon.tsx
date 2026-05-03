import comingSoonImg from '../assets/images/coming soon.webp';
import SEO from './SEO';
import '../pages/Home.css';
import '../pages/Shop.css';

interface PageComingSoonProps {
  pageTitle: string;
  seoTitle?: string;
  seoDescription?: string;
  path: string;
  message?: string;
}

function PageComingSoon({
  pageTitle,
  seoTitle,
  seoDescription,
  path,
  message,
}: PageComingSoonProps) {
  return (
    <div className="shop">
      <SEO
        title={seoTitle ?? pageTitle}
        description={
          seoDescription ??
          'This page is coming soon. Norne Craft makes Norse-inspired drinking horns, jewelry, and home decor — handcrafted and built to last.'
        }
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
                <h2>Coming Soon</h2>
                <p>
                  {message ??
                    'This page is being prepared. Check back soon for handcrafted Norse-inspired drinking horns, jewelry, and home decor.'}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default PageComingSoon;
