import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import config from '~/config';
import { useWindowDimensions } from '~/hooks';
import { HomeSolidIcon, TVIcon } from '../Icons';
import Logo from '../Logo';

const navbar = [
    {
        to: config.routes.home,
        icon: HomeSolidIcon,
        title: 'Home',
    },
    {
        to: config.routes.tv,
        icon: TVIcon,
        title: 'TV',
    },
];

const NavbarMobile = ({ isShow, onCloseNavbarMobile }) => {
    const { width } = useWindowDimensions();
    const isMinXs = width >= 350;

    return (
        <div
            onClick={onCloseNavbarMobile}
            className={`${
                isShow ? 'visible opacity-100' : 'invisible opacity-0'
            } z-[99999] fixed inset-0 bg-[rgba(0,0,0,0.3)] transition-all duration-500 ease-ease`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                    isShow ? 'translate-x-0' : '-translate-x-full'
                } absolute top-0 left-0 bottom-0 w-3/5 bg-white transition-all duration-500 ease-ease`}
            >
                <div
                    className={`py-4 ${
                        isMinXs ? 'pl-8' : 'pl-4'
                    } overflow-auto max-h-full`}
                >
                    <Logo className="my-8 ml-5" />
                    <div>
                        {navbar.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    onClick={onCloseNavbarMobile}
                                    key={v4()}
                                    className={({ isActive }) =>
                                        `flex p-5 ${
                                            isActive
                                                ? 'text-[#292929] bg-[#f0f0f0]'
                                                : 'text-[#333]'
                                        } hover:text-[#292929] hover:bg-[#f0f0f0] transition-all duration-300 rounded-[5px]`
                                    }
                                    to={item.to}
                                >
                                    <Icon className="w-5 h-5 mr-4" />
                                    <span>{item.title}</span>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarMobile;
