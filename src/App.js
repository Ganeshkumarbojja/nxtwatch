import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

import NxtContext from './context/nxtContext'

import './App.css'

class App extends Component {
  state = {isDark: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  addSavedVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  removeSavedVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(item => item.id !== id),
    }))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <NxtContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideos,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
