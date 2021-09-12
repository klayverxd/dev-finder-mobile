import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR};

  flex-direction: row;

  margin: 20px 20px;

  justify-content: space-between;
`

export const Text = styled(TextComponent)`
  color: #fff;

  font-size: 22px;
  font-weight: bold;
`
