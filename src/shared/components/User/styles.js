import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const Content = styled.View`
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

export const ErrorText = styled(TextComponent)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};

  text-align: center;

  padding: 10px;
`
