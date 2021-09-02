import { memo } from 'react'
import { Pagination } from 'antd';

import { PaginationWrapper } from './style'
const PaginAtion = memo(({ currentPage, total, onPageChange }) => {
  // render function
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">上一页 &gt;</button>;
    }
    return originalElement;
  }
  return (
    <PaginationWrapper>
      <Pagination className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={35}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange} />
    </PaginationWrapper>
  )
})

export default PaginAtion
