import React from 'react'

import Button from 'components/Button'
import Column from 'components/Column'
import Row from 'components/Row'
import Text from 'components/Text'
import Modal from 'components/Modal'

const ConfirmComponent = ({ handleDelete, setConfirm, confirm }) => {
  return (
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
  )
}

export default ConfirmComponent
