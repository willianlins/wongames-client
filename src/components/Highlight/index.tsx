import { Button } from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  aligment?: 'right' | 'left'
}

export function Highlight({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  aligment = 'right'
}: HighlightProps) {
  return (
    <S.Wrapper aligment={aligment} backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title}/>}
      <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>{buttonLabel}</Button>
      </S.Content>
    </S.Wrapper>
  )
}
