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
            <div className="card-divider">
                 {children[0] && React.cloneElement(children[0], { data: data.results[0] })}
                 {children[1] && React.cloneElement(children[1], { data: data.results[1] })}
            </div>
            <div className="card-divider">
            {children[2] && React.cloneElement(children[2], { data: data.results[2] })}
            {children[3] && React.cloneElement(children[3], { data: data.results[3] })}
            </div>

            </div>
            
        </div>
    )
}