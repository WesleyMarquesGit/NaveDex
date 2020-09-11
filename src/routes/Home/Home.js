import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import Container from 'components/Container'
import Column from 'components/Column'
import Row from 'components/Row'
import Text from 'components/Text'
import Header from 'components/Header'
import Modal from 'components/Modal'
import NaversList from 'components/NaversList'

import { getNavers } from 'services/navers'

const Home = () => {
  const [navers, setNavers] = useState([])
  const [alert, setAlert] = useState(false)
  const [renderList, setRenderList] = useState({
    state: true,
    message: 'Oculta Navers'
  })

  const history = useHistory()

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const data = await getNavers()
        setNavers(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [alert])

  const showNavers = () => {
    renderList.state
      ? setRenderList({
          state: false,
          message: 'Mostra Navers'
        })
      : setRenderList({
          state: true,
          message: 'Oculta Navers'
        })
  }

  const showSucess = () => {
    setAlert(true)
  }

  return (
    <Container>
      <Column display='flex'>
        <Header />
        <Column>
          <Row justifyContent='space-between'>
            <Text>Navers</Text>
            <Button bg='#c6c6c6' onClick={showNavers}>
              {renderList.message}
            </Button>
            <Button bg='blueviolet' onClick={() => history.push('/add')}>
              Adicionar Naver
            </Button>
          </Row>
          {renderList.state && <NaversList navers={navers} showSucess={showSucess} />}
        </Column>
      </Column>

      {alert && (
        <Modal>
          <Column width='500px' height='200px' bg='#FFF'>
            <Row>
              <Button onClick={() => setAlert(false)} bg='#c2c2c2'>
                cancelar
              </Button>
              <Text>Excluido com sucesso</Text>
            </Row>
          </Column>
        </Modal>
      )}
    </Container>
  )
}

export default Home
