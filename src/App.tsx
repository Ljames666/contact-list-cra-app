import React from 'react';
import Home from './pages/home/Home';
import LayoutDefault from './config/layout/LayoutDefault';

function App() {
    const Layout = LayoutDefault;
    return (
        <Layout>
            <Home />
        </Layout>
    );
}

export default App;
