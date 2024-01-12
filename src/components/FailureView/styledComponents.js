import styled from 'styled-components'

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
export const FailureContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const FailureImage = styled.img`
  width: 30%;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`
export const FailureHead = styled.p`
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
export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 10px;
  font-weight: 400;
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  max-width: 450px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
