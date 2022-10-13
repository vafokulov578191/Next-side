import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Armchair from '../../public/Icons/armchair 1.png'
import Theatre from '../../public/Icons/theater 1.png'
import Reaclang from '../../public/img/Rectangle 12.png'
import { Search2Icon, StarIcon } from '@chakra-ui/icons'


type Props = {}

const Main = (props: Props) => {
  const Icon: string = Armchair.src
  const Icon2: string = Theatre.src
  const Img: string = Reaclang.src

  return (
    <div className='Main'>
      <Box w={'1130px'} h={'480px'} margin={'150px auto'} display={'flex'} flexDirection={'column'} gap={'100px'} textAlign={'center'}>
        <h1 style={{ textTransform: 'uppercase', fontSize: '50px', color: 'white' }}><span style={{ color: '#D1A954' }}>о</span> театре</h1>
        <Box w={'100%'} height={'100%'} display={'flex'} gap={'40px'}>
          <Stack direction={'column'} textAlign={'start'} w={'450px'} gap={'30px'} color={'white'}>
            <Text variant={'b'} fontWeight={'700'} fontSize={'22px'} textTransform={'uppercase'}>Самый лучший театр СПБ</Text>
            <Text>Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.</Text>
          </Stack>

          <Stack direction={'column'} w={'fit-content'} color={'white'} gap={'30px'}>
            <Text fontWeight={'700'} fontSize={'22px'} textTransform={'uppercase'}>немного о цифрах</Text>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'} fontWeight={'700'}>
              <Image src={Icon} alt="Icon" width={'70px'} height={'70px'} objectFit={'contain'} />
              <Text><span style={{ color: '#D1A954' }}>1600</span> посадочный мест</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'} fontWeight={'700'}>
              <Image src={Icon2} alt="Icon" width={'70px'} height={'70px'} objectFit={'contain'} />
              <Text><span style={{ color: '#D1A954' }}>350</span> лет истории</Text>
            </Box>
          </Stack>

          <Image src={Img} alt={'alt'} width={'360px'} height={'320px'} objectFit={'cover'} />
        </Box>
      </Box>

      {/* last block */}

      <Box w={'1730px'} height={'715px'} display={'flex'} flexDirection={'column'} color={'white'} position={'relative'} left={'200px'} marginBottom={'150px'}>
        <h1 style={{ margin: '0px auto', fontSize: '50px', fontWeight: '300', marginBottom: '100px' }}><span style={{ color: '#D1A954' }}>наши</span> постановки</h1>
        <Box display={'grid'} gridTemplateColumns={'repeat(4, 1fr)'} h={'550px !important'}>
          <Flex className='bg' flexDirection={'column'} justifyContent={'space-between'} p={'40px'} textTransform={'uppercase'} overflow={'hidden'} position={'relative'} fontWeight={'700'} >
            <Text>ОСКАР 2020</Text>
            <Text position={'absolute'} fontWeight={'700'} bottom={'85px'} left={'-10px'} transform={'rotate(-90deg)'}>сентябрь 2020</Text>
          </Flex>
          <Flex className='bg2' p={'40px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Button bg={'#D1A954'} w={'100px'} h={'100px'} borderRadius={'100%'}>
              <Search2Icon w={'30px'} h={'30px'} />
            </Button>
          </Flex>
          <Flex className='bg3' p={'40px'} flexDirection={'column'} justifyContent={'space-between'} textTransform={'uppercase'} overflow={'hidden'} position={'relative'} fontWeight={'700'} >
            <Text>золотой грамофон</Text>
            <Text position={'absolute'} fontWeight={'700'} bottom={'85px'} left={'-10px'} transform={'rotate(-90deg)'}>июль 2020</Text>
          </Flex>
          <Flex className='bg4' p={'40px'} flexDirection={'column'} justifyContent={'space-between'} textTransform={'uppercase'} overflow={'hidden'} position={'relative'} fontWeight={'700'} >
            <Text>щелкунчик</Text>
            <Text position={'absolute'} fontWeight={'700'} bottom={'85px'} left={'-10px'} transform={'rotate(-90deg)'}>май 2020</Text>
          </Flex>
        </Box>
      </Box>

      {/* Postanovki */}

      <Box className='rating' w={'1110px'} h={'550px'} margin={'0px auto'} marginBottom={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box w={'750px'} h={'300px'} display={'flex'} flexDirection={'column'} color={'#D1A954'} fontWeight={'700'}>
          <Flex gap={'130px'} alignItems={'center'}>
            <Text fontSize={'70px'}>2018</Text>
            <Box display={'flex'} gap={'30px'}>
              {
                [1, 2, 3, 4, 5].map(item => <StarIcon key={item} w={'26px'} cursor={'pointer'} height={'26px'} color={'#D1A954'} />)
              }
            </Box>
          </Flex>
          <Flex gap={'130px'} alignItems={'center'}>
            <Text fontSize={'70px'}>2019</Text>
            <Text fontSize={'36px'} color={'white'}>Лучший театр</Text>
          </Flex>
          <Flex gap={'130px'} alignItems={'center'}>
            <Text fontSize={'70px'}>2020</Text>
            <Text fontSize={'36px'} color={'white'}>по мнению театральных критиков Парижа</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default Main