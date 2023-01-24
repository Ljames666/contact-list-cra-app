import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFoundConfig from '../pages/not-found/NotFound';
import NavHeader from '../components/nav-header/NavHeader';
import Footer from '../components/footer/Footer';

import { useState } from 'react';

export type AppRoutes = {
    path: string;
    element: JSX.Element;
};

const routes: AppRoutes[] = [NotFoundConfig];

function RoutesApp() {
    return (
        <BrowserRouter>
            <NavHeader />
            <Routes>
                <Route path='/' element={<Home />} />
                {routes.length &&
                    routes.map((Router) => {
                        return <Route path={`/${Router.path}`} element={Router.element} />;
                    })}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;
