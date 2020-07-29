import React from 'react'

export const Recipe = props => {
    
    const {recipe} = props
    return (
        <div>
            <h2>Title: {recipe.title}</h2>
            <b>Source: {recipe.source}</b>
        </div>
    )
}

export default Recipe