import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const NewsPagination = ({ total, limit, page, setPage }) => {

    const numPages = Math.ceil(total / limit);
    return (
        <div>
            <Pagination>
                <Pagination.Prev onClick={() => setPage(page - 1)} className={page === 1 ? 'disabled' : null} />

                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <Pagination.Item
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            aria-current={page === i + 1 ? "active" : null}
                            className={page === i + 1 ? "active" : null}
                        >
                            {i + 1}
                        </Pagination.Item>
                    ))}

                <Pagination.Next onClick={() => setPage(page + 1)} className={page === numPages ? 'disabled' : null} />
            </Pagination>
        </div>
    )
}

export default NewsPagination