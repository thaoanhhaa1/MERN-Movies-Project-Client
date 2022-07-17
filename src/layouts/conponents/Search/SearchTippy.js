import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState, useTransition } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, SpinnerIcon } from '~/components/Icons';
import config from '~/config';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import SearchTippyItem from './SearchTippyItem';

const cx = classNames.bind(styles);

const SearchTippy = ({ value, ...props }) => {
    const valueDebounce = useDebounce(value, 500);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, startTransition] = useTransition();

    useEffect(() => {
        if (!value) setData([]);
    }, [value]);

    useEffect(() => {
        setLoading(true);
        startTransition(async () => {
            if (valueDebounce)
                try {
                    const res = await axios.get(config.movieDB.movie, {
                        params: { query: `'${valueDebounce}'` },
                    });
                    setData(res?.data?.results.slice(0, 5));
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
        });
    }, [valueDebounce]);

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
                        &nbsp;'{value}'
                    </span>
                </div>
                {data?.length > 0 && (
                    <div>
                        <div className="flex justify-between items-center pt-6 pb-3 mb-[6px] border-b border-[rgba(0,0,0,.05)]">
                            <h4 className="text-[#333] text-sm leading-sm font-medium uppercase">
                                Movies
                            </h4>
                            <Link
                                className="text-desc text-sm leading-sm transition-all hover:text-primary"
                                to=""
                            >
                                See more
                            </Link>
                        </div>
                        {data.map((movie) => (
                            <SearchTippyItem
                                key={movie.id}
                                data={movie}
                                to="/"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchTippy;
