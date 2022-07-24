import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import config from '~/config';
import Image from '../Image';
import PropTypes from 'prop-types';

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
            <Link className="block" to={to}>
                <Image
                    alt=""
                    src={`${config.movieDB.image}${data.backdrop_path}`}
                ></Image>
            </Link>
            <h2 className="my-2 font-medium text-base hover:text-primary ease-linear duration-300 cursor-pointer">
                <Link to={to}>{data.title}</Link>
            </h2>
        </div>
    );
};

Item.propTypes = {
    data: PropTypes.shape({
        backdrop_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Item;
