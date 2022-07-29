import { memo } from 'react';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import UserActions from '~/components/UserActions';
import config from '~/config';
import useAuth from '~/context/Auth';
import Search from '~/layouts/conponents/Search';

const Header = () => {
    const { user } = useAuth();

    return (
        <div className="border-b border-[#e8ebed] h-header-pc flex items-center justify-between px-7 sticky top-0 z-50 bg-white">
            {/* Logo */}
            <Logo className="flex-1" />

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
