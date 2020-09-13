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
    <Row display='flex' flexWrap='wrap' justifyContent='space-between' mt='25px'>
      {navers.map(({ id, url, name, job_role }) => (
        <Column key={id} bg='#f9f9f9' borderRadius='5px' p='10px' m='10px'>
          <Image
            cursor='pointer'
            onClick={() => handleExpandedCard(id)}
            backgroundImage={url}
            width='200px'
            height='200px'
            borderRadius='50%'
            m='10px'
          />
          <Text textAlign='center' fontWeight='bold'>
            {name}
          </Text>
          <Text textAlign='center'>{job_role}</Text>
          <Row justifyContent='center'>
            <Button bg='#c6c6c6' width='50px' m='1px' onClick={() => setConfirm(id)}>
              <Delete size='24' />
            </Button>
            <Button bg='#c6c6c6' width='50px' m='1px' onClick={() => history.push(`/edit/${id}`)}>
              <Edit size='24' />
            </Button>
          </Row>
        </Column>
      ))}
      {isExpandedCard && (
        <Modal>
          <Row bg='white' display='flex'>
            <Image width='350px' height='400px' backgroundImage={selectedNaver.url} />
            <Column width='350px' height='400px'>
              <CloseIcon size='24' onClick={() => setExpandedCard(false)} />
              <Text>{selectedNaver.name}</Text>
              <Text>{selectedNaver.job_role}</Text>
              <Text>Idade</Text>
              <Text>{selectedNaver.birthdate}</Text>
              <Text>Tempo de empresa</Text>
              <Text>{selectedNaver.admission_date}</Text>
              <Text>Projetos que participou</Text>
              <Text>{selectedNaver.project}</Text>
              <Button bg='#c6c6c6' width='50px' m='1px' onClick={() => setConfirm(selectedNaver.id)}>
                <Delete size='24' />
              </Button>
              <Button bg='#c6c6c6' width='50px' m='1px' onClick={() => history.push(`/edit/${selectedNaver.id}`)}>
                <Edit size='24' />
              </Button>
            </Column>
          </Row>
        </Modal>
      )}

      {confirm && (
        <Modal>
          <Column width='500px' height='200px' bg='#FFF'>
            <Text>Tem certeza que quer apagar este naver?</Text>
            <Row alignItems='flex-end'>
              <Button onClick={() => setConfirm(false)} bg='#c2c2c2'>
                cancelar
              </Button>
              <Button bg='blueviolet' onClick={() => handleDelete(confirm)}>
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
