import { v4 } from 'uuid';
import { HeartSolidIcon, LogOutIcon, UserSolidIcon } from '~/components/Icons';
import config from '~/config';
import signOutFirebase from '~/firebase/signOutFirebase';
import NavbarItem from './NavbarItem';

const navMenu = [
    {
        title: 'Personal information',
        to: config.routes.personalInformation,
        icon: UserSolidIcon,
    },
    {
        title: 'Favourite',
        to: config.routes.favorite,
        icon: HeartSolidIcon,
    },
    {
        title: 'Logout',
        to: config.routes.home,
        icon: LogOutIcon,
        onClick: signOutFirebase,
    },
];

const Navbar = () => {
    return (
        <div className="w-3/12">
            <ul className="flex flex-col gap-[10px] shadow-md py-[15px] rounded-[10px]">
                {navMenu.map(({ title, ...props }) => (
                    <NavbarItem key={v4()} {...props}>
                        {title}
                    </NavbarItem>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
