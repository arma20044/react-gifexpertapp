import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { useState, useEffect } from 'react/cjs/react.development';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category }) => {

    
 

    const {data:images,  loading} = useFetchGifs( category );
    console.log(loading);

 
    
    //getGifs();

    return (
        <>
            <h3> { category } </h3>
            
            { loading && <p>Loading...</p> }

             <div className="card-grid">
            
                
                    {
                        images.map( ( img ) => (

                            <GifGridItem 
                                key= {img.id}
                                {...img}
                                />
                        ) )    
                    }
                
            </div> 
        </>
    )
}
