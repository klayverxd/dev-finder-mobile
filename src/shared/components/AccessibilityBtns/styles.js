import styled from 'styled-components/native'

export const ContainerBtns = styled.View`
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  align-items: center;

  background-color: ${({ theme }) => theme.SECONDARY_COLOR};
  border-radius: 10px;

  elevation: 10;

  margin-left: 12px;

  padding: 8px;

  width: 40px;
`
export const LetterText = styled.Text`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  font-weight: bold;
`
