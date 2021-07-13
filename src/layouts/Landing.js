import {
  BasicPage,
  HeaderStyle,
  LandingContainer,
  Title,
  Paragraph,
  Button,
  SpanText
} from '../components/styledComponents'
import WPLanding from '../assets/landing.jpg'
import WPOne from '../assets/landing-1.jpg'
import { fonts, colors } from '../components/constants'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <BasicPage>
      <LandingContainer full bgImage={WPOne}>
        <HeaderStyle>
          <Title font={fonts.spaceMono} size={4}>
            <SpanText color={colors.sparkGreen}>Get all</SpanText> the high{' '}
            <SpanText color={colors.sparkGreen}>you need</SpanText>
          </Title>
          <Paragraph
            size={1.5}
            paddingY={0.5}
            font={fonts.specialElite}
            textColor={colors.altWhite}
            bgColor={colors.darkRed}
          >
            We are your most efficient and reliable supplier.
          </Paragraph>
          <div>
            <Link to='/store'>
              <Button textColor={colors.brown}>Go Shopping</Button>
            </Link>
          </div>
        </HeaderStyle>
      </LandingContainer>
    </BasicPage>
  )
}

export default Landing
