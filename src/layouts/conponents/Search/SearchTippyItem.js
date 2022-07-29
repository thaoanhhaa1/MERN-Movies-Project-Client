import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Avatar from '~/components/Avatar';
import config from '~/config';

const SearchTippyItem = ({ data, onClick = () => {} }) => {
    const to = useMemo(
        () =>
            !data?.id || !data?.title
                ? ''
                : `/movie/${slugify(data?.title ?? '', {
                      locale: 'vi',
                      lower: true,
                      strict: true,
                  })}?id=${data?.id}`,
        [data?.id, data?.title],
    );

    if (!to) return null;

    return (
        <Link to={to} className="flex items-center py-[6px]" onClick={onClick}>
            <Avatar
                className="w-search-avatar h-search-avatar flex-shrink-0"
                alt={data.title}
                src={`${config.movieDB.image}${
                    data.backdrop_path ?? data.poster_path
                }`}
            ></Avatar>
            <h6 className="line-clamp-2 ml-3 text-sm leading-[1.6] text-[#292929]">
                {data.title}
            </h6>
        </Link>
    );
};

export default SearchTippyItem;
