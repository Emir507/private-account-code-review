import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Pagination from './Pagination'
import buyers from './../../data/buyers.json'

import './Buyers.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
export default function Buyers() {
  const [ users, setValue ] = useState([...buyers]);
  // sort functions
  function sortByName() {
    buyers.sort((a, b) => a.name > b.name ? 1 : -1)
    setValue([...buyers])
  }
  function sortByCheck() {
    buyers.sort((a, b) => a.check > b.check ? -1 : 1)
    setValue([...buyers])
  }
  function sortByQuantity() {
    buyers.sort((a, b) => a.quantity > b.quantity ? -1 : 1)
    setValue([...buyers])
  }
  function sortBySumAmount() {
    buyers.sort((a, b) => a.sum > b.sum ? -1 : 1)
    setValue([...buyers])
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  //get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)


  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // pagination change
  function changePostsPerPage(perPage) {
    setPostsPerPage(perPage)
    setCurrentPage(1)
  }

  return (
    <div className="mx-auto d-flex flex-column justify-content-center align-items-center pt-3 pb-3">
      <div className="mb-3">
        Показать на странице
        <button className={postsPerPage === 5 ? 'btn-primary btn' : 'btn-outline-primary btn'} onClick={() => changePostsPerPage(5)}>5</button>
        <button className={postsPerPage === 10 ? 'btn-primary btn' : 'btn-outline-primary btn'} onClick={() => changePostsPerPage(10)}>10</button>
        <button className={postsPerPage === 15 ? 'btn-primary btn' : 'btn-outline-primary btn'} onClick={() => changePostsPerPage(15)}>15</button>
      </div>
      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID Покупателя</th>
          <th className="table-head__title"onClick={sortByName}>Имя покупателя</th>
          <th className="table-head__title"onClick={sortByCheck}>Средний чек</th>
          <th className="table-head__title"onClick={sortByQuantity}>Количество покупок</th>
          <th className="table-head__title"onClick={sortBySumAmount}>Общая выручка</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts.map(user => (
          <tr key={user.id}>
            <th><Link className="d-block text-center" to={`/buyers/${user.id}`}>{user.id}</Link></th>
            <th>{user.name}</th>
            <th>{user.check}$</th>
            <th>{user.quantity}</th>
            <th>{user.sum}$</th>
          </tr>
        ))}
      </tbody>
    </Table>
    {postsPerPage === users.length ? '' : <Pagination 
      postsPerPage={postsPerPage}
      totalPosts={users.length}
      paginate={paginate}
      currentPage={currentPage}
    />}
    </div>
  )
}