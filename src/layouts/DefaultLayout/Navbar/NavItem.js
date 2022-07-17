import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const NavItem = ({ to, icon, children, className }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `h-20 mb-2 flex flex-col items-center justify-center text-[#404040] rounded-xl transition-all hover:text-[#1a1a1a] hover:bg-[#f5f5f5] ${cx(
                    'nav-item',
                    {
                        active: isActive,
                    },
                )}`
            }
        >
            {icon}
            <span className="text-[11px] font-semibold mt-[6px]">
                {children}
            </span>
        </NavLink>
    );
};

export default NavItem;
