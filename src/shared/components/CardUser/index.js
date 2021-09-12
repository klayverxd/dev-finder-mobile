import React from 'react'
import { useSelector } from 'react-redux'

import * as S from './styles'

export default function CardUser() {
  const user = useSelector(state => state.userReducer.user)

  return (
    <S.Container>
      <S.UserImg
        source={{
          uri: `${user.avatar_url}`,
        }}
      />
      <S.Text>{user.login}</S.Text>
    </S.Container>
  )
}
