const routes = {
    home: '/',
    movieDetail: '/movie/:slug',
    cast: '/cast/:castId&:castSlug',
    login: '/login',
    register: '/register',
    setting: '/setting',
    personalInformation: '/setting/personal-information',
    personalInformationEdit: '/setting/personal-information/edit',
    favorite: '/setting/favorite',
    category: '/category/:category',
    search: '/search',
    popular: '/popular',
};

export default routes;
