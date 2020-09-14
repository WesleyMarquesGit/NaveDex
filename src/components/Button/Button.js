import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, typography, color, border, variant } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import Loader from 'components/Loader'

const ButtonComponent = ({ children, isLoading, ...props }) => (
  <Button {...props}>{isLoading ? <Loader /> : children}</Button>
)

const Button = styled.button(
  space,
  layout,
  typography,
  color,
  border,
  variant({
    variants: {
      delete: {
        bg: '#c6c6c6',
        transition: '1s',
        '&:hover': {
          bg: 'red'
        }
      },
      primary: {
        bg: 'blueviolet',
        transition: '1s',
        '&:hover': {
          bg: '#af7cdf'
        }
      },
      secondary: {
        bg: '#c6c6c6',
        transition: '1s',
        '&:hover': {
          bg: 'blueviolet'
        }
      }
    }
  })
)

ButtonComponent.defaultProps = {
  width: 'regular',
  height: 'small',
  borderRadius: 4,
  color: 'white'
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
  ...propTypes.border
}

export default ButtonComponent
