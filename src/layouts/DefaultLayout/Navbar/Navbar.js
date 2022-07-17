import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import NavItem from './NavItem';
import PropTypes from 'prop-types';
import { HomeSolidIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

const Navbar = ({ className }) => {
    return (
        <div
            className={`${cx('navbar', {
                [className]: className,
            })} flex-shrink-0 px-2 pt-4`}
        >
            <NavItem
                to={config.routes.home}
                icon={<HomeSolidIcon width="20px" height="20px" />}
            >
                Home
            </NavItem>
        </div>
    );
};

Navbar.propTypes = {
    className: PropTypes.string,
};

export default Navbar;
