import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import Instagram from '../../public/img/Instagram.png'

type Props = {}

const Header = (props: Props) => {
  const Image: string = Instagram.src
  return (
    <div className='header'>
      <Box className='head_left' w={'15%'} height={'100%'}>
        <Text>контактная информация</Text>
        <Box w={'90px'} h={'2px'} bgColor={'white'}></Box>
      </Box>
      <img src={Image} alt="" />
    </div>
  )
}

export default Header