import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import ProverbsComponent from './commponent/productscommponets'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import About from "../src/commponent/About"
import CartReducer from './commponent/cartreducer';
import Payment from './commponent/payment';
import Nav from './commponent/Nav';
function App() {
  return (
   
        <Provider store={store}>
          <BrowserRouter>
            <Nav></Nav>
            <Routes>
              <Route exact path="/" element={<ProverbsComponent></ProverbsComponent>} />
              <Route exact path="/about" element={<About></About>} />
              <Route exact path="/cart" element={<CartReducer></CartReducer>} />
              <Route exact path="/payment" element={<Payment></Payment>} />
            </Routes>
          </BrowserRouter>
        </Provider>
  );
  };

export default App;
