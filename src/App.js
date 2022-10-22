import React from 'react';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './DataProvider';
import Details from './components/details/Details';
import Cart from './components/cart/Cart';
import Payment from './components/payment/payment';
import Favorite from './components/favorite/favorite';
import Factor from './components/factor/Factor';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <section>
            <Routes>
              <Route path="products/:id" element={<Details />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/favorite" element={<Favorite/>} />
              <Route path="/Factor" element={<Factor />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
