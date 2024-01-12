import {formatDistanceToNow} from 'date-fns'

import NxtContext from '../../context/nxtContext'

import {
  VideoListItem,
  ThumbnailImage,
  VideoItemDetails,
  ChannelLogo,
  VideoItemContent,
  VideoItemTitle,
  ChannelName,
  ViewsAndPublished,
  VideoItemViews,
  PublishedAt,
  PublishedContainer,
  StyledLink,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoListItem>
            <StyledLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemDetails>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <VideoItemContent>
                  <VideoItemTitle dark={isDark}>{title}</VideoItemTitle>
                  <ChannelName dark={isDark}>{channel.name}</ChannelName>
                  <ViewsAndPublished>
                    <VideoItemViews dark={isDark}>
                      {viewCount} views
                    </VideoItemViews>
                    <PublishedContainer>
                      <PublishedAt dark={isDark}>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </PublishedAt>
                    </PublishedContainer>
                  </ViewsAndPublished>
                </VideoItemContent>
              </VideoItemDetails>
            </StyledLink>
          </VideoListItem>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoItem
