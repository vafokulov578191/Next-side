import { Box, Button, Flex, Input, Text, Textarea, Image } from '@chakra-ui/react'
import React from 'react'
import Gasprom from '../../public/Icons/logo.png'


type Props = {}

const Footer = (props: Props) => {
  const Gas: string = Gasprom.src

  return (
    <div className='footer'>
      <Box w={{ xl: '1034px', lg: '1034px', md: '100%' }} h={'440px'} display={'flex'} pl={{ xl: '0px', lg: '0px', md: '35px' }} flexDirection={'column'} margin={'0px auto'} marginBottom={'120px'} textAlign={'center'} color={'white'}>
        <h1 style={{ fontSize: '50px', fontWeight: '300', textTransform: 'uppercase', marginBottom: '100px' }}><span style={{ color: '#D1A954' }}>партнеры</span> театра</h1>
        <Box display={'grid'} gridTemplateColumns={'repeat(4, 1fr)'} gap={{ xl: '80px', lg: '80px', md: '30px' }} >
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map(item => <Image key={item} src={Gas} alt='alt' width={{ xl: '200px', lg: '200px', md: '150px' }}
              height={'96px'} objectFit={'contain'} />)
          }
        </Box>
      </Box>

      {/* partners */}

      <Box w={{ xl: '1110px', lg: '1110px', md: '690px' }} h={'360px'} display={'flex'} flexDirection={'column'} margin={'0px auto'} marginBottom={'80px'} gap={'100px'} textAlign={'center'} color={'white'} fontWeight={'300'}>
        <h1 style={{ fontSize: '50px', textTransform: 'uppercase' }}><span style={{ color: '#D1A954' }}>стать</span> меценатом</h1>
        <Box w={'100%'} height={'100%'} display={'flex'} alignItems={'center'} gap={'100px'}>
          <Flex direction={'column'} w={'400px'} alignItems={'flex-start'} gap={'25px'} fontWeight={'700'}>
            <Text>+7 (812) 123-45-55</Text>
            <Text>+7 (812) 123-45-66</Text>
            <Text>info@theater.ru</Text>
            <Text>г. санкт-петербург, невский 140</Text>
          </Flex>

          <form style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-end', justifyContent: 'flex-end' }}>

            <Box w={'100%'} display={'flex'}>
              <Flex w={'220px'} direction={'column'} gap={'30px'}>
                <Input pl={'15px'} w={'200px'} h={'35px'} placeholder='Имя' />
                <Input pl={'15px'} w={'200px'} h={'35px'} placeholder='Телефон' />
              </Flex>
              <Flex w={'220px'} direction={'column'} gap={'30px'}>
                <Input pl={'15px'} w={'200px'} h={'35px'} placeholder='Компания' />
                <Input pl={'15px'} w={'200px'} h={'35px'} placeholder='E-mail' />
              </Flex>
              <Textarea w={'310px'} h={'100px'} pl={'15px'} placeholder='Сообщение ' />
            </Box>


            <Box w={'100%'} display={'flex'} justifyContent={'space-between'}>
              <Text w={'460px'} textAlign={'start'} color={'#989898'}>* Ваши данные не будут переданы третьим лицам, 100% вероятность. Конфиденциальность мы гарантируем, и защищаем персональные данные согласно законку ФЗ-52.</Text>
              <Input w={'190px'} h={'50px'} bg={'#D1A954'} cursor={'pointer'} type={'submit'} />
            </Box>
          </form>
        </Box>
      </Box>

      {/* Forms */}

      <Box w={'1110px'} h={'50px'} display={'flex'} flexDirection={'column'} margin={'0px auto'} marginBottom={'30px'}>
        <Flex w={'100%'} h={'2px'} bgColor={'#565656'}></Flex>
        <Box color={'#989898'} display={'flex'} w={'100%'} h={'100%'} alignItems={'flex-end'} justifyContent={'space-between'}>
          <Text>(с) Все права защищены. Большой театр. 2020</Text>
          <Text>Разработано d-e-n.ru</Text>
        </Box>
      </Box>
    </div>
  )
}

export default Footer