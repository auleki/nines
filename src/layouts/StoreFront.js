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
import { colors, fonts } from '../components/constants'

const StoreFront = () => {
  const products = [
    {
      name: "Fela's Tears",
      price: 4000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },

    {
      name: 'Mary Fowler',
      price: 2000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
    },
    {
      name: 'Buhari Must Go',
      price: 5000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: 'Mary Fowler',
      price: 2000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
    },
    {
      name: "Fela's Tears",
      price: 4000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: "Fela's Tears",
      price: 4000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: "Fela's Tears",
      price: 4000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: "Fela's Tears",
      price: 4000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: 'Mary Fowler',
      price: 2000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
    },
    {
      name: 'Buhari Must Go',
      price: 5000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: 'Buhari Must Go',
      price: 5000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
    },
    {
      name: 'Mary Fowler',
      price: 2000,
      inStock: true,
      measurement: 'g',
      type: 'Sativa',
      image:
        'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
    }
  ]

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
