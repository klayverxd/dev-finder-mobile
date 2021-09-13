import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.SECONDARY_COLOR};

  border-radius: 10px;

  elevation: 20;

  justify-content: space-evenly;

  height: 88%;
  width: 90%;

  padding: 12px 12px;

  margin: 20px 20px;
`

export const UserImg = styled.Image`
  width: 120px;
  height: 120px;

  border-radius: 100px;
`

export const Text = styled(TextComponent)`
  color: ${({ theme }) => theme.GRAY_TEXT_COLOR};

  text-align: center;
`

export const BoldText = styled(TextComponent)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};

  text-align: center;

  font-weight: bold;
`

export const Section = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR};
  border-radius: 10px;

  flex-direction: row;

  justify-content: space-evenly;

  padding: 10px 0;

  width: 90%;
`

export const Column = styled.View``

export const FooterSection = styled.View`
  flex-direction: row;

  justify-content: space-evenly;

  align-items: center;

  width: 90%;
`

export const FirstSection = styled.View``

export const SecondSection = styled.View``

export const Row = styled.View`
  align-items: center;

  flex-direction: row;

  margin-bottom: 12px;
`
