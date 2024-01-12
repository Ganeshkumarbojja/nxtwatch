import React from 'react'

const NxtContext = React.createContext({
  isDark: true,
  changeTheme: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default NxtContext
