import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.SECONDARY_COLOR};

  justify-content: center;

  height: 90%;
  width: 85%;

  padding: 10px;

  margin: 22px;

  border-radius: 10px;
`

export const UserImg = styled.Image`
  width: 120px;
  height: 120px;

  border-radius: 100px;
`

export const Text = styled(TextComponent)`
  color: #fff;

  /* font-size: 22px; */
  font-weight: bold;
`
