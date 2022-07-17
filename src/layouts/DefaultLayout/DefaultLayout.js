import Header from './Header';
import Navbar from './Navbar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
