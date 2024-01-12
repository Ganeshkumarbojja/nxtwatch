import {Headers, HeaderIconContainer, HeaderHead} from './styledComponents'

import NxtContext from '../../context/nxtContext'

const TGSHeader = props => {
  const {heading, icon} = props
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Headers dark={isDark}>
            <HeaderIconContainer dark={isDark}>{icon}</HeaderIconContainer>
            <HeaderHead dark={isDark}>{heading}</HeaderHead>
          </Headers>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default TGSHeader
