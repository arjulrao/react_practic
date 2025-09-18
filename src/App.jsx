import React from 'react'

import Card from './Components/Card';

function App() {
  
  const data = ['Harsh', "Ankur", "Moin", "Sharthak", "Muskaan", "Satwik"]

    return(
      <div>
        {data.map((elem, index)=>(
           <div key={index} className='px-3 py-4 bg-zinc-300 rounded-md w-fit' >
              { elem }
            </div>)
        )}  
      </div>
         
   ) 
}

export default App;