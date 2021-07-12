import React from 'react';

const Pagination = ({ countryPerPage, total, handleChangePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => handleChangePage(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;