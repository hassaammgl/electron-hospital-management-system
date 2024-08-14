import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useToast,
  Button,
  Heading,
  Center,
  Radio,
  RadioGroup
} from '@chakra-ui/react'
import { useState } from 'react'
import { AtSignIcon, CalendarIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { MdOutlinePassword } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa6'

const Signup = () => {
  const [show, setShow] = useState(false)
  // cradentials
  const [role, setRole] = useState('Patient')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')

  // toast setup
  const toast = useToast()

  // functions
  const handleClick = () => setShow(!show)

  const handleSubmit = async () => {
    alert('Form Submitted')
  }

  // component
  return (
    <Center
      width={'100%'}
      height={'80vh'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Heading as={'h1'} size={'xl'}>
        Signup
      </Heading>
      <Stack width={80} justifyContent={'center'} alignItems={'center'} spacing={3}>
        <InputGroup size="md">
          <Input pr="4.5rem" type={'text'} placeholder="Enter Name" required={true} />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input pr="4.5rem" type={'number'} placeholder="Enter Phone Number" required={true} />
          <InputLeftElement width="2.5rem">
            <FaPhone />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input pr="4.5rem" type={'date'} placeholder="Enter Date of birth" required={true} />
          <InputLeftElement width="2.5rem">
            <CalendarIcon />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input pr="4.5rem" type={'text'} placeholder="Enter Username" required={true} />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input pr="4.5rem" type={'email'} placeholder="Enter Email" required={true} />
          <InputLeftElement width="2.5rem">
            <AtSignIcon />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            required={true}
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
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter Confirm password"
            required={true}
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
        <RadioGroup onChange={setRole} value={role}>
          <Stack direction="row">
            <Radio value="Patient">Patient</Radio>
            <Radio value="Admin">Admin</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme={'blue'} onClick={handleSubmit}>
          Sign Up
        </Button>
      </Stack>
    </Center>
  )
}

export default Signup
