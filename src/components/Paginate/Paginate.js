import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '~/components/Icons';
import PropTypes from 'prop-types';

const Paginate = ({ className = '', pageCount, handlePageClick }) => {
    const paginationClassName =
        'flex items-center px-6 py-[15px] text-base text-[#146ebe] rounded-lg transition-all hover:text-[#183153] hover:bg-[#c3c6d1]';

    return (
        <ReactPaginate
            className={`flex items-center justify-center ${className}`}
            breakLabel="..."
            nextLabel={
                <>
                    Next
                    <ChevronRightIcon className="w-[20px] h-[20px] ml-[15px]" />
                </>
            }
            previousLabel={
                <>
                    <ChevronLeftIcon className="w-[20px] h-[20px] mr-[15px]" />
                    Previous
                </>
            }
            nextLinkClassName={paginationClassName}
            previousLinkClassName={paginationClassName}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            disabledLinkClassName="hidden"
            pageLinkClassName={paginationClassName}
            breakLinkClassName="inline-block px-[6px] py-[15px] text-[rgb(24,49,83)]"
            activeLinkClassName="!text-white !bg-[rgb(20,110,190)]"
        />
    );
};

Paginate.propTypes = {
    className: PropTypes.string,
    pageCount: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;
