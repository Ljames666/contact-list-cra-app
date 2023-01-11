import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Service from '../pages/service/Sevice';
import Portfolio from '../pages/portfolio/Portfolio';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/*" element={<h1>404 - NOT Found</h1>} />
        </Routes>
    );
}

export default AppRoutes;
