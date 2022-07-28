import PropTypes from 'prop-types';
import { memo } from 'react';

const Image = ({ src, alt, className = '', onError }) => {
    return (
        <img
            className={`${className} w-full h-full object-cover`}
            src={src}
            alt={alt}
            onError={onError}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    onError: PropTypes.func,
};

export default memo(Image);
