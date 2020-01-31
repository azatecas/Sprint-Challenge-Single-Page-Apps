import React, { useState } from "react";

export default function SearchForm(props) {


  

  const handleSubmit = e => {
    e.preventDefault(); 
  }  
 
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
         <label>
            <input 
                type='text'
                placeholder='Jerry Smith🔍'  
                name="character"
                value={props.search}
                onChange = {props.handleChange}  
             />
                
        </label>
      </form>
    </section>
  );
}


