import { Box, Heading, Text, Stack, Image, useColorModeValue, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Checkout } from './CheckOut';

import { deleteProductCart, fetchCart } from '../Redux/products/action';
import { addOrder } from '../Redux/products/action';
import { useEffect } from 'react';
export const Cart = () => {
    const Cart = useSelector((store) => store.ecommerceData.cart);
    console.log("cart",Cart)
    const dispatch = useDispatch();
    // const removeProduct = (_id) => {
    //     console.log('Going TO remove product', _id);
    //     dispatch(deleteProductCart(_id));
    // }
    useEffect(()=>{
        dispatch(fetchCart())
    },[dispatch,fetchCart,deleteProductCart])

    const checkoutHandler = () => {
        //to add products to data base
        dispatch(addOrder(Cart));
    }

    return (
        <Box>
            <Heading as='h2' size='xl' textAlign='center'>
                Cart
            </Heading>
            {Cart.length && Cart.map((product,i) => {
                return (
                     <CartItem product={product}
                     key={i} 
                     title={product.products.name} 
                     id={product._id}
                     price= {product.products.price} 
                     description={product.products.description} 
                     image={product.products.images[0]}
                    // removeProduct={removeProduct}
                     />
                );
            })}
            
            <Checkout Cart={Cart} checkoutHandler={checkoutHandler}/>
        </Box>
    );
};

function CartItem({ title,id,price,image,description}) {
   // console.log("ajay", title,id,price,image,description)
    const dispatch = useDispatch();
    const removeProduct = (id) => {
        console.log('Going TO remove product', id);
        dispatch(deleteProductCart(id));
    }
    // console.log("ajay", product)
    return (
        
         <Box border={'1px solid red'} rounded='lg' width={'fit-content'} margin='auto' marginBottom='2rem'>
            <Stack direction={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center'>
                <Box 
              height={'300px'} 
              width='300px' 
              
              position='relative'
              padding='0 1rem'
              _after={{
              transition: 'all .3s ease',
              content: '""',
              w: '80%',
              h: '80%',
              pos: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}>
                <Image
              rounded={'lg'}
              height={300}
              width={300}
              objectFit={'contain'}
              src={image}
            />
                </Box>
                <Box height={'300px'} width='300px'>
                    <Stack p={2}>
                        <Heading as='h3' size='lg'>{title}</Heading>
                        <Box overflow={'hidden'} whiteSpace='nowrap'>
                        <Text> 
                            {description}
                        </Text>
                        </Box>
                        <Text 
                        color={useColorModeValue('gray.500', 'gray.400')}
                        fontSize={'2xl'}
                        fontWeight={'300'}>
                           ₹ {price}
                        </Text>
                        <Button variant={'solid'} leftIcon={<DeleteIcon/>} colorScheme='teal' onClick={() => removeProduct(id)}>Remove</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    ) 
}