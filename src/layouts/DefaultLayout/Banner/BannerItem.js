import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Button from '~/components/Button';
import config from '~/config';

const BannerItem = ({ data }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${
                    config.movieDB.image + data.backdrop_path
                })`,
            }}
            className="min-h-[350px] rounded-xl bg-cover bg-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-9 w-full max-w-[640px]">
                <h1 className="mb-2 text-[32px] font-bold leading-normal text-white">
                    <Link
                        to={`/movie/${slugify(data.title || '', {
                            locale: 'vi',
                            lower: true,
                            strict: true,
                        })}?id=${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h1>
                <p className="mb-6 text-white leading-[1.6] line-clamp-3">
                    {data.overview}
                </p>
                <Button
                    to={`/movie/${slugify(data.title || '', {
                        locale: 'vi',
                        lower: true,
                        strict: true,
                    })}?id=${data.id}`}
                    className="min-w-[124px] border-2 font-bold leading-[1.6] py-[4px] px-[10px] hover:bg-white hover:text-primary"
                    outline="outline-white"
                    rounded
                >
                    Watch now
                </Button>
            </div>
        </div>
    );
};

export default BannerItem;
