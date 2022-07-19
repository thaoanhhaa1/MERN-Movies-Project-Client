import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt, to, href, className = '', onError }) => {
    let Component = 'span';
    const props = {};

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    return (
        <Component
            {...props}
            className={`${className} block rounded-full overflow-hidden`}
        >
            <Image onError={onError} src={src} alt={alt} />
        </Component>
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Avatar;
