import {
  SideBarAndNotFound,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHead,
  NotFoundPara,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtContext from '../../context/nxtContext'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <SideBarAndNotFound>
            <SideBar />
            <NotFoundContainer dark={isDark}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHead dark={isDark}>Page Not Found</NotFoundHead>
              <NotFoundPara dark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </SideBarAndNotFound>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
