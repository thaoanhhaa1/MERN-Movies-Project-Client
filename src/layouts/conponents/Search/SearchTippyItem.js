import React from 'react';
import Avatar from '~/components/Avatar';

const SearchTippyItem = () => {
    return (
        <div className="flex items-center py-[6px]">
            <Avatar
                className="w-search-avatar h-search-avatar flex-shrink-0"
                alt=""
                src="https://th.bing.com/th/id/R.288038ee3882a7b12819d4b6d1225363?rik=vDUGXR%2b5CnFLkg&pid=ImgRaw&r=0"
            ></Avatar>
            <h6 className="line-clamp-2 ml-3 text-sm leading-[1.6] text-[#292929]">
                Xây Dựng Website với ReactJS
            </h6>
        </div>
    );
};

export default SearchTippyItem;
