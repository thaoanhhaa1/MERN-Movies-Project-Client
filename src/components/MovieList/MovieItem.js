import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Button from '../Button';

const MovieItem = () => {
    return (
        <div>
            <Link
                to="/"
                className="group relative block rounded-2xl overflow-hidden"
            >
                <Image
                    alt=""
                    src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 ease-ease duration-300"></div>
                <Button
                    className="absolute top-2/4 left-2/4 font-semibold text-sm z-10 bg-white -translate-x-2/4 -translate-y-2/4"
                    rounded
                >
                    Watch movie
                </Button>
            </Link>
            <div>
                <h3>
                    <Link
                        className="my-[0.625em] leading-[1.4] text-base font-semibold text-[#292929] line-clamp-1"
                        to="/"
                    >
                        HTML, CSS từ Zero đến Hero
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default MovieItem;
