import "./styles.css";
import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IrRNGFItZZLHtuqLTGT3NhyEY5XxVBlYPza6qUcZCzW6RlSSEITS9dAk5EOXDmgxwtg7db95IfgIJ5GWTWFk0Z400dSoubDXC"
);

export default function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // once app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USE IS >>>", authUser);
      if (authUser) {
        // the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
