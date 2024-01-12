import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  width: 30%;
  margin-right: 20px;
  margin-bottom: 30px;
  min-height: 330px;
  @media screen and (max-width: 767px) {
    width: 45%;
    margin-right: 15px;
    min-height: 300px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
    min-height: 300px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
`
export const VideoItemDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`
export const ChannelLogo = styled.img`
  width: 13%;
  margin-right: 15px;
`
export const VideoItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const VideoItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  margin: 0px;
  color: ${props => (props.dark ? '#f9f9f9' : '#212121')};
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  margin-bottom: 0px;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const ViewsAndPublished = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`
export const VideoItemViews = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  margin-right: 25px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const PublishedContainer = styled.ul`
  padding: 0px;
  list-style-type: disc;
`
export const PublishedAt = styled.li`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
