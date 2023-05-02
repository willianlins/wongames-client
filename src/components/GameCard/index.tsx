import { Button } from 'components/Button'
import { FavoriteBorder } from 'styled-icons/material'
import { AddShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'


export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

export function GameCard({title, developer, img, price}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <FavoriteBorder  aria-label="Add to Wishlist"/>
      </S.FavButton>
      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Wrapper>
  )
}
