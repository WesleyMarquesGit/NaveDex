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
  const [showList, setShowList] = useState({ state: true, message: 'Oculta' })

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
    showList.state
      ? setShowList({
          state: false,
          message: 'Mostrar'
        })
      : setShowList({
          state: true,
          message: 'Ocultar'
        })
  }

  const handleRenderList = () => {
    setRenderList(true)
  }

  return (
    <Container>
      <Column display='flex'>
        <Header />
        <Column>
          <Row justifyContent='space-between'>
            <Text width='regular' variant='big'>
              Navers
            </Text>
            <Button w='30px' bg='#c6c6c6' onClick={showNavers}>
              {showList.message}
            </Button>
            <Button bg='blueviolet' onClick={() => history.push('/add')}>
              Adicionar Naver
            </Button>
          </Row>
          {showList.state && <NaversList navers={navers} handleRenderList={handleRenderList} />}
        </Column>
      </Column>
    </Container>
  )
}

export default Home
