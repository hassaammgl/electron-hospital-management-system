import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useToast,
  Button,
  Heading,
  Center
} from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { AtSignIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { MdOutlinePassword } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa6'
import { pageContext } from '../context/pageContext'
import { LinkButton } from '../components'
import { useDispatch } from 'react-redux'
import { addUserDetails } from '../redux/user/userSlice'

const Login = () => {
  const [show, setShow] = useState(false)
  // cradentials
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  // context api
  const { setPage } = useContext(pageContext)

  // toast setup
  const toast = useToast()
  // redux toolkit setup
  const dispatch = useDispatch()

  // functions
  const handleClick = () => setShow(!show)

  const handleSubmit = async () => {
    toast({
      title: 'Account Login in Progress!!',
      description: 'Login in your account.',
      status: 'loading',
      duration: 9000,
      isClosable: true
    })
    await window.api
      .login({
        email,
        phoneNumber,
        password,
        username
      })
      .then((response) => {
        console.log(response)
        toast.closeAll()
        toast({
          title: 'Login Successfull!!',
          description: response.message,
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        const data = JSON.parse(response.data)
        localStorage.setItem('token', data.token)
        console.log(data)
        dispatch(
          addUserDetails({
            name: data.name,
            role: data.role,
            lastLogin: data.lastLogin,
            updatedAt: data.updatedAt,
            _id: data._id,
            phoneNumber: data.phoneNumber,
            email: data.email,
            username: data.username,
            dob: data.dob,
            age: data.age,
            gender: data.gender
          })
        )
        setPage('Dashboard')
      })
      .catch((error) => {
        toast.closeAll()
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true
        })
      })
  }

  // component
  return (
    <Center
      width={'100%'}
      height={'100vh'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'scroll'}
      scrollBehavior={'smooth'}
    >
      <Heading as={'h1'} mb={4} size={'xl'}>
        Login
      </Heading>
      <Stack width={80} justifyContent={'center'} alignItems={'center'} spacing={6}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={'number'}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <FaPhone />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={'text'}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <AtSignIcon />
          </InputLeftElement>
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <InputRightElement width="2.5rem">
            <Button h="2rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
          <InputLeftElement width="2.5rem">
            <MdOutlinePassword />
          </InputLeftElement>
        </InputGroup>
        <Button colorScheme={'blue'} onClick={handleSubmit}>
          Login
        </Button>
        <Stack mt={4}>
          <Center>
            Don&apos;t have an account? <LinkButton colorScheme={'red'}>SignUp</LinkButton>
          </Center>
        </Stack>
      </Stack>
    </Center>
  )
}

export default Login
