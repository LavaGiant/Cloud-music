import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';

export const usePagination = (actionFunc, ...args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch()
  const onPageChange = useCallback(page => {
    setCurrentPage(page);
    dispatch(actionFunc(page, args))
  }, [dispatch, actionFunc, args])
  return [currentPage, onPageChange]
}