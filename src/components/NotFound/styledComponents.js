import styled from 'styled-components'

export const SideBarAndNotFound = styled.div`
  display: flex;
  height: 85vh;
`
export const NotFoundContainer = styled.div`
  height: 100%;
  overflow: auto;
  width: 80%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const NotFoundImage = styled.img`
  width: 35%;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const NotFoundHead = styled.p`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`
export const NotFoundPara = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 10px;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    max-width: 300px;
  }
`
