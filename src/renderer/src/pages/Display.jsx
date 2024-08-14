import { pageContext } from '../context/pageContext'
import { useContext } from 'react'

// eslint-disable-next-line react/prop-types
const Display = ({ pages }) => {
  const { page } = useContext(pageContext)
  console.log(page)

  return (
    <>
      {pages.map((pg, i) => {
        return <>{pg.title === page ? <pg.component key={i} /> : null}</>
      })}
    </>
  )
}

export default Display
