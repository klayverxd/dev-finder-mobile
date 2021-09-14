import React from 'react'
import { useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'
import { View } from 'react-native'

export default function CardUser() {
  const user = useSelector(state => state.userReducer.user)
  const theme = useSelector(state => state.themeReducer.theme)

  const created_at = new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <S.Container>
      <S.UserImg
        source={{
          uri: `${user.avatar_url}`,
        }}
      />
      <S.BoldText>{user.name}</S.BoldText>
      <S.Text>Joined {created_at}</S.Text>
      <S.Text>{user.bio}</S.Text>

      <S.Section>
        <View>
          <S.Text>Repos</S.Text>
          <S.BoldText>{user.public_repos}</S.BoldText>
        </View>
        <View>
          <S.Text>Followers</S.Text>
          <S.BoldText>{user.followers}</S.BoldText>
        </View>
        <View>
          <S.Text>Following</S.Text>
          <S.BoldText>{user.following}</S.BoldText>
        </View>
      </S.Section>
      <S.FooterSection>
        <S.FirstSection>
          <S.Row>
            <Icon
              name="map-marker"
              size={20}
              color={
                user.location
                  ? theme.PRIMARY_SOCIAL_ICON_COLOR
                  : theme.SECONDARY_SOCIAL_ICON_COLOR
              }
            />
            <S.Text>
              {user.location ? `   ${user.location}` : '   No location'}
            </S.Text>
          </S.Row>
          <S.Row>
            <Icon
              name="link"
              size={20}
              color={
                user.blog
                  ? theme.PRIMARY_SOCIAL_ICON_COLOR
                  : theme.SECONDARY_SOCIAL_ICON_COLOR
              }
            />
            <S.Text>{user.blog ? `   ${user.blog}` : '   No blog'}</S.Text>
          </S.Row>
        </S.FirstSection>
        <S.SecondSection>
          <S.Row>
            <Icon
              name="twitter"
              size={20}
              color={
                user.twitter_username
                  ? theme.PRIMARY_SOCIAL_ICON_COLOR
                  : theme.SECONDARY_SOCIAL_ICON_COLOR
              }
            />
            <S.Text>
              {user.twitter_username
                ? `   ${user.twitter_username}`
                : '   No twitter'}
            </S.Text>
          </S.Row>
          <S.Row>
            <Icon
              name="suitcase"
              size={20}
              color={
                user.company
                  ? theme.PRIMARY_SOCIAL_ICON_COLOR
                  : theme.SECONDARY_SOCIAL_ICON_COLOR
              }
            />
            <S.Text>
              {user.company ? `   ${user.company}` : '   No company'}
            </S.Text>
          </S.Row>
        </S.SecondSection>
      </S.FooterSection>
    </S.Container>
  )
}
