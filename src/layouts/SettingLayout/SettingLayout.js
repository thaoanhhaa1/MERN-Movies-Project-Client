import Header from '~/layouts/conponents/Header';
import Navbar from './Navbar';

const SettingLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div className="w-full max-w-5xl mx-auto pt-[55px] flex gap-5">
                <Navbar />
                <div className="w-8/12">{children}</div>
            </div>
        </div>
    );
};

export default SettingLayout;
