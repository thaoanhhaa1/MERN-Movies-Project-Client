import { memo, useEffect, useState } from 'react';
import Button from '~/components/Button';
import { MenuIcon, SearchIcon } from '~/components/Icons';
import Logo from '~/components/Logo';
import NavbarMobile from '~/components/NavbarMobile';
import UserActions from '~/components/UserActions';
import config from '~/config';
import useAuth from '~/context/Auth';
import { useWindowDimensions } from '~/hooks';
import Search from '~/layouts/conponents/Search';

const Header = () => {
    const { user } = useAuth();
    const [isShowSearch, setShowSearch] = useState(false);
    const [isShowNavbarMobile, setShowNavbarMobile] = useState(false);
    const { width } = useWindowDimensions();
    const isShowSearchIcon = width <= 739;
    const isMinLg = width >= 1024;

    useEffect(() => {
        document.body.style.overflow =
            isShowNavbarMobile && !isMinLg ? 'hidden' : 'overlay';

        if (isMinLg) setShowNavbarMobile(false);
    }, [isMinLg, isShowNavbarMobile]);

    return (
        <>
            <NavbarMobile
                onCloseNavbarMobile={() => setShowNavbarMobile(false)}
                isShow={isShowNavbarMobile}
            />
            <div
                className={`border-b border-[#e8ebed] h-header-pc flex items-center justify-between ${
                    isMinLg ? 'pl-5 pr-10' : 'px-5'
                } fixed left-0 w-full top-0 z-99 bg-white`}
            >
                {/* Logo */}
                {(isMinLg && <Logo className="flex-1" />) || (
                    <div
                        onClick={() => setShowNavbarMobile(true)}
                        className="tap-highlight-color-transparent cursor-pointer flex-1 p-2 -ml-2"
                    >
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
        </>
    );
};

export default memo(Header);
