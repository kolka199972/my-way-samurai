import React, {useState} from 'react'
import s from './Paginate.module.css'

interface PaginateProps {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  portionSize: number
  onSetCurrentPage: (pageNumber: number) => void
}

const Paginate = ({
  currentPage,
  totalUsersCount,
  pageSize,
  portionSize = 10,
  onSetCurrentPage
}: PaginateProps) => {
  const [portionNumber, setPortionNumber] = useState(1)

  const pagesNumber = Math.ceil(totalUsersCount / pageSize)
  const portionCount = Math.ceil(pagesNumber / portionSize)
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionNumber = portionNumber * portionSize

  const pages = []
  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i)
  }

  return (
    <>
      {portionNumber < leftPortionNumber && (
        <button
          className={s.paginator}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          prevPage
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => (
          <span
            className={`${currentPage === p ? s.selectedPage : ''} ${
              s.pageNumber
            }`}
            key={p}
            onClick={() => onSetCurrentPage(p)}
          >
            {' ' + p}
          </span>
        ))}
      {portionNumber < portionCount && (
        <button
          className={s.paginator}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          nextPage
        </button>
      )}
    </>
  )
}

export default Paginate
