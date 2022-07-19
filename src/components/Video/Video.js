import PropTypes from 'prop-types';
import { useMovieDetails } from '~/context/MovieDetails';

const Video = ({ className }) => {
    const { video } = useMovieDetails();

    return (
        <iframe
            className={`aspect-video w-full ${className}`}
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

Video.propTypes = {
    className: PropTypes.string,
};

export default Video;
