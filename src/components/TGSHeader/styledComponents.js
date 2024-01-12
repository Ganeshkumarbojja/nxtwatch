import styled from 'styled-components'

export const Headers = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => (props.dark ? '#212121' : '#f1f1f1')};
  padding-left: 40px;
  align-items: center;
  height: 120px;
  margin-bottom: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (max-width: 767px) {
    height: 90px;
  }
`
export const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#181818' : '#e2e8f0')};
  margin-right: 15px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  @media screen and (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`
export const HeaderHead = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
