import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'


export const Wrapper = styled.article`
  ${({theme}) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div``

export const Content = styled.div``

export const Info = styled.div``

export const Title = styled.h3``

export const Developer = styled.h4``

export const FavButton = styled.div``

export const BuyBox = styled.div``

export const Price = styled.div``

