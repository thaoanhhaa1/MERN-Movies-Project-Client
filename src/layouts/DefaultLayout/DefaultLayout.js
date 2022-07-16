import Header from './Header';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default DefaultLayout;
