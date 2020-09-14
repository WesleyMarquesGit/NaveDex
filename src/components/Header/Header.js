import React from 'react'
import { ExitToApp } from '@styled-icons/material-sharp'

import { useAuth } from 'context/auth-context'

import Row from 'components/Row'
import Link from 'components/Link'
import Text from 'components/Text'

const HeaderComponent = () => {
  const { logout } = useAuth()
  return (
    <Row justifyContent='space-between' marginBottom='50px' alignItems='center'>
      <Link to='/home' textDecoration='none' color='#2d2d2d'>
        <Text fontSize='30px' fontWeight='600' lineHeight='48px'>
          nave.rs
        </Text>
      </Link>
      <ExitToApp size='24' color='#1c1c1c' cursor='pointer' onClick={logout} />
    </Row>
  )
}

export default HeaderComponent
