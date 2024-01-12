import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  TrendingVideosContainer,
  TrendingVideosBody,
  TrendingVideosList,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import TrendingAndSavedVideoItem from '../TrendingAndSavedVideoItem'
import FailureView from '../FailureView'
import TGSHeader from '../TGSHeader'

import NxtContext from '../../context/nxtContext'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const trendingVideos = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }))
      this.setState({trendingVideos, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
    return (
      <>
        <TGSHeader
          heading="Trending"
          icon={<HiFire size="30" color="#ff0000" />}
        />
        <TrendingVideosList>
          {trendingVideos.map(item => (
            <TrendingAndSavedVideoItem key={item.id} videoDetails={item} />
          ))}
        </TrendingVideosList>
      </>
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
      case apiConstants.success:
        return this.renderTrendingVideos()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingVideosContainer>
          <SideBar activeSideNavId={2} />
          <NxtContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <TrendingVideosBody dark={isDark} data-testid="trending">
                  {this.renderViewBasedOnApiStatus()}
                </TrendingVideosBody>
              )
            }}
          </NxtContext.Consumer>
        </TrendingVideosContainer>
      </>
    )
  }
}

export default Trending
