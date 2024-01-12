import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingAndSavedVideo = styled.li`
  width: 100%;
  margin-bottom: 40px;
  @media screen and (max-width: 575px) {
    margin-bottom: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 40%;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    width: 55%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
export const TrendingAndSavedVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 575px) {
    padding: 20px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.dark ? '#94a3b8' : '#616e7c')};
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (max-width: 575px) {
    margin-right: 10px;
    margin-top: -15px;
  }
`
export const TrendingAndSavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  margin-top: 0px;
  line-height: 33px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
    margin-bottom: 0px;
    line-height: 25px;
  }
`
export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  //   align-items: center;
  text-decoration: none;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`
export const ViewsAndPublished = styled.p`
  display: flex;
  align-items: center;
  padding-top: 0px;
  margin-top: 0px;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.dark ? '#94a3b8' : '#616e7c')};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const PublishedContainer = styled.ul`
  list-style-type: disc;
  padding: 0px;
  margin-left: 30px;
`
export const Published = styled.li`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.dark ? '#94a3b8' : '#616e7c')};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const ChannelViewsPublish = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 575px) {
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
  }
`
