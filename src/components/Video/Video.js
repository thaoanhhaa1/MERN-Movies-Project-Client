import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useMovieDetails } from '~/context/MovieDetails';
import { useTV } from '~/hooks';

const Video = ({ className }) => {
    const { movieDetail } = useMovieDetails();
    const [params] = useSearchParams();
    const isTV = useTV();
    let src = `https://www.youtube.com/embed/${movieDetail.videoKey}`;
    if (isTV)
        src += `/${params.get('seasons') ?? 1}/${params.get('episode') ?? 1}`;

    return (
        <iframe
            className={`aspect-video w-full ${className}`}
            src={src}
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
