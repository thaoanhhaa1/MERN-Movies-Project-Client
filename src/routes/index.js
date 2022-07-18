import config from '~/config';
import { HomePage, MovieDetailPage } from '~/pages';

const routes = [
    {
        path: config.routes.home,
        element: HomePage,
    },
    {
        path: config.routes.movieDetail,
        element: MovieDetailPage,
    },
];

export default routes;
