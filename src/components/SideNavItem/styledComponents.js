import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SideNav = styled.li`
  display: flex;
  align-items: center;
  padding-left: 30px;
  background-color: ${props => {
    if (props.active === true) {
      if (props.dark === true) {
        return '#424242'
      }
      return '#f1f5f9'
    }
    return 'transparent'
  }}
  }};
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.active === true) {
      return '#ff0000'
    }
    if (props.dark === true) {
      return '#cccccc'
    }
    return '#606060'
  }};
  width: 100%;
`
export const SideNavName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.active ? '500' : '400')};
  margin-left: 25px;
  color: ${props => {
    if (props.active === true) {
      if (props.dark === true) {
        return '#ffffff'
      }
      return '#000000'
    }
    return 'none'
  }};
`
