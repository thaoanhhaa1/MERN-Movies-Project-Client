import PropTypes from 'prop-types';
import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({ src, alt, className = '', onError }) => {
    return (
        <LazyLoadImage
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
