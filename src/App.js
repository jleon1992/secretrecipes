import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import styled from 'styled-components'
import PrivateRoute from './components/PrivateRoute'
import Recipes from './components/Recipes'


import RecipeForm from './components/RecipeForm'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'


const ApplicationBox = styled.div`

  margin: 20px;
  text-align: center;
  width: 70%;
  background-color: #EBCD20;
  border: 5px solid #F26D00;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
`

const PageHeader = styled.div`
  height: auto;
  background-color: #BFD7D2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AppTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Cantata One', serif;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
`

const LinkButton = styled.button`
  border: 0px solid white;
  margin: 10px;
  border-radius: 5px;
  background-color: #F26D00;
  width: 100px;
  height: 40px; 
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
`


// Initial Form Values -----------------------------//






// THE APP ----------------------------------------------- //


function App() {
  

    
  return (
    
      <Router>
      <ApplicationBox>
          <PageHeader>
            <AppTitle>Traditionize</AppTitle>
            <div>
            <Link to={'#'}><LinkButton>About</LinkButton></Link>
            <Link to={'/register'}><LinkButton>Register</LinkButton></Link>
            <Link to={'/login'}><LinkButton>Login</LinkButton></Link>
            </div>
          </PageHeader>

          <Route exact path='/register'>
            <Register />
          </Route>
          

          <Route path='/login'>
            <Login />
          </Route>

         <PrivateRoute path='/protected' component={Recipes} />
         <PrivateRoute path='/newrecipe' component={RecipeForm} />
         {/* <PrivateRoute path='/protected/newrecipe' component={RecipeForm} /> */}
  

            {/* <PrivateRoute path='/protected' component={Recipes}></PrivateRoute> */}


      </ApplicationBox>
      </Router>
  );
}

export default App;
