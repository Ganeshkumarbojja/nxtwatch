import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  height: 100vh;
  display: flex;
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 500px;
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`
export const VideoItemDetailsBody = styled.div`
  height: 100%;
  overflow: auto;
  width: 80%;
  padding: 20px;
  background-color: ${props => (props.dark ? '#0f0f0f ' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0px;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.dark ? '#f9f9f9' : '#212121')};
  margin-top: 30px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ViewsDateLikeDislikeSave = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const ViewsDate = styled.div`
  display: flex;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
`
export const VideoDetailsPublishedContainer = styled.ul`
  padding: 0px;
  list-style-type: disc;
  margin-left: 30px;
`
export const VideoDetailsPublishedAt = styled.li`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.dark ? '#94a3b8' : '#616e7c')};
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const LikeDislikeSave = styled.div`
  display: flex;
`
export const LikeBtn = styled.button`
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  align-items: center;
  margin-right: 10px;
`
export const DislikeBtn = styled.button`
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  align-items: center;
  margin-right: 10px;
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
`

export const SaveBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  margin-right: 10px;
`
export const LikeText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 5px;
`

export const DislikeText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 5px;
`

export const SaveText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 5px;
`
export const HorizontalLine = styled.hr`
  border: solid;
  border-width: 1px;
  border-color: #cccccc;
`
export const VideoItemDetailsProfileDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`
export const VideoItemProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#212121')};
`
export const SubscribersCount = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
`
export const VideoDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 30px;
  color: ${props => (props.dark ? '#f9f9f9' : '#475569')};
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const VideoDetailsContent = styled.div`
  width: 100%;
  padding: 20px;
`
