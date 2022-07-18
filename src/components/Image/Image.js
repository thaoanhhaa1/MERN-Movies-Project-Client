import PropTypes from 'prop-types';

const Image = ({ src, alt, className }) => {
    return (
        <img
            className={`${className} w-full h-full object-cover`}
            src={src}
            alt={alt}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Image;
