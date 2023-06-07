import { Home, HomeTemplateProps } from 'templates/Home'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlighMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularHighlight: highlighMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligh: highlighMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligh: highlighMock
    }
  }
}
