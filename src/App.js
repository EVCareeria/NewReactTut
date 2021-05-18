import {lazy, Suspense} from 'react';
import GlobalStyles from './globalStyles';

const Home = lazy(() => import('./Pages/Home'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

function App() {
  return <> 
      <Suspense fallback={null}>
        <GlobalStyles />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
  </>
}

export default App;
