import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
 Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 import { useDispatch } from 'react-redux'; 
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { isLogin } from '../Redux/Auth/action';
  export const Login=()=>{
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const Navigate=useNavigate();
    const dispatch=useDispatch()

    const onChangeInput=(e)=>{
        const {id,value}=e.target;
        setUser({...user,[id]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://ssense-api.herokuapp.com/login", user)
        .then((res)=>{
            localStorage.setItem("loginUser",JSON.stringify(res.data))
            dispatch(isLogin(res.data))
            setTimeout(()=>{
                Navigate("/")
            },2000);
            setUser({
                email:"",
                password:""
            })
            alert("Login Successfull ! ! !")
        })
        .catch((e)=>{
            alert("Login Failed")
   
        })
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={user.email} onChange={(e)=>{
                    onChangeInput(e)
                }} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={user.password} onChange={(e)=>onChangeInput(e)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <NavLink to="/signup" color={'blue.400'}>Register Now</NavLink>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={(e)=>{
                    handleSubmit(e)
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }