import {
  BasicPage,
  HeaderStyle,
  PageContainer,
  LandingContainer,
  Title
} from '../components/styledComponents'
import WPLanding from '../assets/landing-bg.jpg'

const Landing = () => {
  return (
    <BasicPage>
      <LandingContainer full bgImage={WPLanding}>
        <HeaderStyle>
          <Title>Landing Page</Title>
        </HeaderStyle>
      </LandingContainer>
    </BasicPage>
  )
}

export default Landing
