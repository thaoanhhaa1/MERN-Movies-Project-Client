import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import FooterItem from './FooterItem';

const FooterCol = ({ children, menu, className = '' }) => {
    return (
        <div className={className}>
            <h3 className="font-semibold text-lg text-white uppercase">
                {children}
            </h3>
            <div className="mt-[15px] flex flex-col gap-2">
                {menu?.map((item) => (
                    <FooterItem key={v4()} icon={item.icon}>
                        {item.title}
                    </FooterItem>
                ))}
            </div>
        </div>
    );
};

FooterCol.propTypes = {
    children: PropTypes.node.isRequired,
    menu: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default FooterCol;
