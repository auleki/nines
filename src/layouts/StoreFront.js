import { useState } from 'react'
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

const ProductCard = ({ product }) => {
  const [favorited, setFavorited] = useState(true)

  const toggleFavorite = () => setFavorited(!favorited)

  const herbIcon =
    'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623536115/Trapping/marijuana_zvbpct.png'

  return (
    <ProductCardStyle key={product.name}>
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
        <Button>
          <i class='bx bxs-cart-add'></i>
        </Button>
        <Button onClick={toggleFavorite}>
          {favorited ? (
            <i class='bx bxs-heart'></i>
          ) : (
            <i class='bx bx-heart'></i>
          )}
        </Button>
      </div>
    </ProductCardStyle>
  )
}

const StoreFront = () => {
  return (
    // <BasicPage bg={colors.lightBlack}>
    <StoreContainer>
      <PageTitle>Storefront</PageTitle>
      <ProductContainer>
        {products.map((product, i) => (
          <ProductCard product={product} />
        ))}
        {/* <h2>Freedom</h2> */}
      </ProductContainer>
    </StoreContainer>
    // </BasicPage>
  )
}

export default StoreFront
