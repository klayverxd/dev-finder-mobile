import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const ErrorText = styled(TextComponent)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};

  text-align: center;

  padding: 10px;
`
