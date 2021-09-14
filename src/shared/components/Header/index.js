import React from 'react'

import { useSelector } from 'react-redux'

import AccessibilityBtns from '../AccessibilityBtns'

import LogoWhite from '../../../assets/images/devfinder-white.png'
import LogoBlack from '../../../assets/images/devfinder-black.png'

import * as S from './styles'

export default function Header() {
  const theme = useSelector(state => state.themeReducer.theme)

  return (
    <S.Container>
      <S.Logo source={theme.mode === 'default' ? LogoWhite : LogoBlack} />
      <AccessibilityBtns />
    </S.Container>
  )
}
