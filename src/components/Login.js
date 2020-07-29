import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


// Styled-Components ------------------------------------//

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'Cantata One', serif;
  color: #111111;
`


const TextInput = styled.input`
  height: 20px;
  width: 150px;
  border-radius: 5px;
  background-color: #BFD7D2;
`

const SubmitButton = styled.button`
  border: 3px solid #390701;
  margin: 10px;
  border-radius: 5px;
  background-color: #F26D00;
  width: 200px;
  height: 40px; 
  color: #390701;
  font-family: 'Cantata One', serif;
  font-size: 1.5rem;


  &:hover {
  background-color: #390701;
  color: white; 
}

`
//--------------------------------------------------------------

const initialLoginValues = {

    username: '',
    password: ''
  
  }

//-------------------------------------------------------------

function Login () {

  const {push} = useHistory()


    const [login, setLogin] = useState(initialLoginValues)


    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = e => {

        e.preventDefault();
        
        axios.post('https://lambdaschool-cookbook2.herokuapp.com/auth/login', login)
            .then(
                res => {
                  console.log(res)
                    localStorage.setItem('token', res.data.token);
                    push('/protected')
                })
            
            .catch( (err) => console.log({err})
            );

    };


   

    return (
            <div>
            
            <PageTitle>Login</PageTitle>

            <form onSubmit={handleSubmit}>
            <p><TextInput
                name='username'
                id='username'
                placeholder='Email Address Here'
                type='text'
                value={login.username}
                onChange={handleChange}
              /></p>

            <p><TextInput
                name='password'
                id='password'
                placeholder='Password Here'
                type='password'
                value={login.password}
                onChange={handleChange}
            /></p>

            <SubmitButton type='submit'>Login!</SubmitButton>
            </form>
            </div>
            )
}

export default Login;