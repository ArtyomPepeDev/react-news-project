import styles from './styles.module.css'

const Pagination = ({
  totalPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        className={styles.arrow}
        onClick={handlePreviousPage}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
      <button
        disabled={currentPage >= 10}
        className={styles.arrow}
        onClick={handleNextPage}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
