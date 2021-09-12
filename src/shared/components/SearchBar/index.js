import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getUser } from '../../store/action/user'

import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

export default function SearchBar() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  return (
    <S.Container>
      <S.TextInput
        onChangeText={setSearch}
        value={search}
        placeholder="Search user..."
        placeholderTextColor="#FFF"
      />
      <S.ContainerButton
        onPress={() => {
          search.trim() === '' ? dispatch(getUser()) : dispatch(getUser(search))
        }}
      >
        <Icon name="search" size={20} color="#FFF" />
      </S.ContainerButton>
    </S.Container>
  )
}
