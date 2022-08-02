import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NavbarMobile from '~/components/NavbarMobile';
import { useWindowDimensions } from '~/hooks';
import Footer from '~/layouts/conponents/Footer';
import Header from '~/layouts/conponents/Header';
import Navbar from './Navbar';

const DefaultLayout = ({ children }) => {
    const { width } = useWindowDimensions();
    const [isShowNavbarMobile, setShowNavbarMobile] = useState(false);
    const isMinLg = width >= 1024;

    useEffect(() => {
        if (isShowNavbarMobile && !isMinLg)
            document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isMinLg, isShowNavbarMobile]);

    return (
        <div>
            <Header onClickMenu={() => setShowNavbarMobile(true)} />
            <div className="flex pt-[var(--header-pc-height)]">
                {(isMinLg && <Navbar />) || (
                    <NavbarMobile
                        onCloseNavbarMobile={() => setShowNavbarMobile(false)}
                        isShow={isShowNavbarMobile}
                    />
                )}
                <div
                    className={`max-w-[1920px] ${
                        isMinLg
                            ? 'pl-7 pr-10 w-[calc(100vw_-_var(--navbar-width))]'
                            : 'px-5 w-screen'
                    } mt-4 mx-auto pb-20`}
                >
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
