import './App.css';
import { Header } from './components/common/header';
import { FirstSection } from './components/common/first-section';
import { BrandArea } from './components/common/brand-area';
import { CountArea } from './components/common/count-area';
import { PortfolioArea } from './components/common/portfolio-area';
import { UiUxSection } from './components/common/uiux-area-title';
import { AwesomeCodingArea } from './components/common/awesome-coding';
import { InnerPageArea } from './components/common/inner-page';
import { SupportPage } from './components/common/support-page';
import { FeatureArea } from './components/common/feature-area';
import { ResponsiveArea } from './components/common/responsive-area';
import { EcommerceArea } from './components/common/ecommerce-area';
import { Footer } from './components/common/footer';
import { BgArea } from './components/common/bg-area';

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <BrandArea />
      <CountArea />
      <PortfolioArea />
      <UiUxSection />
      <AwesomeCodingArea />
      <InnerPageArea />
      <SupportPage />
      <FeatureArea />
      <BgArea />
      <ResponsiveArea />
      <EcommerceArea />
      <Footer />
    </>
  );
}

export default App;
