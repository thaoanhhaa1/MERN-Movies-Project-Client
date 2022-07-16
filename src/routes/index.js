import config from '~/config';
import { HomePage } from '~/pages';

const routes = [
    {
        path: config.routes.home,
        element: HomePage,
    },
];

export default routes;
