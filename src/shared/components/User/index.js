import React from 'react'
import { useSelector } from 'react-redux'

import { ActivityIndicator } from 'react-native'

import CardUser from '../CardUser'

import * as S from './styles'

export default function User() {
  const hasFilter = useSelector(state => state.userReducer.hasFilter)
  const hasUser = useSelector(state => state.userReducer.hasUser)
  const loading = useSelector(state => state.userReducer.loading)

  return (
    <S.Container>
      {loading && <ActivityIndicator size="large" color="#999" />}

      {!hasFilter && !hasUser && !loading && (
        <S.Content>
          <S.ErrorText>Search for a GitHub User!</S.ErrorText>
        </S.Content>
      )}

      {hasUser && !loading && <CardUser />}

      {hasFilter && !hasUser && !loading && (
        <S.Content>
          <S.ErrorText>User not found...</S.ErrorText>
        </S.Content>
      )}
    </S.Container>
  )
}
