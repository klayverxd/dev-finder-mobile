import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR};

  flex-direction: row;

  margin: 20px 20px;

  text-align: center;

  justify-content: space-between;
`

export const Text = styled(TextComponent)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};

  font-size: 22px;
  font-weight: bold;
`

export const Logo = styled.Image`
  width: 150px;
  height: 24px;
`
