// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 16px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;

  @media (max-width: 767px) {
    font-size: 34px;
    font-weight: bold;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  color: #334155;
  margin-top: 0px;
  margin-bottom: 34px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const Image = styled.img`
  height: 320px;

  @media (max-width: 767px) {
    height: 200px;
    width: 100%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 530px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.5;
  color: #334155;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #1f81ff;
  color: #ffffff;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 767px) {
    align-self: start;
  }
`
