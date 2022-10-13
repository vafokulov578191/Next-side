import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Armchair from '../../public/Icons/armchair 1.png'
import Theatre from '../../public/Icons/theater 1.png'
import Reaclang from '../../public/img/Rectangle 12.png'
import Bg_img from '../../public/img/Rectangle 15.png'
import Bg_img2 from '../../public/img/Rectangle 16.png'
import Bg_img3 from '../../public/img/Rectangle 15 (1).png'
import Bg_im4 from '../../public/img/Rectangle 15 (2).png'

type Props = {}

const Main = (props: Props) => {
  const Icon: string = Armchair.src
  const Icon2: string = Theatre.src
  const Img: string = Reaclang.src
  const Bg: string = Bg_img.src
  const Bg2: string = Bg_img2.src
  const Bg3: string = Bg_img3.src
  const Bg4: string = Bg_im4.src

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

      <Box w={'1770px'} height={'730px'} display={'flex'} flexDirection={'column'} color={'white'} position={'relative'} left={'150px'} marginBottom={'150px'}>
        <h1 style={{ margin: '0px auto', fontSize: '50px', fontWeight: '300', marginBottom: '100px' }}><span style={{ color: '#D1A954' }}>наши</span> постановки</h1>
        <Box display={'grid'} gridTemplateColumns={'repeat(4, 1fr)'} h={'550px !important'}>
          <Flex className='bg' p={'40px'} >awdawd</Flex>
          <Flex className='bg2' p={'40px'} >awdawd</Flex>
          <Flex className='bg3' p={'40px'} >awdwa</Flex>
          <Flex className='bg4' p={'40px'} >awdaw</Flex>
        </Box>
      </Box>
    </div>
  )
}

export default Main