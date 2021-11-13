import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Allproducts from './Pages/Allproducts/Allproducts';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Order from './Pages/Booking/Orderpage/Order';
import Rivew from './Pages/Feedback/Rivew';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Helmets from './Pages/Home/Helmet/Helmets';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/allproducts">
              <Allproducts></Allproducts>
            </Route >
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path='/order/:serviceId'>
              <Order></Order>
            </Route>

            <Route path="/feedback">
              <Rivew></Rivew>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/helmets">
              <Helmets></Helmets>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>


          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
