import { useEffect, useState } from 'react'
import './App.css'
import { BoxUser } from './components/box-user/box-user'
import { BoxHours } from './components/box-hours/box-hours'

function App() {

  const [hours, setHours] = useState(null);
  const [error, setError] = useState(null);
  const [timeFrame, setTimeFrame] = useState("weekly");

  useEffect(() => {

    fetch('./data.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setHours(data);
      })
      .catch((error) => {
        setError(error);
      })

  }, [])

  return (

    <div className='container'>
      <BoxUser setTimeFrame={setTimeFrame} timeFrame={timeFrame}/>
      <div className='box-container'>
        {hours && (
          hours.map((h, index) =>
            <BoxHours hoursdata={h} key={index} timeFrame={timeFrame}/>
          )
        )}
      </div>
    </div>

  )
}

export default App
