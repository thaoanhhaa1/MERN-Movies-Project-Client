import PropTypes from 'prop-types';

const Image = ({ src, alt }) => {
    return <img className="w-full h-full object-cover" src={src} alt={alt} />;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;
