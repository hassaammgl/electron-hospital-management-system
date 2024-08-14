import { useState } from 'react'
import { pageContext } from './context/pageContext'
import { Header } from './components'
import { Display, Dashboard, Home } from './pages'

function App() {
  const [page, setPage] = useState('Dashboard')

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <div>
        <Header />
        <Display
          pages={[
            { title: 'Home', component: Home },
            { title: 'Dashboard', component: Dashboard }
          ]}
        />
      </div>
    </pageContext.Provider>
  )
}

export default App
