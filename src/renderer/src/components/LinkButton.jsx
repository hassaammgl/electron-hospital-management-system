/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react'
import { pageContext } from '../context/pageContext'
import { useContext } from 'react'

const LinkButton = ({ children, colorScheme }) => {
  const { setPage } = useContext(pageContext)
  const handleButtonClick = () => {
    setPage(children)
    console.log(children)
  }
  return (
    <Button colorScheme={colorScheme} onClick={handleButtonClick}>
      {children}
    </Button>
  )
}

export default LinkButton
