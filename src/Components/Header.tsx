import React from 'react'
import { Box, Text, HStack, Link, Flex, Center, Button } from '@chakra-ui/react';
import Instagram from '../../public/Icons/Instagram.png'
import Facebook from '../../public/Icons/Vector.png'
import Wk from '../../public/Icons/Vector (1).png'
import Youtube from '../../public/Icons/Vector (2).png'
import Image from 'next/image';
import Book from '../../public/img/image 3 (1).png'
import Book1 from '../../public/img/image 4 (1).png'
import Prev from '../../public/Icons/Arrow 1 (1).png'
import Next from '../../public/Icons/Arrow 1 (2).png'

type Props = {}

const Header = (props: Props) => {
  const Icon: string = Instagram.src
  const Icon1: string = Facebook.src
  const Icon2: string = Wk.src
  const Icon3: string = Youtube.src
  const Books: string = Book.src
  const Books1: string = Book1.src
  const Button1: string = Prev.src
  const Button2: string = Next.src

  return (
    <div className='header'>

      <Box className='head_left' w={'220px'} height={'100%'} overflow={'hidden !important'} position={'fixed'} paddingBottom={'90px'}>
        <Text fontSize={'22px'} transform={'rotate(-90deg)'} marginBottom={'65px'} color={'#C4C4C4'} fontWeight={'600'}>контактная информация</Text>
        <Box w={'90px'} h={'3px'} bgColor={'#C4C4C4'} transform={'rotate(-90deg)'} marginBottom={'45px'} marginTop={'45px'}></Box>
        <Image src={Icon} alt="Icons" width={26} height={26} />
        <Image src={Icon1} alt="Icons" width={15} height={26} />
        <Image src={Icon2} alt="Icons" width={24} height={14} />
        <Image src={Icon3} alt="Icons" width={26} height={18} />
      </Box>

      {/* left side */}

      <Box w={'100%'} h={'100%'}>
        <Box w={'1100px'} h={'100%'} display={'flex'} flexDirection={'column'} margin={'0px auto'} marginTop={'55px'}>
          <HStack spacing={'80px'} fontWeight={'600'} textTransform={'uppercase'}>
            <Link>Главная</Link>
            <Link>о театре</Link>
            <Link>Наши постановки</Link>
            <Link>партнеры театра</Link>
            <Link>контакты</Link>
            <Link fontWeight={'700'} borderBottom={'2px solid #D1A954'} marginLeft={'300px !important'}>+7 495 123-45-67</Link>
          </HStack>

          <Flex justifyContent={'space-between'} margin={'0px auto'} marginTop={'10%'}>
            <Center flexDirection={'column'} gap={'30px'} w={'42%'} alignItems={'flex-start'}>
              <h1 style={{ fontSize: '70px', fontWeight: '700' }}>Большой театр</h1>
              <Text variant={'p'}>Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в Европе XVIII.</Text>
              <Button w={'160px'} h={'50px'} bg={'#D1A954'} fontWeight={'100'} textTransform={'uppercase'}>афиша</Button>
            </Center>

            <Box w={'52%'}>
              <Box w={'400px'} h={'600px'} overflow={'hidden'} position={'relative'} display={'flex'} flexDirection={'column'} gap={'35px'}>
                <Box position={'relative'} w={'100%'} h={'100%'}>
                  <img style={{ width: '380px', position: 'absolute', zIndex: 100 }} src={Books} alt={'books'} />
                  <img style={{ width: '100%', position: 'absolute', zIndex: 10, }} src={Books1} alt={'books'} width={'370px'} height={'570px'} objectFit={'cover'} />
                </Box>

                <Flex w={'100%'} justifyContent={'space-between'} position={'absolute'} bottom={'-10px'}>
                  <Box w={'120px'} h={'30px'} bg={'none'} display={'flex'} gap={'30px'} cursor={'pointer'}>
                    <Image src={Button1} alt={'button'} width={'40px'} height={'2px'} objectFit={'contain'} />
                    <Text>Пред</Text>
                  </Box>
                  <Box w={'120px'} h={'30px'} bg={'none'} display={'flex'} gap={'30px'} cursor={'pointer'}>
                    <Text>след</Text>
                    <Image src={Button2} alt={'button'} width={'40px'} height={'0px'} objectFit={'contain'} />
                  </Box>
                </Flex>

              </Box>
            </Box>

          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default Header