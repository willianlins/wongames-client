import * as S from './styles'

export type Linecolor = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: Linecolor
  size?: 'small' | 'medium'
}

export function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
      size={size}
    >
      {children}
    </S.Wrapper>
  )
}
