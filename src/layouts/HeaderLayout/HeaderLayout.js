import Header from '~/layouts/conponents/Header';

const HeaderLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    );
};

export default HeaderLayout;
