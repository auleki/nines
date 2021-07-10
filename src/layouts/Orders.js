import {
  SplitPage,
  DashNav,
  BasicPage,
  DashPage,
  PageTitle,
  DashContainer,
  OrderCards,
  OrderContainer,
  Button
} from '../components/styledComponents'
import UserNavbar from '../components/UserNavbar'
import { orders } from '../components/constants'

const Orders = () => {
  return (
    <SplitPage>
      <UserNavbar />
      <DashPage>
        <DashContainer>
          <PageTitle>Orders</PageTitle>
          <OrderContainer>
            {orders.map(order => (
              <OrderCards>
                <div className='customerInfo'>
                  <p>
                    {order.buyer.firstName} {order.buyer.lastName}
                  </p>
                  <p>{order.buyer.state}</p>
                </div>
                <div className='orderInfo'>
                  <p>Order Number</p>
                  <p>{order.orderNumber}</p>
                </div>
                <div className='orderDetails'>
                  <p>N{order.totalPrice}</p>
                  <p>{order.products.length} items</p>
                </div>
                <div className='itemsOrdered'>
                  {/* <p>{order}</p> */}
                  {/* <p>{}</p> */}
                  {/* <ul className='orders'> */}
                  {/* ORDER PRODUCTS NEED TO HAVE AN ID */}
                  {/* REPLACE WITH A LIST WHEN UI ISSUE RESOLVED */}
                  {/* </ul> */}
                </div>
                <div className='orderStatus'>
                  {/* <p>Order Status</p> */}
                  <p>Thur 14 June 2021</p>
                  <p>{order.orderStatus}</p>
                </div>
                <div className='orderActions'>
                  <Button>Cancel Order</Button>
                </div>
              </OrderCards>
            ))}
          </OrderContainer>
        </DashContainer>
      </DashPage>
    </SplitPage>
  )
}

export default Orders
