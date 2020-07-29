import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'



    const initialState =   {
        title: "",
        source: "",
        notes: "",
        ingredients: [
            ""
        ],
        instructions: [
            "",
            ""
        ],
        tags: [
            "",
            ""
        ]
    }


export const RecipeForm = props => {

    const {push} = useHistory()
 
    const [formValues, setFormValues] = useState(initialState)

    const ingredients = formValues.ingredients.slice()
    const instructions = formValues.instructions.slice()
    const tags = formValues.tags.slice()

    const ingredientChangeHandler = (e, index) => {
        ingredients[index] = e.target.value        
        setFormValues({
            ...formValues,
            ingredients: ingredients
        })
      }

      const instructionChangeHandler = (e, index) => {
        instructions[index] = e.target.value        
        setFormValues({
            ...formValues,
            instructions: instructions
        })
      }

      const tagChangeHandler = (e, index) => {
        tags[index] = e.target.value        
        setFormValues({
            ...formValues,
            tags: tags
        })
      }

      const changeHandler = e => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
              [name]: value,
             
        })
        console.log(formValues)
    }
    const addRecipe = e => {
        e.preventDefault()
       
        axiosWithAuth()
        .post('https://lambdaschool-cookbook2.herokuapp.com/recipes', formValues)
        .then(res => {
            console.log(res)
            
            
        })
        .catch(err => {
            console.log(err)
           
        })
        push('/protected')
    }

    
    return (
        <div className='addRecipe'>
            {/* <h1>New</h1> */}
            <form onSubmit={addRecipe} className='recipeForm'>                
                <label>
                   <b>Title: </b> 
                <input
                type='text'
                name='title'
                value={formValues.title}
                onChange={changeHandler}
                />
                </label>
                <label>
                   <b>Source: </b> 
                <input
                type='text'
                name='source'
                value={formValues.source}
                onChange={changeHandler}
                />
                </label>
                
                <label>
                    <b>Notes: </b> 
                    <input
                type='text'
                name='notes'
                value={formValues.notes}
                onChange={changeHandler}
                />
                </label>
               
                 <label >
                        <b>Ingredients</b>
                        {formValues.ingredients.map((ingredient, index) => {
                        return(
                        <input
                        type='text'
                        value={ingredient}
                        onChange={(e) => {ingredientChangeHandler(e, index)} }
                        />
                        )
                        
                    })}
                    </label>
                    <label >
                        <b>Instructions</b>
                        {formValues.instructions.map((instruction, index) => {
                        return(
                        <input
                        type='text'
                        value={instruction}
                        onChange={(e) => {instructionChangeHandler(e, index)} }
                        />
                        )
                        
                    })}
                    </label>
                    <label >
                        <b>Tags</b>
                        {formValues.tags.map((tag, index) => {
                        return(
                        <input
                        type='text'
                        value={tag}
                        onChange={(e) => {tagChangeHandler(e, index)} }
                        />
                        )
                        
                    })}
                    </label>
                    <button>Create Recipe</button>
                    <button onClick={()=>{push('/protected')}}>cancel</button>
            </form>
        </div>
    )
}

export default RecipeForm