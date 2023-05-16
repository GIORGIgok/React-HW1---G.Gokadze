import './App.css';
import { Header } from './components/common/header';
import { FirstSection } from './components/common/firstSection';
import { BrandArea } from './components/common/brandArea';
import { CountArea } from './components/common/countArea';
import { PortfolioArea } from './components/common/portfolioArea';
import { UiUxSection } from './components/common/uiUxArea';
import { AwesomeCodingArea } from './components/common/awesomeCoding';
import { InnerPageArea } from './components/common/innerPage';
import { SupportPage } from './components/common/supportPage';
import { FeatureArea } from './components/common/featureArea';
import { ResponsiveArea } from './components/common/responsiveArea';
import { EcommerceArea } from './components/common/ecommerceArea';
import { Footer } from './components/common/footer';
import { BgArea } from './components/common/bgArea';

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
