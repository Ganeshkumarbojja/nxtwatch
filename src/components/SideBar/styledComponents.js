import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark ? '#181818' : ' #ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SideBarNavLinks = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const SideBarFooter = styled.div`
  padding: 20px;
`
export const ContactText = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
export const SocialMediaImages = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const SideFooterDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
export const FaceBookLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`
export const TwitterLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`
export const LinkedInLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`
