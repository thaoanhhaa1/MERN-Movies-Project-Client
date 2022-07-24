import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Avatar from '~/components/Avatar';
import config from '~/config';
import PropTypes from 'prop-types';

const Cast = ({ data }) => {
    return (
        <div className="inline-block mr-0 w-[140px] select-none">
            <Avatar
                to={`/cast/${data.id}&${slugify(data.name, {
                    locale: 'vi',
                    lower: true,
                    strict: true,
                })}`}
                className="w-full h-[140px]"
                alt=""
                src={config.movieDB.image + data.profile_path}
            ></Avatar>
            <h4 className="py-[15px] font-medium text-base text-center">
                <Link
                    to={`/cast/${data.id}&${slugify(data.name, {
                        locale: 'vi',
                        lower: true,
                        strict: true,
                    })}`}
                >
                    {data.name}
                </Link>
            </h4>
        </div>
    );
};

Cast.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cast;
