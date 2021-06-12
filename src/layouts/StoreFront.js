import {
  BasicPage,
  PageContainer,
  Title,
  StoreContainer,
  PageTitle
} from '../components/styledComponents'
import { colors, fonts } from '../components/constants'

const StoreFront = () => {
  return (
    <BasicPage bg={colors.lightBlack}>
      <StoreContainer>
        <PageTitle>Storefront</PageTitle>
        <main>
          <div className='productCard'></div>
        </main>
      </StoreContainer>
    </BasicPage>
  )
}

export default StoreFront
