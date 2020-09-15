import React, { useState } from 'react'
import { Delete, Edit } from '@styled-icons/material-sharp'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import Column from 'components/Column'
import Row from 'components/Row'
import Text from 'components/Text'
import Image from 'components/Image'
import Modal from 'components/Modal'
import CloseIcon from 'components/Icons/CloseIcon'

import { showNaver, deleteNaver } from 'services/navers'
import { toast } from 'react-toastify'
import { calcAge, calcDate } from 'helpers/formatDate'

const NaversListComponent = ({ navers, handleRenderList }) => {
  const history = useHistory()
  const [isExpandedCard, setExpandedCard] = useState(false)
  const [selectedNaver, setselectedNaver] = useState({})
  const [confirm, setConfirm] = useState(false)

  const handleExpandedCard = async id => {
    try {
      const data = await showNaver(id)
      setselectedNaver(data)
      setExpandedCard(true)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async id => {
    try {
      await deleteNaver(id)
      setConfirm(false)
      setExpandedCard(false)
      handleRenderList()
      toast.success('Deletado com sucesso!')
    } catch (err) {
      toast.error(err.response.data.message)
      console.log(err)
    }
  }

  return (
    <Row display='flex' flexWrap='wrap'>
      {navers.map(({ id, url, name, job_role }) => (
        <Column key={id} bg='#e8e8e8' borderRadius='5px' p='10px' m='30px 60px 0px 0px'>
          <Image
            cursor='pointer'
            onClick={() => handleExpandedCard(id)}
            backgroundImage={url}
            width='200px'
            height='200px'
            borderRadius='50%'
            m='10px'
          />
          <Text textAlign='center' fontWeight='bold' color='#2d2d2d'>
            {name}
          </Text>
          <Text textAlign='center' lineHeight='24px' mb='5px'>
            {job_role}
          </Text>
          <Row justifyContent='center'>
            <Button variant='delete' width='50px' m='1px' onClick={() => setConfirm(id)}>
              <Delete size='24' />
            </Button>
            <Button variant='secondary' width='50px' m='1px' onClick={() => history.push(`/edit/${id}`)}>
              <Edit size='24' />
            </Button>
          </Row>
        </Column>
      ))}
      {isExpandedCard && (
        <Modal>
          <Row bg='white' borderRadius='4px' flexDirection={['column', 'row']} position='absolute' flexWrap='wrap'>
            <CloseIcon size='24' onClick={() => setExpandedCard(false)} />
            <Column width='350px' height='350px' minWidth='200px' maxWidth='350px'>
              <Image width='100%' height='100%' backgroundImage={selectedNaver.url} />
            </Column>
            <Column display='flex' p='25px'>
              <Text fontWeight='600' variant='big' mb='5px' color='#2d2d2d'>
                {selectedNaver.name}
              </Text>
              <Text mb='15px'>{selectedNaver.job_role}</Text>
              <Text fontWeight='600' variant='regular' mb='3px' color='#2d2d2d'>
                Idade
              </Text>
              <Text mb='10px'>{calcAge(selectedNaver.birthdate)}</Text>
              <Text fontWeight='600' variant='regular' color='#2d2d2d'>
                Tempo de empresa
              </Text>
              <Text mb='10px'>{calcDate(selectedNaver.admission_date)}</Text>
              <Text fontWeight='600' variant='regular' mb='2px' color='#2d2d2d'>
                Projetos que participou
              </Text>
              <Text>{selectedNaver.project}</Text>
              <Row height='100%' alignItems='flex-end'>
                <Button variant='delete' width='50px' m='1px' onClick={() => setConfirm(selectedNaver.id)}>
                  <Delete size='24' />
                </Button>
                <Button
                  variant='secondary'
                  width='50px'
                  m='1px'
                  onClick={() => history.push(`/edit/${selectedNaver.id}`)}
                >
                  <Edit size='24' />
                </Button>
              </Row>
            </Column>
          </Row>
        </Modal>
      )}

      {confirm && (
        <Modal>
          <Column display='flex' width='500px' height='200px' bg='#FFF' borderRadius='4px' p='20px'>
            <Text fontWeight='600' fontSize='24px' lineHeight='36px'>
              Excluir Naver
            </Text>
            <Text m='25px 0px'>Tem certeza que quer apagar este naver?</Text>
            <Row>
              <Button onClick={() => setConfirm(false)} bg='#c2c2c2'>
                cancelar
              </Button>
              <Button ml='10px' bg='blueviolet' onClick={() => handleDelete(confirm)}>
                confirmar
              </Button>
            </Row>
          </Column>
        </Modal>
      )}
    </Row>
  )
}

export default NaversListComponent
