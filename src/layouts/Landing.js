import {
  BasicPage,
  HeaderStyle,
  PageContainer,
  LandingContainer,
  Title,
  Paragraph,
  Button
} from '../components/styledComponents'
import WPLanding from '../assets/landing-bg.jpg'

const Landing = () => {
  return (
    <BasicPage>
      <LandingContainer full bgImage={WPLanding}>
        <HeaderStyle>
          <Title>Get all the high you need </Title>
          <Paragraph>We are your most efficient and reliable source</Paragraph>
          <Button>Go Shopping</Button>
        </HeaderStyle>
      </LandingContainer>
    </BasicPage>
  )
}

export default Landing
