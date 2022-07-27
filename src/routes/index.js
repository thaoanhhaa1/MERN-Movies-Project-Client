import config from '~/config';
import HeaderLayout from '~/layouts/HeaderLayout';
import SettingLayout from '~/layouts/SettingLayout';
import {
    CastDetailsPage,
    HomePage,
    LoginPage,
    MovieDetailPage,
    PersonalInformation,
    RegisterPage,
} from '~/pages';
import EditProfileUser from '~/pages/EditProfileUser';

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
    {
        path: config.routes.personalInformation,
        element: PersonalInformation,
        layout: SettingLayout,
    },
    {
        path: config.routes.personalInformationEdit,
        element: EditProfileUser,
        layout: HeaderLayout,
    },
];

export default routes;
