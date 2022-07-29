import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FireSolidIcon, HomeSolidIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Navbar.module.scss';
import NavItem from './NavItem';

const cx = classNames.bind(styles);

const Navbar = ({ className = '' }) => {
    return (
        <div>
            <div
                className={`${cx('navbar', {
                    [className]: className,
                })} flex-shrink-0 px-2 py-4 sticky top-[var(--header-pc-height)]`}
            >
                <NavItem
                    to={config.routes.home}
                    icon={<HomeSolidIcon width="20px" height="20px" />}
                >
                    Home
                </NavItem>
                <NavItem
                    to={config.routes.popular}
                    icon={<FireSolidIcon width="20px" height="20px" />}
                >
                    Popular
                </NavItem>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    className: PropTypes.string,
};

export default Navbar;
