import React from 'react'
import { useSelector } from 'react-redux'

import { StatusBar } from 'react-native'

import styled, { ThemeProvider } from 'styled-components'

import Header from '../../shared/components/Header'
import SearchBar from '../../shared/components/SearchBar'
import User from '../../shared/components/User'

export default function Home() {
  const theme = useSelector(state => state.themeReducer.theme)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar />
        <Header />
        <SearchBar />
        <User />
      </Container>
    </ThemeProvider>
  )
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR}; ;
`
