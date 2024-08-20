import { pageContext } from '../context/pageContext'
import { useContext, Fragment } from 'react'

// eslint-disable-next-line react/prop-types
const Display = ({ pages }) => {
  const { page } = useContext(pageContext)
  console.log(page)

  return (
    <>
      {pages?.map((pg, i) => {
        return <>{pg.title === page ? <pg.component key={i} /> : <Fragment key={i}></Fragment>}</>
      })}
    </>
  )
}

export default Display
