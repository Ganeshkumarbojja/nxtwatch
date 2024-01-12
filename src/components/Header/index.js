import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import Cookie from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {IoReorderThreeSharp} from 'react-icons/io5'

import NxtContext from '../../context/nxtContext'

import {
  HeaderContainer,
  HeaderResponsiveContainer,
  HeaderWebsiteLogo,
  HeaderNavLinks,
  ThemeBtn,
  HeaderUserIcon,
  LogoutBtn,
  ModalContainer,
  ConfirmationMessage,
  LogoutModalBtns,
  LogoutPopupBtn,
  LogoutBtnMobile,
  ToggleBtn,
} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.push('/login')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const headerWebsiteLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <HeaderContainer dark={isDark}>
            <HeaderResponsiveContainer>
              <Link to="/">
                <HeaderWebsiteLogo src={headerWebsiteLogo} alt="website logo" />
              </Link>
              <HeaderNavLinks>
                <ThemeBtn
                  type="button"
                  onClick={() => changeTheme()}
                  data-testid="theme"
                >
                  {isDark ? (
                    <BsBrightnessHigh
                      size="25"
                      color={isDark ? '#f9f9f9' : '#0f0f0f'}
                    />
                  ) : (
                    <FaMoon size="23" color={isDark ? '#f9f9f9' : '#0f0f0f'} />
                  )}
                </ThemeBtn>
                <HeaderUserIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <ToggleBtn type="button" dark={isDark}>
                  <IoReorderThreeSharp
                    size="40"
                    color={isDark ? '#f9f9f9' : '#0f0f0f'}
                  />
                </ToggleBtn>
                <Popup
                  modal
                  trigger={
                    <>
                      <LogoutBtn type="button" dark={isDark}>
                        Logout
                      </LogoutBtn>
                      <LogoutBtnMobile type="button" dark={isDark}>
                        <FiLogOut
                          size="25"
                          color={isDark ? '#f9f9f9' : '#0f0f0f'}
                        />
                      </LogoutBtnMobile>
                    </>
                  }
                >
                  {close => (
                    <ModalContainer dark={isDark}>
                      <ConfirmationMessage dark={isDark}>
                        Are you sure want to logout?
                      </ConfirmationMessage>
                      <LogoutModalBtns>
                        <LogoutPopupBtn
                          type="button"
                          onClick={() => close()}
                          outline
                        >
                          Cancel
                        </LogoutPopupBtn>
                        <LogoutPopupBtn type="button" onClick={onLogout}>
                          Confirm
                        </LogoutPopupBtn>
                      </LogoutModalBtns>
                    </ModalContainer>
                  )}
                </Popup>
              </HeaderNavLinks>
            </HeaderResponsiveContainer>
          </HeaderContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}
export default withRouter(Header)
