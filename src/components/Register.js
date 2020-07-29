import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


// Styled Components! ------------------------------- //


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

//----------------------------------------------------------//

const initialRegisterValues = {

    username: '',
    // email: '',
    password: ''
  
  }

//------------------------------------------------------------//

function Register (props) {
  const {push} = useHistory()


    const [signUpData, setSignUpData] = useState(initialRegisterValues)

    const handleChange = e => {

        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,

        });
    }


    const handleSubmit = e => {

        e.preventDefault();
        axios
            .post('https://lambdaschool-cookbook2.herokuapp.com/auth/register', signUpData)
            .then( (res) => {
                localStorage.setItem('token', res.data.token);
                console.log(res)
              push('/login')
                // if (res.data.newUser) {
                //     props.history.push(`/${res.data.newUser}`);
                // } else {
                //     props.history.push('/register')
                // }
            })

            .catch( (err) => console.log({err}));

    }

   


    return (
        <div>
        <PageTitle>Register</PageTitle>
          <div className='form'>
          <form onSubmit={handleSubmit}>
            <p><TextInput
                name='username'
                id='username'
                placeholder='Full Name Here'
                type='text'
                value={signUpData.username}
                onChange={handleChange}
            /></p>
{/* 
            <p>
            <TextInput
                name='email'
                id='email'
                placeholder='Email Address Here'
                type='email'
                value={signUpData.email}
                onChange={handleChange}
            /></p> */}

            <p>
            <TextInput
                name='password'
                id='password'
                placeholder='Password Here'
                type='password'
                value={signUpData.password}
                onChange={handleChange}
             /></p>
             <SubmitButton type='submit'>Register!</SubmitButton>
          </form>
          </div>

          </div>
    )

    }

    export default Register;