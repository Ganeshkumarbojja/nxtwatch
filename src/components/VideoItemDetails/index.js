import VideoPlayer from 'react-player'
import {Component} from 'react'
import Cookie from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiOutlineSortDescending} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsBody,
  VideoTitle,
  ViewsDateLikeDislikeSave,
  ViewsDate,
  Views,
  VideoDetailsPublishedContainer,
  VideoDetailsPublishedAt,
  LikeDislikeSave,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
  LikeText,
  DislikeText,
  SaveText,
  HorizontalLine,
  VideoItemDetailsProfileDetails,
  VideoItemProfileImage,
  ProfileContent,
  ChannelName,
  SubscribersCount,
  VideoDescription,
  LoaderContainer,
  VideoPlayerContainer,
  VideoDetailsContent,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import NxtContext from '../../context/nxtContext'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      const videoDetailsFormatted = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: videoDetailsFormatted,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onLike = () => {
    const {isLiked, isDisliked} = this.state
    let dislike
    if (isLiked === false) {
      if (isDisliked === true) {
        dislike = false
      }
    }
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: dislike,
    }))
  }

  onDislike = () => {
    const {isLiked, isDisliked} = this.state
    let like
    if (isDisliked === false) {
      if (isLiked === true) {
        like = false
      }
    }
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: like,
    }))
  }

  renderVideoDetails = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {id, videoUrl, title, viewCount, publishedAt, channel, description} =
      videoDetails || {}
    const {name, profileImageUrl, subscriberCount} = channel || {}
    let savedOrNot
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark, addSavedVideo, savedVideos, removeSavedVideo} = value
          const videoIndex = savedVideos.findIndex(item => item.id === id)
          if (videoIndex !== -1) {
            savedOrNot = true
          } else {
            savedOrNot = isSaved
          }
          const onSave = () => {
            if (videoIndex === -1) {
              addSavedVideo(videoDetails)
            } else {
              removeSavedVideo(id)
            }
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
          }
          return (
            <>
              <VideoPlayerContainer>
                <VideoPlayer url={videoUrl} width="100%" height="100%" />
              </VideoPlayerContainer>
              <VideoDetailsContent>
                <VideoTitle dark={isDark}>{title}</VideoTitle>
                <ViewsDateLikeDislikeSave>
                  <ViewsDate>
                    <Views>{viewCount} views</Views>
                    <VideoDetailsPublishedContainer>
                      <VideoDetailsPublishedAt>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </VideoDetailsPublishedAt>
                    </VideoDetailsPublishedContainer>
                  </ViewsDate>
                  <LikeDislikeSave>
                    <LikeBtn
                      type="button"
                      liked={isLiked}
                      onClick={this.onLike}
                    >
                      <BiLike size="20" />
                      <LikeText>Like</LikeText>
                    </LikeBtn>
                    <DislikeBtn
                      type="button"
                      disliked={isDisliked}
                      onClick={this.onDislike}
                    >
                      <BiDislike size="20" />
                      <DislikeText>Dislike</DislikeText>
                    </DislikeBtn>
                    <SaveBtn type="button" saved={savedOrNot} onClick={onSave}>
                      <HiOutlineSortDescending size="20" />
                      <SaveText>{savedOrNot ? 'Saved' : 'Save'}</SaveText>
                    </SaveBtn>
                  </LikeDislikeSave>
                </ViewsDateLikeDislikeSave>
                <HorizontalLine />
                <VideoItemDetailsProfileDetails>
                  <VideoItemProfileImage src={profileImageUrl} alt={name} />
                  <ProfileContent>
                    <ChannelName dark={isDark}>{name}</ChannelName>
                    <SubscribersCount dark={isDark}>
                      {subscriberCount} subscribers
                    </SubscribersCount>
                    <VideoDescription dark={isDark}>
                      {description}
                    </VideoDescription>
                  </ProfileContent>
                </VideoItemDetailsProfileDetails>
              </VideoDetailsContent>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView />

  renderViewBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderVideoDetails()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemDetailsContainer>
          <SideBar />
          <NxtContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <VideoItemDetailsBody
                  dark={isDark}
                  data-testid="videoItemDetails"
                >
                  {this.renderViewBasedOnApiStatus()}
                </VideoItemDetailsBody>
              )
            }}
          </NxtContext.Consumer>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
