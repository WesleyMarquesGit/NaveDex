import React from 'react'
import { ExitToApp } from '@styled-icons/material-sharp'

import { useAuth } from 'context/auth-context'

import Row from 'components/Row'
import Link from 'components/Link'
import Button from 'components/Button'

const HeaderComponent = () => {
  const { logout } = useAuth()
  return (
    <Row justifyContent='space-between' marginBottom='50px'>
      <Link to='/home' textDecoration='none'>
        HOME
      </Link>
      <ExitToApp size='24' color='#1c1c1c' cursor='pointer' onClick={logout} />
    </Row>
  )
}

export default HeaderComponent
