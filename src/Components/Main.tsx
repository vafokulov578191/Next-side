import { Box, Button, Flex, Stack, Text, Image } from '@chakra-ui/react'
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
      <Box w={{ xl: '1130px', lg: '1130px', md: '1130px', sm: '750px' }} h={{ xl: '480px', lg: '480px', md: '100%', sm: '100%' }} margin={'150px auto'} display={'flex'} flexDirection={'column'} gap={'100px'} textAlign={'center'}>
        <h1 style={{ textTransform: 'uppercase', fontSize: '50px', color: 'white' }}><span style={{ color: '#D1A954' }}>о</span> театре</h1>
        <Box w={'100%'} height={'100%'} position={'relative'} left={{ xl: '200px', lg: '200px', md: '200px', sm: '0px' }} display={'flex'} flexDirection={{ xl: 'row', lg: 'row', md: 'row', sm: 'row', sl: 'column' }} gap={'40px'} margin={{ xl: '0px', lg: '0px', md: '0px auto', sm: '0px auto' }}>
          <Stack direction={'column'} textAlign={{ xl: 'start', lg: 'start', md: 'start', sm: 'start', sl: 'center' }} w={'450px'} gap={'30px'} color={'white'}>
            <Text variant={'b'} fontWeight={'700'} fontSize={'22px'} textTransform={'uppercase'}>Самый лучший театр СПБ</Text>
            <Text>Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.</Text>
          </Stack>

          <Stack direction={'column'} w={'fit-content'} color={'white'} gap={'30px'} alignItems={{ xl: 'baseline', lg: 'baseline', md: 'flex-start', sm: 'flex-start' }} margin={{ xl: '0px', lg: '0px', md: '0px', sm: '0px', sl: '0px auto ' }}>
            <Text fontWeight={'700'} fontSize={'22px'} textTransform={'uppercase'} margin={'0px auto'}>немного о цифрах</Text>
            <Box display={'flex'} flexDirection={{ xl: 'column', lg: 'column', md: 'column', sm: 'column', sl: 'row' }} alignItems={{ xl: 'baseline', lg: 'baseline', md: 'flex-start', sm: 'flex-start', sl: 'center' }} justifyContent={'center'} gap={{ xl: '30px', lg: '30px', md: '30px', sm: '30px', sl: '60px' }}>
              <Box display={'flex'} flexDirection={'column'} gap={'20px'} fontWeight={'700'}>
                <Image src={Icon} alt="Icon" width={'70px'} height={'70px'} objectFit={'contain'} />
                <Text><span style={{ color: '#D1A954' }}>1600</span> посадочный мест</Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} gap={'20px'} fontWeight={'700'}>
                <Image src={Icon2} alt="Icon" width={'70px'} height={'70px'} objectFit={'contain'} />
                <Text><span style={{ color: '#D1A954' }}>350</span> лет истории</Text>
              </Box>
            </Box>
          </Stack>

          <Image display={{ xl: 'block', lg: 'block', md: 'none', sm: 'none', sl: 'none' }} src={Img} alt={'alt'} width={'360px'} height={'320px'} objectFit={'cover'} />
        </Box>
      </Box>

      {/* last block */}

      <Box w={{ xl: '1730px', lg: '1730px', md: '1000px' }} height={'715px'} display={'flex'} flexDirection={'column'} color={'white'} position={'relative'} left={{ xl: '200px', lg: '200px', md: '200px', sm: '0px' }} marginBottom={'150px'}>
        <h1 style={{ margin: '0px auto', fontSize: '50px', fontWeight: '300', marginBottom: '100px' }}><span style={{ color: '#D1A954' }}>наши</span> постановки</h1>
        <Box display={'grid'} w={{ xl: '100%', lg: '100%', md: '880px', sm: '100%' }} gridTemplateColumns={{ xl: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', sl: 'repeat(2, 1fr)' }} h={'550px !important'} >
          <Flex className='bg' flexDirection={'column'} justifyContent={'space-between'} p={'40px'} textTransform={'uppercase'} overflow={'hidden'} position={'relative'} fontWeight={'700'}>
            <Text>ОСКАР 2020</Text>
            <Text position={'absolute'} fontWeight={'700'} bottom={'85px'} left={'-10px'} transform={'rotate(-90deg)'}>сентябрь 2020</Text>
          </Flex>
          <Flex className='bg2' display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Button bg={'#D1A954'} w={'100px'} h={'100px'} borderRadius={'100%'}>
              <Search2Icon w={'30px'} h={'30px'} />
            </Button>
          </Flex>
          <Flex className='bg3' display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none', sl: 'none' }} p={'40px'} flexDirection={'column'} justifyContent={'space-between'} textTransform={'uppercase'} overflow={'hidden'} position={'relative'} fontWeight={'700'} >
            <Text>золотой грамофон</Text>
            <Text position={'absolute'} fontWeight={'700'} bottom={'85px'} left={'-10px'} transform={'rotate(-90deg)'}>июль 2020</Text>
          </Flex>
          <Flex className='bg4' display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none', sl: 'none' }} p={'40px'} flexDirection={'column'} justifyContent={'space-between'} textTransform={'uppercase'} overflow={'hidden'} position={'relative'} fontWeight={'700'} >
            <Text>щелкунчик</Text>
            <Text position={'absolute'} fontWeight={'700'} bottom={'85px'} left={'-10px'} transform={'rotate(-90deg)'}>май 2020</Text>
          </Flex>
        </Box>
      </Box>

      {/* Postanovki */}

      <Box className='rating' w={{ xl: '1110px', lg: '1110px', md: '100%', sm: '100%', sl: '100%' }} h={'550px'} padding={{ xl: '0px', lg: '0px', md: '0px', sm: '60px' }} margin={'0px auto'} marginBottom={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box w={'750px'} h={'300px'} display={'flex'} flexDirection={'column'} color={'#D1A954'} fontWeight={'700'}>
          <Flex gap={'130px'} alignItems={'center'}>
            <Text fontSize={'70px'}>2018</Text>
            <Box display={'flex'} gap={{ xl: '30px', lg: '30px', md: '30px', sm: '30px', sl: '10px' }}>
              {
                [1, 2, 3, 4, 5].map(item => <StarIcon key={item} w={'26px'} cursor={'pointer'} height={'26px'} color={'#D1A954'} />)
              }
            </Box>
          </Flex>
          <Flex gap={'130px'} alignItems={'center'}>
            <Text fontSize={'70px'}>2019</Text>
            <Text fontSize={{ xl: '34px', lg: '34px', md: '34px', sm: '29px', sl: '25px' }} color={'white'}>Лучший театр</Text>
          </Flex>
          <Flex gap={'130px'} alignItems={'center'}>
            <Text fontSize={'70px'}>2020</Text>
            <Text fontSize={{ xl: '34px', lg: '34px', md: '34px', sm: '29px', sl: '25px' }} color={'white'}>по мнению театральных критиков Парижа</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default Main