import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Spinner } from '@chakra-ui/react'
  import { MdLocalShipping } from 'react-icons/md';
  import {useEffect,useState} from "react"
  import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
  import {  getSingleProduct } from '../Redux/products/action';
// import { MdLocalShipping } from 'react-icons/md';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
  import { addProductCart } from '../Redux/products/action';
  export const Product=()=>{
 

  const { _id } = useParams();

  const dispatch = useDispatch();
  const items = useSelector((store) => store.ecommerceData);
  let data=items.currentProduct;
  let loading=items.loading;
  let error=items.error;
  useEffect(() => {
      if(_id){
          dispatch(getSingleProduct(_id))
      }
  },[dispatch, _id]);
   console.log(data);

  const addToCartHandler = () => {
      data && dispatch(addProductCart(data))
  };
  
    return (
      <Container maxW={'8xl'}>
        <Navbar/>
      <div style={{textAlign:"center" ,fontSize:"30px",fontWeight:"bold",color:"teal"}}> {loading && <div>Loading <Spinner size='xl' /></div>}</div>
      <div style={{textAlign:"center" ,fontSize:"30px",fontWeight:"bold",color:"teal"}}> {error && <div>...Something Went Wrong</div>}</div>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={data.images}
           
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
               ₹ { data.price}
              </Text>
            
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
              <span style={{fontWeight:"bold"}}>Description :</span>  {data.description}
                </Text>
               
              </VStack>
             
             
                 
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={addToCartHandler}
              
              >
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Footer/>
      </Container>
    );
  }