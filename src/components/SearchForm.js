import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
         <label>
            <input 
                type='text'
                placeholder='Jessie Pinkman🔍'  
                name="character"
                value={props}  
             />
                
        </label>
      </form>
    </section>
  );
}


