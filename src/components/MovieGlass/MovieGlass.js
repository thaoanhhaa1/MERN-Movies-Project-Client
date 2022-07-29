import { Link } from 'react-router-dom';
import config from '~/config';
import { useSlug } from '~/hooks';
import { StarSolidIcon } from '../Icons';

const MovieGlass = ({ data }) => {
    const slug = useSlug(data.title);

    return (
        <Link
            to={`/movie/${slug}?id=${data.id}`}
            className="relative w-full h-[150px] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
            style={{
                backgroundImage: `url(${config.movieDB.image}${data.backdrop_path})`,
            }}
        >
            <div className="absolute left-0 bottom-0 flex items-center w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur">
                <h4 className="flex-1 font-medium text-white text-sm">
                    {data.title}
                </h4>
                <div className="relative mx-4 w-[1px] h-5 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                <div className="flex gap-1 text-xs text-white">
                    <StarSolidIcon />
                    <span>{data.vote_average}</span>
                </div>
            </div>
        </Link>
    );
};

export default MovieGlass;
