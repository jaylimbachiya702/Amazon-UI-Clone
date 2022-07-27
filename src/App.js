import React, { useEffect } from "react";
import './App.css';
import Home from './Home'
import Header from "./Header";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe('pk_test_51LQ2tPSAwHMYFRRF0iTDGInVcFPi18CCdThCCSDwhg1JDy1e8q1s3wjxT55jX0rYck3qManFt5CPcrrtDMuCXmLf00eu9yB9lX');
 


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        dispatch({
          type: 'SET_USER',
           user: null,
        })
      }
    })
  },[]);

  return (
    <Router>
    <div className="App">
    
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/payment" element={<><Header/>
      <Elements stripe={promise}><Payment/></Elements></>} />
      <Route path="/checkout" element={<><Header/><Checkout/></>} />
      <Route path="/" element={<><Header/><Home/></>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
