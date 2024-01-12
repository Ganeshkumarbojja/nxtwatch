import {
  RetryBtn,
  FailureContainer,
  FailureImage,
  FailureHead,
  FailurePara,
} from './styledComponents'

import NxtContext from '../../context/nxtContext'

const FailureView = props => {
  const {onRetry} = props
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHead dark={isDark}>Oops! Something Went Wrong</FailureHead>
            <FailurePara dark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryBtn type="button" onClick={() => onRetry()}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default FailureView
