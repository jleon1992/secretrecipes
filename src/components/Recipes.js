import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from "react-router-dom";
import Recipe from './Recipe'
import SearchBar from './SearchBar'

import styled from 'styled-components'


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

export const Recipes = props => {
    const {push} = useHistory()
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axiosWithAuth()
        .get('https://lambdaschool-cookbook2.herokuapp.com/recipes')
        .then(res => {
            console.log(res)
            setRecipes(res.data.recipes)       
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    
    const changeSearch = e => {
        
        setSearch(e.target.value)
        
    }
    const searchedRecipes = recipes.filter(recipe => {
        return recipe.title.indexOf(search) !== -1            
     }          
     )
     console.log(searchedRecipes)
     console.log(search)
 
    return (
        <div>
            <h1>Welcome</h1>

            <SearchBar changeSearch={changeSearch} />
            {/* <RecipeForm /> */}
            {searchedRecipes.map(recipe => {                
                    return(
                        <Recipe recipe={recipe} searchValue={search} />
                    )                
            })}
            <h1>No Recipes?</h1>
            <button onClick={()=> {push('/newrecipe')}}>Add New Recipe</button>
          
            {/* <RecipeForm   /> */}
        </div>
    )
}


export default Recipes