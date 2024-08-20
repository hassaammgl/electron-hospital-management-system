/* eslint-disable react/prop-types */
// import { LinkButton } from '../components'
import { useSelector } from 'react-redux'
import {
  Heading,
  Stack,
  VStack,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import Admin, { AdminOptions } from './DashBoards/Admin'

const Dashboard = () => {
  const user = useSelector((state) => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  console.log(user.value)
  console.log('isopen ', isOpen)

  return (
    <Stack
      width={'100%'}
      backgroundColor={'rgb(41, 40, 40)'}
      height={'100vh'}
      position={'relative'}
    >
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        width={18}
        position={'absolute'}
        top={15}
        right={15}
      >
        <HamburgerIcon />
      </IconButton>
      <DrawerBox role={user.value.role} isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      {user.value.role === 'Admin' ? (
        <Admin />
      ) : user.value.role === 'Patient' ? (
        <Heading>Patient</Heading>
      ) : user.value.role === 'Docter' ? (
        <Heading>Docter</Heading>
      ) : (
        <Heading>No Role Found!!</Heading>
      )}
    </Stack>
  )
}

export default Dashboard

const DrawerBox = ({ isOpen, onClose, btnRef, role }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" finalFocusRef={btnRef} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor={'#61616b'}>
        <DrawerCloseButton />
        <VStack spacing={4}>
          <Heading marginTop={10}>{role?.toUpperCase()} CONTENT</Heading>
          <HStack>
            <AdminOptions />
          </HStack>
        </VStack>
      </DrawerContent>
    </Drawer>
  )
}
