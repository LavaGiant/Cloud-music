import { memo } from 'react'
import { discoverMenu } from '@/common/local-data'
import { DiscoverWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const Discover = memo(({ route: { routes } }) => {
  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {
              discoverMenu.map(({ title, link }) => (
                <div className="item" key={title}>
                  <NavLink to={link}>{title}</NavLink>
                </div>
              ))
            }
          </TopMenu>
        </div>
        {renderRoutes(routes)}
      </DiscoverWrapper>
    </div>
  )
})

export default Discover
