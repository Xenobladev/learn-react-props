const steps = ['placed', 'preparing', 'on_the_way', 'delivered']
const stepNames = ['Placed', 'Preparing', 'On the way', 'Delivered']
 
function OrderTracker({ restaurant, status, etaMinutes, driverName }) {
  const currentStep = steps.indexOf(status)   // 0 to 3, or -1 if cancelled
 
  return (
    <div className="order-tracker">
      <h3>{restaurant}</h3>
      {/* your conditional parts go here */}
    </div>
  )
}
 
export default OrderTracker