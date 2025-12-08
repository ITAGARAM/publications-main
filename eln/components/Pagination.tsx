'use client';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageNumber = (page: number) => (
    <li key={page} className="page-item">
      <button
        className={`btn mx-1 ${currentPage === page ? 'btn-dark' : 'btn-light border'}`}
        onClick={() => goToPage(page)}
      >
        {page}
      </button>
    </li>
  );

  if (totalPages <= 1) return null;

  return (
    <nav className="d-flex justify-content-between align-items-center py-4 pagination-blog">
      <button
        className={`btn rounded-pill px-4 previous ${currentPage === 1 ? 'disabled-nav' : ''}`}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Previous
      </button>

      <ul className="pagination justify-content-center align-items-center list-unstyled mb-0">
        {Array.from({ length: totalPages }, (_, i) => renderPageNumber(i + 1))}
      </ul>

      <button
        className={`btn rounded-pill px-4 Next ${currentPage === totalPages ? 'disabled-nav' : ''}`}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </nav>
  );
}
