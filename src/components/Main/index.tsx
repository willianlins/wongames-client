import * as S from './styles'

export function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, Nextjs e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um atomo e ReactJS escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolverdor de frete para uma tela com código"
      />
    </S.Wrapper>
  )
}
