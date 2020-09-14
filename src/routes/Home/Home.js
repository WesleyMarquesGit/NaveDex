import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import Container from 'components/Container'
import Column from 'components/Column'
import Row from 'components/Row'
import Text from 'components/Text'
import Header from 'components/Header'
import NaversList from 'components/NaversList'

import { getNavers } from 'services/navers'

const Home = () => {
  const [navers, setNavers] = useState([])
  const [renderList, setRenderList] = useState(false)
  const [showList, setShowList] = useState('Ocultar')

  const history = useHistory()

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const data = await getNavers()
        setNavers(data)
        setRenderList(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [renderList])

  const showNavers = () => {
    setShowList(showList => (showList === 'Ocultar' ? 'Mostrar' : 'Ocultar'))
  }

  return (
    <Container>
      <Column display='flex'>
        <Header />
        <Column>
          <Row justifyContent='space-between' alignItems='center'>
            <Text color='#c6c6c6' fontSize='40px' fontWeight='600' lineHeight='48px'>
              Navers
            </Text>
            <Button w='30px' variant='primary' onClick={showNavers}>
              {showList}
            </Button>
            <Button bg='blueviolet' onClick={() => history.push('/add')}>
              Adicionar Naver
            </Button>
          </Row>
          {showList === 'Ocultar' && <NaversList navers={navers} handleRenderList={() => setRenderList(true)} />}
        </Column>
      </Column>
    </Container>
  )
}

export default Home
