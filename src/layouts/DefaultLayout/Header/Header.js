import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { LogoIcon } from '~/components/Icons';
import config from '~/config';
import Search from '~/layouts/conponents/Search';

const Header = () => {
    return (
        <div className="border-b border-[#e8ebed] h-header-pc flex items-center justify-between px-7">
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
                <Button primary rounded>
                    Button
                </Button>
                {/* <Avatar
                    to="/"
                    className="w-avatar h-avatar"
                    alt="Avatar"
                    src="https://graph.facebook.com/2563055210655657/picture?width=400&height=400"
                ></Avatar> */}
            </div>
        </div>
    );
};

export default Header;
