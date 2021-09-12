import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.SECONDARY_COLOR};

  border-radius: 10px;

  flex-direction: row;

  margin: 20px 20px 0;

  padding: 12px 18px;
`

export const TextInput = styled.TextInput`
  color: #fff;

  font-size: 16px;

  flex: 1;

  padding: 5px 12px;
`

export const ContainerButton = styled.TouchableOpacity`
  padding: 10px;

  justify-content: center;
`
