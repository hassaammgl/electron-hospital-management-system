import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'


const Header = () => {
  return (
    <Box width={'100%'} color={'white'}>
      <Center backgroundColor={'red'} fontSize={"xx-large"} width={'100%'}>
        Hospital Management System
      </Center>
    </Box>
  )
}

export default Header
