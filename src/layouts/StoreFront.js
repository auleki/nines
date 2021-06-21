import {
  BasicPage,
  PageContainer,
  Title,
  StoreContainer,
  PageTitle,
  ProductCardStyle,
  ProductContainer,
  Button
} from '../components/styledComponents'
import { colors, fonts, products } from '../components/constants'

const StoreFront = () => {
  const herbIcon =
    'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623536115/Trapping/marijuana_zvbpct.png'

  return (
    // <BasicPage bg={colors.lightBlack}>
    <StoreContainer>
      <PageTitle>Storefront</PageTitle>
      <ProductContainer>
        {products.map((product, i) => (
          <ProductCardStyle key={i}>
            <div className='image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='info'>
              <img src={herbIcon} alt='name-icon' />
              <h4 className='name'>{product.name}</h4>
              <p className='price'>
                <span>₦</span> {product.price}/{product.measurement}
              </p>
            </div>
            <div className='actions'>
              <Button>Add to cart</Button>
              <Button>Buy Now</Button>
            </div>
          </ProductCardStyle>
        ))}
        {/* <h2>Freedom</h2> */}
      </ProductContainer>
    </StoreContainer>
    // </BasicPage>
  )
}

export default StoreFront
