import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const TrendingVideosBody = styled.div`
  width: 80%;
  background-color: ${props => (props.dark ? '#0f0f0f ' : '#f9f9f9')};
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const TrendingVideosList = styled.ul`
  width: 90%;
  padding: 0px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
