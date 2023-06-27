import { Heading } from 'components/Heading'
import { Logo } from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

export function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContet>
          <Logo />
          <div>
            <Heading>All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>
          <S.Footer>Won Games 2020 © Todos os Diretiros Reservados</S.Footer>
        </S.BannerContet>
      </S.BannerBlock>
      <S.Content>
        <S.ContenWrapper>
          <Logo color="black" size="large" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContenWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
