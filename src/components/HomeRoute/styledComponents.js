import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
`
export const HomeBody = styled.div`
  height: 100%;
  overflow: auto;
  width: 80%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const HomeSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 35px;
  border: solid 1.5px;
  border-color: ${props => (props.dark ? '#383838' : ' #cccccc')};
  margin-bottom: 30px;
  margin-left: 20px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    width: 70%;
  }
  @media screen and (max-width: 576px) {
    width: 90%;
    margin-right: 20px;
  }
`
export const HomeSearchInput = styled.input`
  padding: 10px;
  width: 85%;
  height: 100%;
  outline: none;
  border: none;
  background-color: ${props => (props.dark ? 'transparent' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  border-left: solid 1px;
  border-color: ${props => (props.dark ? '#383838' : '#cccccc')};
  background-color: ${props => (props.dark ? '#313131' : 'none')};
`
export const HomeVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    margin-left: 0px;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin-bottom: 30px;
  min-height: 250px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    min-height: 200px;
  }
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 767px) {
    width: 70%;
  }
`
export const BannerWebLogo = styled.img`
  width: 30%;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    width: 70%;
  }
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: #383838;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    font-weight: 400;
  }
`
export const GetItNowBtn = styled.button`
  width: 140px;
  height: 45px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
  background-color: transparent;
  border: solid 2px #1e293b;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 35px;
    font-size: 14px;
  }
`
export const BannerCloseBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`

export const HomeLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSearchResultsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const NoResultsImage = styled.img`
  width: 40%;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`
export const NoResultsHead = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const NoResultsPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 10px;
  font-weight: 400;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const RetryBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  width: 90px;
  height: 35px;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  border-radius: 3px;
`
