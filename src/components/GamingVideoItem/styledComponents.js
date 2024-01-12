import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideo = styled.li`
  width: 28%;
  margin-right: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 26%;
  }
  @media screen and (max-width: 575px) {
    width: 43%;
    margin-right: 20px;
  }
`
export const GamingVideoImage = styled.img`
  width: 100%;
`
export const GamingVideoContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const GamingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#212121')};
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const GamingVideoViews = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  line-height: 25px;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`
