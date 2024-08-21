import { HStack } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
// const { remote } = window.require('electron')

const Header = () => {
  // const minimizeWindow = () => {
  //   const window = remote.getCurrentWindow()
  //   window.minimize()
  // }

  // const closeWindow = () => {
  //   const window = remote.getCurrentWindow()
  //   window.close()
  // }
  return (
    <HStack width={'100%'} color={'white'}>
      <HStack backgroundColor={'red'} fontSize={'xx-large'} width={'100%'}>
        Hospital Management System
        {/* <button onClick={minimizeWindow}>Minimize</button>
        <button onClick={closeWindow}>Close</button> */}
      </HStack>
    </HStack>
  )
}

export default Header