import styled from 'styled-components'

export const GamingContainer = styled.div`
  height: 100vh;
  display: flex;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GamingBody = styled.div`
  height: 100%;
  overflow: auto;
  width: 80%;
  background-color: ${props => (props.dark ? '#0f0f0f ' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const GamingVideosList = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  flex-wrap: wrap;
`
