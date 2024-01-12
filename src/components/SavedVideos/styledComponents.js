import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const SavedVideosBody = styled.div`
  height: 100%;
  overflow: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f ' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100%;
`
export const NoVideosHead = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 40px;
  color: ${props => (props.dark ? '#f9f9f9' : '#212121')};
`
export const NoVideosPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  text-align: center;
`
export const NoVideosImage = styled.img`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const SavedVideosList = styled.ul`
  width: 90%;
  padding: 0px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
