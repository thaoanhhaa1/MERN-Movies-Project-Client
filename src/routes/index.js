import config from '~/config';
import {
    CastDetailsPage,
    HomePage,
    LoginPage,
    MovieDetailPage,
    RegisterPage,
} from '~/pages';

const routes = [
    {
        path: config.routes.home,
        element: HomePage,
    },
    {
        path: config.routes.movieDetail,
        element: MovieDetailPage,
    },
    {
        path: config.routes.cast,
        element: CastDetailsPage,
    },
    {
        path: config.routes.login,
        element: LoginPage,
        layout: null,
    },
    {
        path: config.routes.register,
        element: RegisterPage,
        layout: null,
    },
];

export default routes;
