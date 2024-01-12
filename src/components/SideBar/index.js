import {TiHome} from 'react-icons/ti'
import {HiFire, HiOutlineSortDescending} from 'react-icons/hi'
import {IoGameController} from 'react-icons/io5'
import {Component} from 'react'

import NxtContext from '../../context/nxtContext'

import {
  SideBarContainer,
  SideBarNavLinks,
  SideBarFooter,
  ContactText,
  SocialMediaImages,
  SideFooterDescription,
  FaceBookLogo,
  TwitterLogo,
  LinkedInLogo,
} from './styledComponents'

import SideNavItem from '../SideNavItem'

const sideNavItems = [
  {
    id: 1,
    icon: <TiHome size="20" />,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    icon: <HiFire size="20" />,
    name: 'Trending',
    link: '/trending',
  },
  {
    id: 3,
    icon: <IoGameController size="20" />,
    name: 'Gaming',
    link: '/gaming',
  },
  {
    id: 4,
    icon: <HiOutlineSortDescending size="20" />,
    name: 'Saved Videos',
    link: '/saved-videos',
  },
]

class SideBar extends Component {
  render() {
    const {activeSideNavId} = this.props
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarContainer dark={isDark}>
              <SideBarNavLinks>
                {sideNavItems.map(item => (
                  <SideNavItem
                    key={item.id}
                    sideNavDetails={item}
                    isActive={item.id === activeSideNavId}
                  />
                ))}
              </SideBarNavLinks>
              <SideBarFooter>
                <ContactText dark={isDark}>CONTACT US</ContactText>
                <SocialMediaImages>
                  <FaceBookLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
                  <TwitterLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
                  <LinkedInLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
                </SocialMediaImages>
                <SideFooterDescription dark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </SideFooterDescription>
              </SideBarFooter>
            </SideBarContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SideBar
