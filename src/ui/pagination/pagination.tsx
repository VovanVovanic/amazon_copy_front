import ReactPaginate from 'react-paginate'
import classes from './pagiation.module.scss'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import { FC, useEffect, useState } from 'react';
import { IPaginate } from './types'


const Pagination: FC<IPaginate> = ({ onChange, paginationLength, page }) => {
  const getPage = (p: number) => {
    if (p === 1 || p === paginationLength) {
      return p
    }
    else {
      return p - 1
    }
  }

  const onPageChange = (selectedItem: { selected: number; }) => {
    onChange(selectedItem.selected + 1)
  }

  return (
    <div className={classes.pagination}>
      <ReactPaginate
        className={classes.paginate}
        pageCount={Math.ceil(paginationLength)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel="..."
        pageClassName={classes.page}
        nextClassName={classes.arrow}
        previousClassName={classes.arrow}
        activeClassName={classes.active}
        onPageChange={onPageChange}
        forcePage={page-1}
        previousLabel={
          <HiArrowSmLeft />}
        nextLabel={
          <HiArrowSmRight
          />
        }
      />
    </div>
  )
}
export default Pagination