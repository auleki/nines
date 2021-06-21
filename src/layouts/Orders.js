import {
  SplitPage,
  DashNav,
  BasicPage,
  DashPage,
  PageTitle,
  DashContainer,
  OrderCards,
  OrderContainer
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
                  <h5>Order Number:{order.orderNumber}</h5>
                </div>
                <div className='customerInfo'>
                  <p>N{order.totalPrice}</p>
                  <p>Thur 14 June 2021</p>
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
