import NxtContext from '../../context/nxtContext'

import {
  GamingVideo,
  GamingVideoImage,
  GamingVideoContent,
  GamingVideoTitle,
  GamingVideoViews,
  StyledLink,
} from './styledComponents'

const GamingVideoItem = props => {
  const {gamingVideoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideoDetails
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingVideo>
            <StyledLink to={`/videos/${id}`}>
              <GamingVideoImage src={thumbnailUrl} alt={title} />
              <GamingVideoContent>
                <GamingVideoTitle dark={isDark}>{title}</GamingVideoTitle>
                <GamingVideoViews dark={isDark}>
                  {viewCount} Watching Worldwide
                </GamingVideoViews>
              </GamingVideoContent>
            </StyledLink>
          </GamingVideo>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GamingVideoItem
