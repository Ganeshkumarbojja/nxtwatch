import {HiOutlineSortDescending} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import TGSHeader from '../TGSHeader'
import TrendingAndSavedVideoItem from '../TrendingAndSavedVideoItem'

import NxtContext from '../../context/nxtContext'

import {
  SavedVideosContainer,
  SavedVideosBody,
  NoVideosContainer,
  NoVideosHead,
  NoVideosPara,
  NoVideosImage,
  SavedVideosList,
} from './styledComponents'

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {savedVideos, isDark} = value
      const renderNoVideosView = () => (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHead dark={isDark}>No saved videos found</NoVideosHead>
          <NoVideosPara dark={isDark}>
            You can save your videos while watching them
          </NoVideosPara>
        </NoVideosContainer>
      )

      const renderSavedVideos = () => (
        <>
          <TGSHeader
            heading="Saved videos"
            icon={<HiOutlineSortDescending size="30" color="#ff0000" />}
          />
          <SavedVideosList>
            {savedVideos.map(item => (
              <TrendingAndSavedVideoItem key={item.id} videoDetails={item} />
            ))}
          </SavedVideosList>
        </>
      )
      return (
        <>
          <Header />
          <SavedVideosContainer>
            <SideBar activeSideNavId={4} />
            <SavedVideosBody dark={isDark} data-testid="savedVideos">
              {savedVideos.length === 0
                ? renderNoVideosView()
                : renderSavedVideos()}
            </SavedVideosBody>
          </SavedVideosContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default SavedVideos
