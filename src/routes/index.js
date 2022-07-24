import config from '~/config';
import { CastDetailsPage, HomePage, MovieDetailPage } from '~/pages';

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
];

export default routes;
