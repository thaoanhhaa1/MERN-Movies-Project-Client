import PropTypes from 'prop-types';
import Header from '~/layouts/conponents/Header';
import Footer from '~/layouts/conponents/Footer';

const HeaderLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
            <Footer />
        </div>
    );
};

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
