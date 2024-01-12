import {SideNav, SideNavName, StyledLink} from './styledComponents'

import NxtContext from '../../context/nxtContext'

const SideNavItem = props => {
  const {sideNavDetails, isActive} = props
  const {icon, name, link} = sideNavDetails
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SideNav active={isActive} dark={isDark}>
            <StyledLink to={link} dark={isDark} active={isActive}>
              {icon}
              <SideNavName active={isActive} dark={isDark}>
                {name}
              </SideNavName>
            </StyledLink>
          </SideNav>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SideNavItem
