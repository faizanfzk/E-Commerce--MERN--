import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Box,
    Image,
    Flex,
    Text
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Checkout = ({ Cart, checkoutHandler }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // console.log("open",isOpen, onOpen, onClose )
    return (
      <Box>
        <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
             float={"center"}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
             // onClick={onOpen}
              >
              <Link to="/payment">Checkout</Link>
            </Button>
{/*   
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Purchase</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              { Cart.map(product => {
                return (
                    <Box key={product.id} mb='1rem'>
                        <Flex>
                            <Box>
                                <Image 
                                border={'1px solid black'}
                                rounded='lg'
                                src={product.images} 
                                objectFit={'contain'} 
                                alt='product image' 
                                boxSize={'100px'}/>
                            </Box>
                            <Box maxW={'250px'} ml='1rem'>
                                <Text fontSize={'lg'}>{product.name}</Text>
                            </Box>
                        </Flex>
                    </Box>
                )
              })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={checkoutHandler}>
                Confirm
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </Box>
    )
  }