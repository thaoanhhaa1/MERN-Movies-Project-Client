import { memo, useState } from 'react';
import Button from '~/components/Button';
import { MenuIcon, SearchIcon } from '~/components/Icons';
import Logo from '~/components/Logo';
import UserActions from '~/components/UserActions';
import config from '~/config';
import useAuth from '~/context/Auth';
import { useWindowDimensions } from '~/hooks';
import Search from '~/layouts/conponents/Search';

// TODO <= 739px: 80%
// TODO > 739px: 60%

const Header = ({ onClickMenu }) => {
    const { user } = useAuth();
    const [isShowSearch, setShowSearch] = useState(false);
    const { width } = useWindowDimensions();
    const isShowSearchIcon = width <= 739;
    const isMinLg = width >= 1024;

    return (
        <div
            className={`border-b border-[#e8ebed] h-header-pc flex items-center justify-between ${
                isMinLg ? 'pl-5 pr-10' : 'px-5'
            } fixed left-0 w-full top-0 z-[9999] bg-white`}
        >
            {/* Logo */}
            {(isMinLg && <Logo className="flex-1" />) || (
                <div onClick={onClickMenu} className="flex-1 p-2 -ml-2">
                    <MenuIcon className="w-5 h-5" />
                </div>
            )}

            {/* Search */}
            <Search isActive={isShowSearch} />

            {/* Actions */}
            <div className="flex flex-1 justify-end items-center gap-4">
                {isShowSearchIcon && (
                    <span
                        onClick={() =>
                            setShowSearch((isShowSearch) => !isShowSearch)
                        }
                        className="px-3 py-2"
                    >
                        <SearchIcon className="w-[18px] h-[18px]" />
                    </span>
                )}
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
