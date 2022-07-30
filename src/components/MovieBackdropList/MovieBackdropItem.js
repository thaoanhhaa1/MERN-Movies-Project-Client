import { Link } from 'react-router-dom';
import slugify from 'slugify';
import config from '~/config';
import Image from '~/components/Image';
import PropTypes from 'prop-types';

const MovieBackdropItem = ({ data, render }) => {
    if (!data) return null;

    return (
        <div className="pb-5 select-none">
            <Link
                to={`/movie/${slugify(data.title || '', {
                    locale: 'vi',
                    lower: true,
                    strict: true,
                })}?id=${data.id}`}
                className="aspect-video group relative block rounded overflow-hidden"
            >
                <Image
                    alt=""
                    src={`${
                        data?.backdrop_path
                            ? config.movieDB.image + data?.backdrop_path
                            : config.imageBackup
                    }`}
                ></Image>
                {render}
            </Link>
            <div>
                <h3 className="inline-block line-clamp-1 font-medium text-base mt-[15px] mb-[5px]">
                    <Link
                        to={`/movie/${slugify(data.title || '', {
                            locale: 'vi',
                            lower: true,
                            strict: true,
                        })}?id=${data.id}`}
                        className="hover:text-primary ease-ease duration-300"
                    >
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

MovieBackdropItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        backdrop_path: PropTypes.string,
    }).isRequired,
    render: PropTypes.node,
};

export default MovieBackdropItem;
