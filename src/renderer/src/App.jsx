import { useState } from 'react'
import { pageContext } from './context/pageContext'
import { Header } from './components'
import { Display, Dashboard, Home, Signup } from './pages'

function App() {
  const [page, setPage] = useState('SignUp')

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <div>
        <Header />
        <Display
          pages={[
            { title: 'Home', component: Home },
            { title: 'Dashboard', component: Dashboard },
            { title: 'SignUp', component: Signup }
          ]}
        />
      </div>
    </pageContext.Provider>
  )
}

export default App
