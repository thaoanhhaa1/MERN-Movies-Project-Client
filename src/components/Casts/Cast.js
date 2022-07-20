import { Link } from 'react-router-dom';
import Avatar from '~/components/Avatar';
import config from '~/config';

const Cast = ({ data }) => {
    return (
        <div className="inline-block mr-0 w-[140px]">
            <Avatar
                to="/"
                className="w-full h-[140px]"
                alt=""
                src={config.movieDB.image + data.profile_path}
            ></Avatar>
            <h4 className="py-[15px] font-medium text-base text-center">
                <Link to="/">{data.name}</Link>
            </h4>
        </div>
    );
};

export default Cast;
