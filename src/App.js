import './App.css';
import OrderForm from './Components/orderForm';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className='BasePage'>
      <Navbar />
      <OrderForm />
    </div>
  );
}

export default App;
