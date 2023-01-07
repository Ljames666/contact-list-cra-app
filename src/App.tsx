import { BrowserRouter } from 'react-router-dom';
import LayoutDefault from './config/layout/LayoutDefault';
import AppRoutes from './routes/AppRoutes';

function App() {
    const Layout = LayoutDefault;
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
