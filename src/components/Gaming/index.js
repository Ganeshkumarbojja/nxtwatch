import {Component} from 'react'
import {IoGameController} from 'react-icons/io5'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import TGSHeader from '../TGSHeader'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingContainer,
  LoaderContainer,
  GamingBody,
  GamingVideosList,
} from './styledComponents'

import NxtContext from '../../context/nxtContext'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const gamingVideos = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
      }))
      this.setState({gamingVideos, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderFailureView = () => <FailureView />

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <>
        <TGSHeader
          heading="Gaming"
          icon={<IoGameController size="30" color="#ff0000" />}
        />
        <GamingVideosList>
          {gamingVideos.map(item => (
            <GamingVideoItem key={item.id} gamingVideoDetails={item} />
          ))}
        </GamingVideosList>
      </>
    )
  }

  renderViewBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderGamingVideos()
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
        <GamingContainer>
          <SideBar activeSideNavId={3} />
          <NxtContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <GamingBody dark={isDark} data-testid="gaming">
                  {this.renderViewBasedOnApiStatus()}
                </GamingBody>
              )
            }}
          </NxtContext.Consumer>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
