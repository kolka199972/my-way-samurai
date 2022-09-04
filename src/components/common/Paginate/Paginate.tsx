import React from 'react'
import s from './Paginate.module.css'

interface PaginateProps {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  onSetCurrentPage: (pageNumber: number) => void
}

const Paginate = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onSetCurrentPage
}: PaginateProps) => {
  const pagesNumber = Math.ceil(totalUsersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesNumber && i < 10; i++) {
    pages.push(i)
  }
  return (
    <>
      {pages.map((p) => (
        <span
          className={currentPage === p ? s.selectedPage : ''}
          key={p}
          onClick={() => onSetCurrentPage(p)}
        >
          {' ' + p}
        </span>
      ))}
    </>
  )
}

export default Paginate
