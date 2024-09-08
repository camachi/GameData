import { useEffect, useState } from "react";
import React from "react";
import { useFetch } from "./useFetch";
import { SearchBar } from "./SearchBar";
export function Genres({children})
{    const {data , loading} = useFetch("games");
     console.log(data,loading);

     if (loading) {
        return <div>Cargando...</div>;
      }
    
      
      if (!data || !data.results) {
        return <div>No se encontraron datos</div>;
      }
      const elements = [];
      for (let i = 0; i < data.results.length; i+=2) {
        elements.push(
            <div className="card-divider" key={i}>
            {children[1] && React.cloneElement(children[1], { 
              data: data.results[i], 
              key: i  
            })}
            {children[1] && React.cloneElement(children[1], { 
              data: data.results[i + 1], 
              key: i+1  
            })}
          </div>
        );
      }
      let page = 1;
    return(
        
        <div className="genres-container">
            <SearchBar></SearchBar>
            <div className="category-container">
                <div className="category-box">
                    <h3>Action</h3>
                </div>
                <div className="category-box">
                    <h3>RPG</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
            </div>
            <div className="gamecards-container-genres">
            {elements}
            
            </div>
            <div className="page-box">
                <button className="paginado">Back</button>
                <div>Page: {page}</div>
                <button className="paginado">Next</button>
            </div>
        </div>
    )
}