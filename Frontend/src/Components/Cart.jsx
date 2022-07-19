import { Box, Heading, Text, Stack, Image, useColorModeValue, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
// import { Checkout } from '../Components/Checkout';
import { deleteProductCart } from '../Redux/products/action';
import { addOrder } from '../Redux/products/action';
export const Cart = () => {
    const cart = useSelector((store) => store.ecommerceData.cart);
    const dispatch = useDispatch();
    const removeProduct = (_id) => {
        console.log('Going TO remove product', _id);
        dispatch(deleteProductCart(_id));
    }

    const checkoutHandler = () => {
        //to add products to data base
        dispatch(addOrder(cart));
    }

    return (
        <Box>
            <Heading as='h2' size='xl' textAlign='center'>
                Cart
            </Heading>
            {cart.length && cart.map((product) => {
                return (
                     <CartItem 
                     key={product._id} 
                     title={product.name} 
                    //  id={product._id}
                     price= {product.price} 
                     description={product.description} 
                     image={product.images}
                     removeProduct={removeProduct}/>
                );
            })}
            
            {/* <Checkout cart={cart} checkoutHandler={checkoutHandler}/> */}
        </Box>
    );
};

function CartItem({ name, image, price, description, removeProduct, _id}) {
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
                        <Heading as='h3' size='lg'>{name}</Heading>
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