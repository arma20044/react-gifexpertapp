import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const categories = ['One Punch' , 'Samurai X' , 'Dragon Ball']

   const [categories, setCategories] = useState(['One Punch']);
   // , 'Samurai X' , 'Dragon Ball'])

 
    return (
        <>
            <div>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={ setCategories }/>
                <hr/>
            </div>

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                        key= { category }
                        category= { category } />
                    ))
                }
            </ol>
        </>
    )
}





