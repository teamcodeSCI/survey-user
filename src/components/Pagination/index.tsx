import React from 'react';
import './pagination.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
interface PaginationModel {
  pageNum: number;
  setPageNum: (pageNum: number) => void;
  pageCount: number;
  range: number;
  sendResult: () => void;
  answer: any
}
const Pagination = ({ pageNum, setPageNum, pageCount, range, sendResult, answer }: PaginationModel) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const brandCode = searchParams.get('brand_code');
  const pagiPage = [];
  const pagiRange = pageCount <= range ? pageCount - 1 : range;
  const pagiLimitEnd = pagiRange + pageNum < pageCount ? pagiRange + pageNum : pageCount;
  const pagiLimitStart = pagiRange + pageNum <= pageCount ? pageNum : pageCount - pagiRange;
  for (let i = pagiLimitStart; i <= pagiLimitEnd; i++) {
    pagiPage.push(i);
  }
  const nextPage = () => {
    if (pageNum < pageCount) {
      if (answer !== 0 && answer !== '' && answer) {
        setPageNum(pageNum + 1);

      }
      sendResult()
    }
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
        Câu {pageNum}/{pagiPage.length}
        {/* {pagiPage.map((item, idx) => (
          <li
            onClick={() => {
              setPageNum(Number(item));
            }}
            key={idx}
            style={pageNum === item ? { background: background } : { background: '' }}
          ></li>
        ))} */}
      </ul>
      {pageNum === pageCount ? (
        <button className="pagination__btn" onClick={() => {
          sendResult();
          navigate(`/ending?brand_code=${brandCode}`);
        }}>
          <span>Gửi kết quả</span> ❯❯
        </button>
      ) : (
        <button className="pagination__btn" onClick={nextPage}>
          <span>Câu tiếp</span> ❯❯
        </button>
      )}
    </div>
  );
};

export default Pagination;
