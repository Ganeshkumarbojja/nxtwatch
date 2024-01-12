import {formatDistanceToNow} from 'date-fns'

import {
  TrendingAndSavedVideo,
  ThumbnailImage,
  TrendingAndSavedVideoContent,
  TrendingAndSavedVideoTitle,
  ChannelName,
  StyledLink,
  ViewsAndPublished,
  Views,
  PublishedContainer,
  Published,
  ChannelViewsPublish,
} from './styledComponents'

import NxtContext from '../../context/nxtContext'

const TrendingAndSavedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    title,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name} = channel
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingAndSavedVideo>
            <StyledLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt={title} />
              <TrendingAndSavedVideoContent>
                <TrendingAndSavedVideoTitle dark={isDark}>
                  {title}
                </TrendingAndSavedVideoTitle>
                <ChannelViewsPublish>
                  <ChannelName dark={isDark}>{name}</ChannelName>
                  <ViewsAndPublished>
                    <Views dark={isDark}>{viewCount} views</Views>
                    <PublishedContainer>
                      <Published dark={isDark}>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </Published>
                    </PublishedContainer>
                  </ViewsAndPublished>
                </ChannelViewsPublish>
              </TrendingAndSavedVideoContent>
            </StyledLink>
          </TrendingAndSavedVideo>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default TrendingAndSavedVideoItem
