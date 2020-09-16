import React, { useState } from 'react'
import { Delete, Edit } from '@styled-icons/material-sharp'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import Column from 'components/Column'
import Row from 'components/Row'
import Text from 'components/Text'
import Image from 'components/Image'
import ExpandedCard from 'components/ExpandedCard'
import Confirm from 'components/Confirm'

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
        <ExpandedCard selectedNaver={selectedNaver} setExpandedCard={setExpandedCard} setConfirm={setConfirm} />
      )}
      {confirm && <Confirm confirm={confirm} setConfirm={setConfirm} handleDelete={handleDelete} />}
    </Row>
  )
}

export default NaversListComponent
