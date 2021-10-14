import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Services from './Components/Pages/services';
import Products from './Components/Pages/products';
import Login from './Components/login';
import Admin from './Components/admin';
import  CssBaseline  from '@material-ui/core/CssBaseline';
import User from './Components/user';
//import AdminEditCars from './Components/adminEditCars';
import TestFooter from './Components/testFooter';
import Cars1 from './Components/Pages/cars1';
import Services1 from '../src/Components/Pages/services1'
import { Special } from './Components/Pages/special';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import Navbar from './Components/navbar';
import reportWebVitals from './reportWebVitals';


const routes = () =>  (

  <Fragment>
    
   <Navbar />
   
  

  <Switch>
  
  <Route exact path="/"> 
    <Header />
  </Route>
  
  <Route path="/service">
     
      <div className='teste'> <Services /></div>
  </Route>
  <Route path = "/products" exact component = {Products}>
      <div className="teste2"> 
          <Products />
      </div>
  </Route>
  <Route path="/sign-up">
     <div className="teste4"> <Login />
     </div>
  </Route>

{/*<CssBaseline />*/}

 {/* <Route  exact path=""/> Adicionando User */}


 
      <Route path="/admin-mode">
          <div className="teste5"> 
              <Admin />
          </div>
      </Route>
   
      <Route path="/services/:id" component={Services1} />

       <Route path="/cars/:id" component={Cars1} > <Cars1 /> </Route > 

    {/*   <Route  path="/admineditcars/:id" component={AdminEditCars} > <AdminEditCars /> </Route > */}
     
           <Route path ="/special"> <Special /> </Route>
  </Switch>

 <TestFooter />
  </ Fragment>
)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {routes()} </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
