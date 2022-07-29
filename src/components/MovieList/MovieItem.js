import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import { useWindowDimensions } from '~/hooks';

const MovieItem = ({ hoverImage = true, data, className = '', rounded }) => {
    const { width } = useWindowDimensions();
    const slugTitle = useMemo(
        () =>
            slugify(data.title || '', {
                lower: true,
                strict: true,
                locale: 'vi',
            }),
        [data.title],
    );

    return (
        <div className={className}>
            <Link
                to={`/movie/${slugTitle}?id=${data.id}`}
                className={`flex-1 group relative block ${
                    rounded ? `rounded-[${rounded}]` : 'rounded-2xl'
                } overflow-hidden`}
            >
                <Image
                    alt={data.title}
                    src={config.movieDB.image + data.poster_path}
                />
                {hoverImage && width >= 1024 && (
                    <>
                        <div className="absolute inset-0 bg-black bg-opacity-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 ease-ease duration-300"></div>
                        <Button
                            className="!absolute w-fit top-[60%] left-2/4 font-semibold text-sm z-[5] bg-white -translate-x-2/4 -translate-y-2/4 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-2/4 ease-ease duration-300"
                            rounded
                        >
                            Watch movie
                        </Button>
                    </>
                )}
            </Link>
            <div>
                <h3 className="inline-block">
                    <Link
                        className="my-[0.625em] leading-[1.4] text-base font-semibold text-[#292929] line-clamp-1  ease-linear duration-300 hover:text-primary"
                        to={`/movie/${slugTitle}?id=${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string,
};

export default MovieItem;
