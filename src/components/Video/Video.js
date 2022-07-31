import PropTypes from 'prop-types';
import { useMovieDetails } from '~/context/MovieDetails';

// https://2embed.org/embed/${id}/${seasonTv}/${espTv}
// https://2embed.org/embed/${id}
const Video = ({ className }) => {
    const { movieId } = useMovieDetails();
    console.log('🚀 ~ Video ~ movieId', movieId);

    return (
        <iframe
            className={`aspect-video w-full ${className}`}
            src={`https://2embed.org/embed/${movieId}`}
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
