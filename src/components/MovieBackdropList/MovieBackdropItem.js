import { Link } from 'react-router-dom';
import config from '~/config';
import Image from '../Image';

const MovieBackdropItem = ({ data }) => {
    return (
        <div className="pb-5 select-none">
            <Link to="/" className="block rounded overflow-hidden">
                <Image
                    alt=""
                    src={`${config.movieDB.image}${data.backdrop_path}`}
                ></Image>
            </Link>
            <div>
                <h3 className="font-medium text-base mt-[15px] mb-[5px] hover:text-primary ease-ease duration-300">
                    <Link to="/">{data.title}</Link>
                </h3>
            </div>
        </div>
    );
};

export default MovieBackdropItem;
