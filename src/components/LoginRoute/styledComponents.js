import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? ' #212121' : '#ffffff')};
`
export const LoginCard = styled.div`
  background-color: ${props => (props.dark ? ' #000000' : '#ffffff')};
  border-radius: 10px;
  width: 40%;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => (props.dark ? 'none' : '0px 4px 16px 0px #bfbfbfbf')};
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const LoginWebsiteLogo = styled.img`
  width: 40%;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`
export const LoginForm = styled.form`
  width: 80%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  width: 100%;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 5px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  height: 42px;
  border-radius: 10px;
`
export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LoginInputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-size: 500;
  margin-bottom: 5px;
  color: ${props => (props.dark ? '#f1f5f9' : '#64748b')};
  font-weight: 500;
`
export const LoginInput = styled.input`
  width: 100%;
  border-radius: 2px;
  outline: none;
  padding: 5px 20px;
  height: 40px;
  font-size: 15px;
  color: ${props => (props.dark ? '#f1f5f9' : ' #475569')};
  font-weight: 500;
  border: solid 1px;
  border-color: ${props => (props.dark ? ' #475569' : '#94a3b8')};
  background-color: ${props => (props.dark ? 'transparent' : '#ffffff')};
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`

export const ShowPasswordCheckbox = styled.input`
  margin-right: 5px;
  height: 18px;
  width: 18px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.dark ? '#f1f5f9' : '#231f20')};
`
export const LoginErrorMsg = styled.p`
  color:${props => (props.dark ? '#ff0000' : '#ff0b37')};
  font-family:"Roboto",
  font-size:10px;
  margin-top:3px;
`
