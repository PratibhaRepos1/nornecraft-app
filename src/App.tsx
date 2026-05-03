import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminGate from './components/AdminGate';
import PageComingSoon from './components/PageComingSoon';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import {
  ADMIN_BASE_PATH,
  BasePathProvider,
  SHOW_COMING_SOON_ONLY,
} from './config/site';
import { useTranslation } from './i18n/LanguageContext';
import './App.css';

function FullSiteRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
}

// Public-facing routes when SHOW_COMING_SOON_ONLY is true:
// the Home page is real; every other page renders the inline Coming Soon banner
// inside the normal Header/Footer layout.
function PublicComingSoonRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="shop"
        element={<PageComingSoon titleKey="nav.shop" path="/shop" bodyKey="comingSoon.shopBody" />}
      />
      <Route
        path="about"
        element={<PageComingSoon titleKey="nav.about" path="/about" />}
      />
      <Route
        path="contact"
        element={<PageComingSoon titleKey="nav.contact" path="/contact" />}
      />
      <Route
        path="blog"
        element={<PageComingSoon titleKey="nav.blog" path="/blog" />}
      />
      <Route
        path="faq"
        element={<PageComingSoon titleKey="nav.faq" path="/faq" />}
      />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
}

function SiteLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <div className="app">
      <a href="#main" className="skip-link">{t('a11y.skipToMain')}</a>
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function PublicRoot() {
  return (
    <BasePathProvider value="">
      <SiteLayout>
        {SHOW_COMING_SOON_ONLY ? <PublicComingSoonRoutes /> : <FullSiteRoutes />}
      </SiteLayout>
    </BasePathProvider>
  );
}

function AdminRoot() {
  return (
    <AdminGate>
      <BasePathProvider value={ADMIN_BASE_PATH}>
        <SiteLayout>
          <FullSiteRoutes />
        </SiteLayout>
      </BasePathProvider>
    </AdminGate>
  );
}

function App() {
  return (
    <Routes>
      <Route path={`${ADMIN_BASE_PATH}/*`} element={<AdminRoot />} />
      <Route path="/*" element={<PublicRoot />} />
    </Routes>
  );
}

export default App;
