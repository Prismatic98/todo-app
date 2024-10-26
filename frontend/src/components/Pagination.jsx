import React from 'react';
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';

const Pagination = ({ page, totalPages, setPage }) => {
    return (
        <div className="pagination">
            <div className="pagination__container">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={`pagination__button ${page === 1 ? "disabled" : "active"}`}
                >
                    <MdNavigateBefore size={25} />
                </button>
                <span className="pagination__info">Seite {page} von {totalPages}</span>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className={`pagination__button ${page === totalPages ? "disabled" : "active"}`}
                >
                    <MdNavigateNext size={25} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
