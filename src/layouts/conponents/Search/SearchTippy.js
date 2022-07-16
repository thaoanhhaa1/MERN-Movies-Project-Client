import { Link } from 'react-router-dom';
import { SearchIcon, SpinnerIcon } from '~/components/Icons';
import SearchTippyItem from './SearchTippyItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const SearchTippy = ({ value, ...props }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setData([]);
        setLoading(true);
        setTimeout(() => {
            setData([1, 2, 3]);
            setLoading(false);
        }, 1000);
    }, [value]);

    return (
        <div
            className={`${cx(
                'search-tippy-wrapper',
            )} shadow-[0_-4px_32px_rgba(0,0,0,0.2)] bg-white rounded-[10px] overflow-hidden`}
        >
            <div
                {...props}
                className={`${cx(
                    'search-tippy',
                )} w-search min-h-[50px] max-h-[calc(90vh-66px)] overflow-overlay px-6 py-3`}
            >
                <div className="h-[26px] flex text-[#757575] items-center text-sm leading-sm">
                    {(loading && (
                        <SpinnerIcon
                            className="animate-spin"
                            width="14px"
                            height="14px"
                        />
                    )) || (
                        <SearchIcon
                            className="flex-shrink-0"
                            width="14px"
                            height="14px"
                        ></SearchIcon>
                    )}
                    <span className="ml-2 text-desc">
                        {(loading && 'Find') ||
                            (data.length > 0 && 'Results for') ||
                            'No results for'}
                        ' {value}'
                    </span>
                </div>
                {data.length > 0 && (
                    <div>
                        <div className="flex justify-between items-center pt-6 pb-3 mb-[6px] border-b border-[rgba(0,0,0,.05)]">
                            <h4 className="text-[#333] text-sm leading-sm font-medium uppercase">
                                Movies
                            </h4>
                            <Link
                                className="text-desc transition-all hover:text-primary"
                                to=""
                            >
                                See more
                            </Link>
                        </div>
                        <SearchTippyItem />
                        <SearchTippyItem />
                        <SearchTippyItem />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchTippy;
