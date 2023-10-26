import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

type PaginationProps = {
  slug: string | undefined;
  currentPage: number;
  pageCount: number;
};

export function Pagination({ slug, currentPage, pageCount }: PaginationProps) {
  const pages = Array.from(Array(pageCount).keys());
  const base = "h-full inline-flex items-center justify-center p-2";
  const button = `${base} text-lg hover:ring-0 hover:bg-svw-blue-dark hover:text-white`;
  if (pageCount === 1) {
    return null;
  }
  return (
    <ul className="rounded-md bg-svw-blue-default inline-flex -space-x-px text-sm text-white items-center justify-center divide-x">
      <Link href={{ pathname: slug, query: { page: 1 } }} className={`${button} rounded-l-md`}>
        <FiChevronsLeft />
      </Link>
      <Link href={{ pathname: slug, query: { page: Math.max(currentPage - 1, 1) } }} className={button}>
        <FiChevronLeft />
      </Link>
      <div className={base}>
        {currentPage} von {pageCount}
      </div>
      <Link href={{ pathname: slug, query: { page: Math.min(currentPage + 1, pageCount) } }} className={button}>
        <FiChevronRight />
      </Link>
      <Link href={{ pathname: slug, query: { page: pageCount } }} className={`${button} rounded-r-md`}>
        <FiChevronsRight />
      </Link>
    </ul>
  );
}
