import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { LogoIcon } from '~/components/Icons';
import UserActions from '~/components/UserActions';
import config from '~/config';
import useAuth from '~/context/Auth';
import Search from '~/layouts/conponents/Search';

const Header = () => {
    const { user } = useAuth();

    return (
        <div className="border-b border-[#e8ebed] h-header-pc flex items-center justify-between px-7 sticky top-0 z-10 bg-white">
            {/* Logo */}
            <div className="flex flex-1 items-center">
                <Link to={config.routes.home}>
                    <LogoIcon width="38px" height="38px" />
                </Link>
                <h5 className="ml-4 font-bold text-sm text-black">WMovies</h5>
            </div>

            {/* Search */}
            <Search />

            {/* Actions */}
            <div className="flex flex-1 justify-end items-center gap-4">
                {(user?.email && <UserActions />) || (
                    <Button to={config.routes.login} primary rounded>
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
};

export default memo(Header);
