import {Component} from 'react'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import NxtContext from '../../context/nxtContext'

import {
  HomeContainer,
  HomeBody,
  HomeSearchContainer,
  HomeSearchInput,
  SearchBtn,
  HomeVideosList,
  BannerContainer,
  BannerContent,
  BannerWebLogo,
  BannerText,
  GetItNowBtn,
  BannerCloseBtn,
  HomeLoader,
  NoSearchResultsContainer,
  NoResultsImage,
  NoResultsHead,
  NoResultsPara,
  RetryBtn,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noVideos: 'NO_VIDEOS',
}

class HomeRoute extends Component {
  state = {
    videos: [],
    apiStatus: apiConstants.initial,
    searchInput: '',
    searchValue: '',
    isBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {searchValue} = this.state
    const jwtToken = Cookie.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videos = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({apiStatus: apiConstants.success, videos})
      if (videos.length === 0) {
        this.setState({apiStatus: apiConstants.noVideos})
      }
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onSearchChange = e => {
    this.setState({searchInput: e.target.value})
  }

  onSearchBtn = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getVideos)
  }

  onRetry = () => {
    this.setState({searchInput: '', searchValue: ''}, this.getVideos)
  }

  renderNoSearchResultsView = () => (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSearchResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <NoResultsHead dark={isDark}>No Search results found</NoResultsHead>
            <NoResultsPara dark={isDark}>
              Try different key words or remove search filter
            </NoResultsPara>
            <RetryBtn type="button" onClick={this.onRetry}>
              Retry
            </RetryBtn>
          </NoSearchResultsContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderVideos = () => {
    const {videos} = this.state
    return (
      <HomeVideosList>
        {videos.map(video => (
          <VideoItem key={video.id} videoDetails={video} />
        ))}
      </HomeVideosList>
    )
  }

  onCloseBanner = () => {
    this.setState({isBanner: false})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerContent>
        <BannerWebLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
      </BannerContent>
      <BannerCloseBtn
        type="button"
        onClick={this.onCloseBanner}
        data-testid="close"
      >
        <IoMdClose size="20" />
      </BannerCloseBtn>
    </BannerContainer>
  )

  renderSearchContainer = () => {
    const {searchInput} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeSearchContainer dark={isDark}>
              <HomeSearchInput
                placeholder="Search"
                type="search"
                onChange={this.onSearchChange}
                value={searchInput}
                dark={isDark}
              />
              <SearchBtn
                type="button"
                onClick={this.onSearchBtn}
                dark={isDark}
                data-testid="searchButton"
              >
                <IoIosSearch size="18" color="#7e858e" />
              </SearchBtn>
            </HomeSearchContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderLoader = () => (
    <HomeLoader data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </HomeLoader>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderViewBasedApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideos()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.noVideos:
        return this.renderNoSearchResultsView()
      default:
        return null
    }
  }

  render() {
    const {isBanner} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer data-testid="home">
                <SideBar activeSideNavId={1} />
                <HomeBody dark={isDark}>
                  {isBanner ? this.renderBanner() : null}
                  {this.renderSearchContainer()}
                  {this.renderViewBasedApiStatus()}
                </HomeBody>
              </HomeContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default HomeRoute
