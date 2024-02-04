import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import { HashRouter } from "react-router-dom";
import About from './pages/About';

import  Contact from './pages/Contact';

import Portfolio from './pages/Portfolio';

import Resume from './pages/Resume';
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Header/>
    <HashRouter basename="/app">
      <Routes>
        <Route path="/" element={About}/> {/* 👈 Renders at /#/app/ */}
        <Route path="/portfolio" element={Portfolio}/> {/* 👈 Renders at /#/app/ */}
        <Route path="/resume" element={Resume}/> {/* 👈 Renders at /#/app/ */}
        <Route path="/contact" element={Contact}/> {/* 👈 Renders at /#/app/ */}

      </Routes>
    </HashRouter>
      
      
    </>
  );
}

export default App;



 