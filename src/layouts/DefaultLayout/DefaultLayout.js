import Header from './Header';
import Navbar from './Navbar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <Navbar />
                <div className="w-[calc(100vw_-_var(--navbar-width))] pr-10 pl-5 mt-4 pb-20">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
