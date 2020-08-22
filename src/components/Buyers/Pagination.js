import React from 'react';
import './Pagination.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Pagination({ postsPerPage, totalPosts, paginate , currentPage}) {
  const pageNumbers = [];
  // number of pages math
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;