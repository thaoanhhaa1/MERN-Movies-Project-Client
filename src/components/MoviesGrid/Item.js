import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Image from '~/components/Image';
import config from '~/config';

const Item = ({ data }) => {
    const to = useMemo(
        () =>
            `/movie/${slugify(data.title || '', {
                locale: 'vi',
                lower: true,
                strict: true,
            })}?id=${data.id}`,
        [data.id, data.title],
    );

    return (
        <div>
            <Link className="block aspect-video" to={to}>
                <Image
                    alt={data.title}
                    src={`${
                        data?.backdrop_path
                            ? config.movieDB.image + data?.backdrop_path
                            : config.imageBackup
                    }`}
                />
            </Link>
            <h2 className="my-2 font-medium text-base hover:text-primary ease-linear duration-300 cursor-pointer">
                <Link to={to}>{data.title}</Link>
            </h2>
        </div>
    );
};

Item.propTypes = {
    data: PropTypes.shape({
        backdrop_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Item;
