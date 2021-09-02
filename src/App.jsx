import { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from '@/router'
import store from '@/store'

import GlobalFooter from '@/components/global-footer'
import GlobalHeader from '@/components/global-header'
import GlobalPlayer from './components/global-player'
import GlobalBackTop from '@/components/global-back-top'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalHeader />
        {renderRoutes(routes)}
        <GlobalBackTop/>
        <GlobalFooter />
        <GlobalPlayer/>
      </HashRouter>
    </Provider>
  )
})

export default App
