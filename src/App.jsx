import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bitacora from './pages/Bitacora';
import JsonExplorer from './pages/JsonExplorer';
import ApiData from './pages/ApiData';
import Gallery from './pages/Gallery';
import ComponentTree from './pages/ComponentTree';
import MarianaProfile from './pages/profiles/MarianaProfile';
import MarioProfile from './pages/profiles/MarioProfile';
import MikeProfile from './pages/profiles/MikeProfile';
import RaquelProfile from './pages/profiles/RaquelProfile';
import ValeriaProfile from './pages/profiles/ValeriaProfile';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="terminal-theme dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bitacora" element={<Bitacora />} />
              <Route path="/json-explorer" element={<JsonExplorer />} />
              <Route path="/api-data" element={<ApiData />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/component-tree" element={<ComponentTree />} />
              <Route path="/mariana" element={<MarianaProfile />} />
              <Route path="/mario" element={<MarioProfile />} />
              <Route path="/mike" element={<MikeProfile />} />
              <Route path="/raquel" element={<RaquelProfile />} />
              <Route path="/valeria" element={<ValeriaProfile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
