import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '~/components/Icons';
import { useWindowDimensions } from '~/hooks';

const Paginate = ({ className = '', pageCount, handlePageClick }) => {
    const { width } = useWindowDimensions();
    const paginationClassName =
        'flex items-center px-6 py-[15px] text-base text-[#146ebe] rounded-lg transition-all hover:text-[#183153] hover:bg-[#c3c6d1]';
    let style = {
        pageRangeDisplayed: 2,
        nextLabel: (
            <>
                <span className="mr-[15px]">Next</span>
                <ChevronRightIcon className="w-[20px] h-[20px]" />
            </>
        ),
        previousLabel: (
            <>
                <ChevronLeftIcon className="w-[20px] h-[20px]" />
                <span className="ml-[15px]">Previous</span>
            </>
        ),
        className: `flex items-center justify-center ${className}`,
    };

    if (width <= 850) {
        style = {
            ...style,
            pageRangeDisplayed: 1,
        };
    }

    if (width <= 800) {
        style = {
            ...style,
            nextLabel: <ChevronRightIcon className="w-[20px] h-[20px]" />,
            previousLabel: <ChevronLeftIcon className="w-[20px] h-[20px]" />,
        };
    }

    if (width <= 600)
        style = {
            ...style,
            className: style.className + ' flex-wrap px-3',
        };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLinkClassName={paginationClassName}
            previousLinkClassName={paginationClassName}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            disabledLinkClassName="hidden"
            pageLinkClassName={paginationClassName}
            breakLinkClassName="inline-block px-[6px] py-[15px] text-[rgb(24,49,83)]"
            activeLinkClassName="!text-white !bg-[rgb(20,110,190)]"
            {...style}
        />
    );
};

Paginate.propTypes = {
    className: PropTypes.string,
    pageCount: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;
