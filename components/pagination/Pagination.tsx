import Link from "next/link";
import {
  PiArrowLeftDuotone,
  PiArrowLineLeftDuotone,
  PiArrowLineRightDuotone,
  PiArrowRightDuotone,
} from "react-icons/pi";

type PaginationProps = {
  slug: string | undefined;
  currentPage: number;
  pageCount: number;
};

export function Pagination({ slug, currentPage, pageCount }: PaginationProps): JSX.Element {
  const pages = Array.from(Array(pageCount).keys());
  const disabled = `inline-flex items-center justify-center w-6 h-6 text-lg text-gray-400 pointer-events-none`;
  const enabled = `inline-flex items-center justify-center w-6 h-6 text-lg hover:ring-0 hover:bg-svw-blue-lighter hover:text-white`;
  return (
    <div className="flex flex-row place-content-end gap-0.5">
      {currentPage === 1 && (
        <button className={disabled}>
          <PiArrowLineLeftDuotone />
        </button>
      )}
      {currentPage > 1 && (
        <Link href={{ pathname: slug, query: { page: 1 } }}>
          <button className={enabled}>
            <PiArrowLineLeftDuotone />
          </button>
        </Link>
      )}
      {currentPage <= 1 && (
        <button className={disabled}>
          <PiArrowLeftDuotone />
        </button>
      )}
      {currentPage > 1 && (
        <Link href={{ pathname: slug, query: { page: currentPage - 1 } }}>
          <button className={enabled}>
            <PiArrowLeftDuotone />
          </button>
        </Link>
      )}
      {pages.map((index) => {
        const page = index + 1;
        return (
          <Link key={page} href={{ pathname: slug, query: { page } }}>
            <button
              className={`relative inline-flex items-center justify-center w-6 h-6
                  ${
                    page === currentPage
                      ? "bg-svw-blue-default text-white"
                      : "hover:bg-svw-blue-lighter hover:text-white"
                  }
                `}
            >
              {page}
            </button>
          </Link>
        );
      })}
      {currentPage >= pageCount && (
        <button className={disabled}>
          <PiArrowRightDuotone />
        </button>
      )}
      {currentPage < pageCount && (
        <Link href={{ pathname: slug, query: { page: currentPage + 1 } }}>
          <button className={enabled}>
            <PiArrowRightDuotone />
          </button>
        </Link>
      )}
      {currentPage === pageCount && (
        <button className={disabled}>
          <PiArrowLineRightDuotone />
        </button>
      )}
      {currentPage < pageCount && (
        <Link href={{ pathname: slug, query: { page: pageCount } }}>
          <button className={enabled}>
            <PiArrowLineRightDuotone />
          </button>
        </Link>
      )}
    </div>
  );
}
