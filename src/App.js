import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">    
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>

    </div>
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route path='/checkout' element={<div><Header /> <Checkout /></div>}></Route>
    //       <Route path='/' element={<div> <Header /><Home /></div>}></Route>
    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
