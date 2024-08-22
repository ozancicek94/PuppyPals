import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppies);

  const featPup = puppies.find(pup => featPupId === pup.id);
  console.log(featPup)

  return (
    <div>

      {puppies.map(puppy => {
        return <p className='puppyList' key={puppy.id} onClick={() => {setFeatPupId(puppy.id)}}>{puppy.name}</p>  
      })
      }

      

      { featPupId && ( <div>

        <h2 className=''>{featPup.name}</h2>
        <ul>
          <li>Age: {featPup.age}</li>
          <li>Email: {featPup.email}</li>
        </ul>
        
         </div>)}

      

      
  
    </div>
  )
}

export default App
