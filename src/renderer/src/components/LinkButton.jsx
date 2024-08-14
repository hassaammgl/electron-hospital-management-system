import { Button } from '@chakra-ui/react'
import { pageContext } from '../context/pageContext'
import { useContext } from 'react'

const LinkButton = ({ children, props }) => {
  const { setPage } = useContext(pageContext)
  const handleButtonClick = () => {
    setPage(children)
    console.log(children)
  }
  return (
    <Button {...props} onClick={handleButtonClick}>
      {children}
    </Button>
  )
}

export default LinkButton
