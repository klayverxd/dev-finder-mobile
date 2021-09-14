import styled from 'styled-components/native'

export const Container = styled.View.attrs({
  elevation: 20,
})`
  background-color: ${({ theme }) => theme.SECONDARY_COLOR};

  border-radius: 10px;

  flex-direction: row;

  margin: 20px 20px 0;

  padding: 12px 18px;
`

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.GRAY_TEXT_COLOR,
}))`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};

  font-size: 16px;

  flex: 1;

  padding: 5px 12px;
`

export const ContainerButton = styled.TouchableOpacity`
  padding: 10px;

  justify-content: center;
`
