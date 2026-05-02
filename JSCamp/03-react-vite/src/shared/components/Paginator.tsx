import { CSSProperties, MouseEvent } from 'react';
import styles from '../css/paginator.module.css';

interface PaginatorProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

interface HandleChangePageParams {
  event: MouseEvent<HTMLAnchorElement>;
  page: number;
}

export function Paginator({ 
  currentPage = 1, 
  totalPages = 10, 
  onPageChange 
}: PaginatorProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton: CSSProperties = isFirstPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};
  const styleNextButton: CSSProperties = isLastPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};

  const handlePrevClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handleChangePage = ({ event, page }: HandleChangePageParams): void => {
    event.preventDefault();
    onPageChange(page);
  }

  return (
    <nav className={styles.pagination} id="pagination">
      <a
        href="#pagination"
        style={stylePrevButton}
        onClick={handlePrevClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>
      {pages.map((page) => (
        <a
          key={page}
          href="#pagination"
          className={currentPage === page ? styles['is-active'] : ""}
          onClick={(event) => handleChangePage({ event, page })}
        >
          {page}
        </a>
      ))}
      <a
        href="#pagination"
        style={styleNextButton}
        onClick={handleNextClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}
