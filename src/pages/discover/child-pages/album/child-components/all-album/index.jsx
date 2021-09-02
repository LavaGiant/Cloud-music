import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { usePagination } from '@/utils/custom-hooks'
import { getAllAlbumAction } from '../../store/actionCreators'

import ThemeHeader from "@/components/theme-header";
import AlbumCover from "@/components/album-cover";
import Pagination from '@/components/pagination';

import { AllAlbumWrapper } from './style'
const AllAlbum = memo(() => {

  const keywords = ['全部', '华语', '欧美', '韩国', '日本']

  const [currentPage, onPageChange] = usePagination(getAllAlbumAction);

  const { allAlbums, total } = useSelector(state => ({
    allAlbums: state.getIn(['album', 'allAlbums']),
    total: state.getIn(['album', 'allAlbumTotal']),
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAlbumAction(1))
  }, [dispatch])
  return (
    <AllAlbumWrapper>
      <ThemeHeader title="全部新碟" titleSize="24px">
        <div name="left">
          <div className="keyword">
            {
              keywords.map((item, index) => (
                <div key={item} className="item">
                  <a href={`#/discover/album/m?area=${item}`}>{item}</a>
                  {
                    index !== keywords.length - 1 && <span className="divider">|</span>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </ThemeHeader>
      <div className="album-list">
        {
          allAlbums.map(item => (
            <AlbumCover
              size={130}
              width={153}
              bgp={-845}
              key={item.id}
              info={item} />
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </AllAlbumWrapper>
  )
})

export default AllAlbum
