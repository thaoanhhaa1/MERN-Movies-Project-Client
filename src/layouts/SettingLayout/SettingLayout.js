import PropTypes from 'prop-types';
import Footer from '~/layouts/conponents/Footer';
import Header from '~/layouts/conponents/Header';
import Navbar from './Navbar';

const SettingLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div className="w-full max-w-5xl mx-auto mb-10 pt-[55px] flex gap-5">
                <Navbar />
                <div className="w-8/12">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

SettingLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SettingLayout;
