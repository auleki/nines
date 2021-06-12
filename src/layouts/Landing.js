import {
  BasicPage,
  HeaderStyle,
  LandingContainer,
  Title,
  Paragraph,
  Button,
  SpanText
} from '../components/styledComponents'
import WPLanding from '../assets/landing-bg.jpg'
import { fonts, colors } from '../components/constants'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <BasicPage>
      <LandingContainer full bgImage={WPLanding}>
        <HeaderStyle>
          <Title font={fonts.spaceMono} size={4}>
            Get all the <SpanText color={colors.sparkGreen}>high</SpanText> you
            need
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
