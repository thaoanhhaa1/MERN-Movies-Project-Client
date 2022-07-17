import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '~/components/Avatar';
import config from '~/config';

const SearchTippyItem = ({ to, data }) => {
    return (
        <Link to={to} className="flex items-center py-[6px]">
            <Avatar
                className="w-search-avatar h-search-avatar flex-shrink-0"
                alt=""
                src={`${config.movieDB.image}${
                    data.backdrop_path ??
                    data.poster_path ??
                    '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                }`}
            ></Avatar>
            <h6 className="line-clamp-2 ml-3 text-sm leading-[1.6] text-[#292929]">
                {data.title}
            </h6>
        </Link>
    );
};

export default SearchTippyItem;
