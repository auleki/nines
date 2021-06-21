import * as AiIcon from 'react-icons/ai'

export const fonts = {
  concertOne: 'Concert One',
  juliusSansOne: 'Julius Sans One',
  sigmarOne: 'Sigmar One',
  spaceMono: 'Space Mono',
  specialElite: 'Special Elite',
  charmonman: 'Charmonman',
  hindSiliguri: 'Hind Siliguri'
}

export const colors = {
  white: '#fff',
  brown: '#D7B377',
  darkBrown: '#C9A567',
  altWhite: '#F5F0F6',
  lightGreen: '#D4E79E',
  midGreen: '#B8C480',
  darkGreen: '#394032',
  sparkGreen: '#61E786',
  black: '#0b090a',
  lightBlack: '#161a1d',
  purple: '#4b3f72',
  lightPurple: '#9d4edd',
  darkPurple: '#372549',
  basicGreen: '#2dc653',
  darkRed: '#b90504',
  red: '#d7263d',
  yellow: '#fad643'
}

export const numerics = {
  border: 0.3,
  bigFont: 2.4,
  mediumFont: 1.6,
  smallFont: 1.1
}

export const icons = {
  search: AiIcon.AiOutlineSearch,
  user: AiIcon.AiOutlineUser,
  cart: AiIcon.AiOutlineShopping
}

export const customerOrders = [
  {
    products: [
      {
        name: "Fela's Tears",
        price: 4000,
        inStock: true,
        measurement: 'g',
        quantity: 4,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Buhari Must Go',
        price: 5000,
        inStock: true,
        measurement: 'g',
        quantity: 2,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Mary Fowler',
        price: 2000,
        inStock: true,
        measurement: 'g',
        quantity: 5,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
      }
    ]
  }
]

export const orders = [
  {
    products: [
      {
        name: "Fela's Tears",
        price: 4000,
        inStock: true,
        measurement: 'g',
        quantity: 4,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Buhari Must Go',
        price: 5000,
        inStock: true,
        measurement: 'g',
        quantity: 2,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Mary Fowler',
        price: 2000,
        inStock: true,
        measurement: 'g',
        quantity: 5,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
      }
    ],
    timeOfOrder: Date.now(),
    totalPrice: 40000,
    orderNumber: 'X101VH9KL0092',
    buyer: {
      firstName: 'Michael',
      lastName: 'Davis',
      username: 'mdavis',
      state: 'lagos'
    }
  },
  {
    products: [
      {
        name: "Fela's Tears",
        price: 4000,
        inStock: true,
        measurement: 'g',
        quantity: 4,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Buhari Must Go',
        price: 5000,
        inStock: true,
        measurement: 'g',
        quantity: 2,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Mary Fowler',
        price: 2000,
        inStock: true,
        measurement: 'g',
        quantity: 5,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
      }
    ],
    timeOfOrder: Date.now(),
    totalPrice: 40000,
    orderNumber: 'X101VH9KL0092',
    buyer: {
      firstName: 'Michael',
      lastName: 'Davis',
      username: 'mdavis',
      state: 'lagos'
    }
  },
  {
    products: [
      {
        name: "Fela's Tears",
        price: 4000,
        inStock: true,
        measurement: 'g',
        quantity: 4,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Buhari Must Go',
        price: 5000,
        inStock: true,
        measurement: 'g',
        quantity: 2,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Mary Fowler',
        price: 2000,
        inStock: true,
        measurement: 'g',
        quantity: 5,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
      }
    ],
    timeOfOrder: Date.now(),
    totalPrice: 40000,
    orderNumber: 'X101VH9KL0092',
    buyer: {
      firstName: 'Michael',
      lastName: 'Davis',
      username: 'mdavis',
      state: 'lagos'
    }
  },
  {
    products: [
      {
        name: "Fela's Tears",
        price: 4000,
        inStock: true,
        measurement: 'g',
        quantity: 4,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Buhari Must Go',
        price: 5000,
        inStock: true,
        measurement: 'g',
        quantity: 2,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524778/Trapping/jeff-w-5pph2vBrJTM-unsplash-removebg-preview_oyxftl.png'
      },
      {
        name: 'Mary Fowler',
        price: 2000,
        inStock: true,
        measurement: 'g',
        quantity: 5,
        type: 'Sativa',
        image:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623524846/Trapping/christina-winter-d_3Yc55MAr8-unsplash-removebg-preview_yfz177.png'
      }
    ],
    timeOfOrder: Date.now(),
    totalPrice: 40000,
    orderNumber: 'X101VH9KL0092',
    buyer: {
      firstName: 'Michael',
      lastName: 'Davis',
      username: 'mdavis',
      state: 'lagos'
    }
  }
]

export const products = [
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
