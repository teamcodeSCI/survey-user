import React from 'react';
import './pagination.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector } from '@/features/brand/brandSlice';
interface PaginationModel {
  pageNum: number;
  setPageNum: any;
  pageCount: number;
  range: number;
}
const Pagination = ({ pageNum, setPageNum, pageCount, range }: PaginationModel) => {
  const background = useAppSelector(backgroundSelector);
  const pagiPage = [];
  const pagiRange = pageCount <= range ? pageCount - 1 : range;
  const pagiLimitEnd = pagiRange + pageNum < pageCount ? pagiRange + pageNum : pageCount;
  const pagiLimitStart = pagiRange + pageNum <= pageCount ? pageNum : pageCount - pagiRange;
  for (let i = pagiLimitStart; i <= pagiLimitEnd; i++) {
    pagiPage.push(i);
  }
  const nextPage = () => {
    if (pageNum < pageCount) setPageNum(pageNum + 1);
  };
  const prePage = () => {
    if (pageNum > 1) setPageNum(pageNum - 1);
  };

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={prePage}>
        ❮❮ <span>Câu trước</span>
      </button>
      <ul className="pagination__box">
        {pagiPage.map((item, idx) => (
          <li
            onClick={() => {
              setPageNum(Number(item));
            }}
            key={idx}
            style={pageNum === item ? { background: background } : { background: '' }}
          ></li>
        ))}
      </ul>
      <button className="pagination__btn" onClick={nextPage}>
        <span>Câu tiếp</span> ❯❯
      </button>
    </div>
  );
};

export default Pagination;
