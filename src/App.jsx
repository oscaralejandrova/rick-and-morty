import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import rick_morty from './assets/images/Rick-morty-9.jpg'


function App() {

  const randomLocation = getRandomNumber(126)
  const [locationSelected, setLocationSelcted] = useState(randomLocation)
  

  
  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126)}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  },[locationSelected])

  return (
    <div className='app'>

     <div className='container-img'>
       <img className='img-principal' src={rick_morty}/>
     </div>
        
      <FormSearch
      setLocationSelected={setLocationSelcted}/>
      {
        hasError
        ?<h2 className='app_error'> ❌ Hey! you must provide and id from 1 to 126 🥲</h2>
        :(
          <>
          <LocationInfo
          location={location}/>
    
          <div className='container_resident'>
            {
              location?.residents.map(url=> (
                <ResidentCard
                key={url}
                url={url}/>
              ))
            }
          </div>
          </>
        )
      }
    </div>
  )
}

export default App
