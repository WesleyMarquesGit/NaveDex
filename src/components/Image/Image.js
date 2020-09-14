import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, color, border, background } from 'styled-system'

const getProps = ({ backgroundImage, ...props }) => {
  if (!backgroundImage) {
    return props
  }

  return {
    as: 'div',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundImage: `url(${backgroundImage})`,
    ...props
  }
}

const ImageComponent = ({ cursor = 'default', ...props }) => <Image cursor={cursor} {...getProps(props)} />

const Image = styled.img(
  background,
  space,
  layout,
  color,
  border,
  ({ cursor }) => `
    cursor: ${cursor}; 
  `
)

ImageComponent.propTypes = {
  backgroundImage: PropTypes.string
}

export default ImageComponent
