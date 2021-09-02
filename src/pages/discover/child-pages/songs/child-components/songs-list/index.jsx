import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongListAction } from '../../store/actionCreators'
import { usePagination } from '@/utils/custom-hooks'

import { PER_PAGE_NUMBER } from '@/common/constants'

import SongsCover from '@/components/songs-cover';
import Pagination from '@/components/pagination';

import { SongsListWrapper } from './style'
const SongsList = memo(() => {
  const [currentPage, onPageChange] = usePagination(getSongListAction)
  const { songsList } = useSelector(state => ({
    songsList: state.getIn(["songs", "categorySongs"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongListAction(1))
  }, [dispatch])
  return (
    <SongsListWrapper>
      <div className="songs-list">
        {
          songsList?.playlists?.map(item => (
            <SongsCover info={item} key={item.id} right="30px" />
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        total={songsList?.total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange} />
    </SongsListWrapper>
  )
})

export default SongsList
