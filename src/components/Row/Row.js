import styled from 'styled-components'
import { space, layout, color, flexbox, border, shadow, position } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { MEDIADESKTOP, MEDIAMOBILE } from 'helpers'

const RowComponent = styled.div(
  {
    display: 'flex'
  },
  flexbox,
  space,
  layout,
  color,
  border,
  shadow,
  position
)

RowComponent.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.border,
  ...propTypes.shadow,
  ...propTypes.position
}

export const RowDesktop = styled(RowComponent)`
  @media (min-width: ${MEDIADESKTOP}px) {
    display: flex;
  }
`

export const RowMobile = styled(RowComponent)`
  @media (min-width: ${MEDIAMOBILE}px) {
    background-color: red;
    justify-content: space-between;
  }
`

export default RowComponent
