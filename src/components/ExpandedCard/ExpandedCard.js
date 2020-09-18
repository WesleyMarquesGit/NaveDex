import React from 'react'
import { Delete, Edit } from '@styled-icons/material-sharp'

import Button from 'components/Button'
import Column from 'components/Column'
import Row from 'components/Row'
import Text from 'components/Text'
import Image from 'components/Image'
import Modal from 'components/Modal'
import CloseIcon from 'components/Icons/CloseIcon'

import { calcAge, calcDate } from 'helpers/formatDate'

const ExpandedCardComponent = ({ selectedNaver, setConfirm, setExpandedCard }) => {
  return (
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
          <Row height='100%' alignItems='flex-end' mb='10px'>
            <Button variant='delete' width='50px' m='1px' onClick={() => setConfirm(selectedNaver.id)}>
              <Delete size='24' />
            </Button>
            <Button variant='secondary' width='50px' m='1px' onClick={() => history.push(`/edit/${selectedNaver.id}`)}>
              <Edit size='24' />
            </Button>
          </Row>
        </Column>
      </Row>
    </Modal>
  )
}

export default ExpandedCardComponent
