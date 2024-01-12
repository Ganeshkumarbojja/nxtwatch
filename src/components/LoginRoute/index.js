import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtContext from '../../context/nxtContext'

import {
  LoginContainer,
  LoginCard,
  LoginWebsiteLogo,
  LoginForm,
  LoginBtn,
  LoginInputContainer,
  LoginInputLabel,
  LoginInput,
  ShowPasswordContainer,
  ShowPasswordCheckbox,
  ShowPasswordLabel,
  LoginErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    isError: false,
    errorMsg: '',
  }

  changeUsername = e => {
    this.setState({username: e.target.value})
  }

  changePassword = e => {
    this.setState({password: e.target.value})
  }

  onShowPassword = e => {
    this.setState({isChecked: e.target.checked})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
    this.setState({
      username: '',
      password: '',
      isChecked: false,
      isError: false,
      errorMsg: '',
    })
    Cookie.set('jwt_token', jwtToken, {expires: 30})
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, isError: true})
  }

  onLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginInputContainer>
              <LoginInputLabel dark={isDark} htmlFor="username">
                USERNAME
              </LoginInputLabel>
              <LoginInput
                dark={isDark}
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={this.changeUsername}
              />
            </LoginInputContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, isChecked} = this.state
    const passwordType = isChecked ? 'text' : 'password'
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginInputContainer>
              <LoginInputLabel dark={isDark} htmlFor="password">
                PASSWORD
              </LoginInputLabel>
              <LoginInput
                dark={isDark}
                type={passwordType}
                placeholder="Password"
                id="password"
                value={password}
                onChange={this.changePassword}
              />
            </LoginInputContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderShowPasswordField = () => {
    const {isChecked} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <ShowPasswordContainer>
              <ShowPasswordCheckbox
                type="checkbox"
                id="showPassword"
                checked={isChecked}
                onChange={this.onShowPassword}
              />
              <ShowPasswordLabel
                dark={isDark}
                htmlFor="showPassword"
                className="checkbox-label"
              >
                Show Password
              </ShowPasswordLabel>
            </ShowPasswordContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {isError, errorMsg} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          const loginWebLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer dark={isDark}>
              <LoginCard dark={isDark}>
                <LoginWebsiteLogo src={loginWebLogo} alt="website logo" />
                <LoginForm onSubmit={this.onLogin}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField()}
                  {this.renderShowPasswordField()}
                  <LoginBtn type="submit">Login</LoginBtn>
                  {isError && (
                    <LoginErrorMsg dark={isDark}>{errorMsg}</LoginErrorMsg>
                  )}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LoginRoute
