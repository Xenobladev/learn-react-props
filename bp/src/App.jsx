import Navbar from './tasks/Navbar.jsx'
import ProductCard from './tasks/ProductCard.jsx'
import WeatherCard from './tasks/WeatherCard.jsx'
import OrderTracker from './tasks/OrderTracker.jsx'


function App() {
  return (
    <main>
      <h1>Conditional Rendering Workbook</h1>
      <h2>Task 1: Navbar</h2>
      {/* render Task 1 test cases here */}
      <Navbar user = {null} notifications = {12}/>
      <Navbar user = {{ name: 'Maria', role: 'Member' }} notifications = {0} />
      <Navbar user = {{ name: 'Jamal', role: 'Member' }} notifications = {3} />
      <Navbar user = {{ name: 'Priya', role: 'Admin' }} notifications = {12}/>

      <h2>Task 2: Product card</h2>
      {/* … and so on */}
      <ProductCard name = 'Hoodie' price = {45.00} salePrice = {null} stock = {20}/>
      <ProductCard name = 'Headphones' price = {60.00} salePrice = {30.00} stock = {3}/>
      <ProductCard name = 'Phone case' price = {15.00} salePrice = {null} stock = {0}/>
      <ProductCard name = 'Sneakers' price = {120} salePrice = {89.99} stock = {5}/>
      <h2>Task 3: Weather card</h2>
      {}
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <h2>Task 4: Order Tracker</h2>
      {}
      <OrderTracker />
      <OrderTracker />
      <OrderTracker />
      <OrderTracker />
    </main>
  )
}
 
export default App
