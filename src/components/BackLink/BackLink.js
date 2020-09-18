import React from 'react'
import { KeyboardArrowLeft as BackIcon } from '@styled-icons/material-sharp'

import Link from 'components/Link'
import Row from 'components/Row'
import Text from 'components/Text'

const BackLinkComponent = ({ children, ...props }) => {
  return (
    <Link to='/home' textDecoration='none' color='#2d2d2d'>
      <Row>
        <BackIcon size='24' />
        <Text mb='30px' variant='regular' fontWeight='600'>
          {children}
        </Text>
      </Row>
    </Link>
  )
}

export default BackLinkComponent
