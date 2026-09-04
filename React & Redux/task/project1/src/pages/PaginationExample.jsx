import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

function PaginationExample() {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [page, setPage] = useState(1);

    return (
        <Container className='p-3 mt-2'>

            <h3 className="text-start text-decoration-underline mb-3">Pagination</h3>
            <hr />
            <p className='mb-4'>Active Page : {page}</p>

            <Pagination>
                <Pagination.First
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                />

                <Pagination.Prev
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                />

                {pages.map((item) => (
                    <Pagination.Item
                        key={item}
                        active={page === item}
                        onClick={() => setPage(item)}
                    >
                        {item}
                    </Pagination.Item>
                ))}

                <Pagination.Next
                    onClick={() => setPage(page + 1)}
                    disabled={page === pages.length}
                />

                <Pagination.Last
                    onClick={() => setPage(pages.length)}
                    disabled={page === pages.length}
                />
            </Pagination>
        </Container>
    );
}

export default PaginationExample;