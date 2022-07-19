import PropTypes from 'prop-types';
import { useState } from 'react';
import Avatar from '~/components/Avatar';
import MovieDetailsReviewActions from '~/components/MovieDetailsReviewActions';
import getDMY from '~/utils/getDMY';

const MovieDetailsReview = ({ data, className = '' }) => {
    const [avatar, setAvatar] = useState(
        data?.author_details?.avatar_path?.slice?.(1) ?? '',
    );

    return (
        <div className={className + 'flex gap-6 mb-6'}>
            <Avatar
                className="flex-shrink-0 w-10 h-10"
                alt=""
                src={avatar}
                onError={() =>
                    setAvatar(
                        'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png',
                    )
                }
            />
            <div>
                <div className="mb-2 flex items-end">
                    <h3 className="mr-2 font-medium text-sm leading-[1.35]">
                        {data?.author_details?.username}
                    </h3>
                    <span className="text-xs text-stone-700 leading-[1.35]">
                        {getDMY(new Date(data?.updated_at || data?.created_at))}
                    </span>
                </div>
                <p className="mb-2 text-sm leading-[1.35]">{data?.content}</p>

                <MovieDetailsReviewActions />
            </div>
        </div>
    );
};
MovieDetailsReview.propTypes = {
    className: PropTypes.string,
};

export default MovieDetailsReview;
