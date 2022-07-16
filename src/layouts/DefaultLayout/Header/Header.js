import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { CloseIcon, LogoIcon, SearchIcon } from '~/components/Icons';
import config from '~/config';

const Header = () => {
    return (
        <div className="border-b border-[#e8ebed] h-header-pc flex items-center justify-between px-7">
            <div className="flex flex-1 items-center">
                <Link to={config.routes.home}>
                    <LogoIcon width="38px" height="38px" />
                </Link>
                <h5 className="ml-4 font-bold text-sm text-black">WMovies</h5>
            </div>
            <div className="focus-within:border-[#444] transition-all duration-300 h-search flex flex-1 items-center border-2 border-[#e8e8e8] rounded-full overflow-hidden">
                <span className="cursor-pointer flex items-center px-2 h-full text-[#7c7c7c]">
                    <SearchIcon width="24px" height="24px"></SearchIcon>
                </span>
                <input
                    className="text-sm leading-[1.15] search__input px-2 h-full flex-1 outline-none border-0"
                    type="text"
                    placeholder="Search movies..."
                />
                <span className="cursor-pointer text-[#7b7b7b] p-2">
                    <CloseIcon width="20px" height="20px"></CloseIcon>
                </span>
            </div>
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
