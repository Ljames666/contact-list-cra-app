import { AppRoutes } from '../../routes/RoutesApp';

function NotFound() {
    return (
        <>
            <div>404</div>
        </>
    );
}

const NotFoundConfig: AppRoutes = {
    path: '*',
    element: <NotFound />,
};

export default NotFoundConfig;
