import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import Instagram from '../../public/Icons/Instagram.png'


type Props = {}

const Header = (props: Props) => {
  const Image: string = Instagram.src
  return (
    <div className='header'>
      <Box className='head_left' w={'15%'} height={'100%'}>
        <Text>контактная информация</Text>
        <Box w={'90px'} h={'2px'} bgColor={'white'}></Box>
        <img src={Image} alt="" />
        
      </Box>
    </div>
  )
}

export default Header