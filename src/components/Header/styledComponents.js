import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  min-height: 13vh;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#181818' : '  #ffffff')};
`
export const HeaderResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderWebsiteLogo = styled.img`
  width: 130px;
  @media screen and (max-width: 767px) {
    width: 100px;
  }
`
export const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const HeaderUserIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  padding: 5px 15px;
  font-family: 'Roboto';
  background-color: transparent;
  border: solid 1.5px;
  border-color: ${props => (props.dark ? '#f9f9f9' : '#3b82f6')};
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#3b82f6')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  width: 350px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const ConfirmationMessage = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.dark ? '#f9f9f9' : '#00306e')};
  font-weight: 400;
  margin-bottom: 30px;
`
export const LogoutModalBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`
export const LogoutPopupBtn = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 100px;
  height: 35px;
  font-size: 16px;
  font-weight: 500;
  border: ${props => (props.outline ? 'solid 1px #94a3b8' : 'none')};
  color: ${props => (props.outline ? '#94a3b8' : '#FFFFFF')};
  cursor: pointer;
  border-radius: 5px;
`
export const LogoutBtnMobile = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`
export const ToggleBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`
