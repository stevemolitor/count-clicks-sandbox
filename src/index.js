import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

const CountClicks = () => {
  const [clicks, setClicks] = useState(0)

  const incrementClicks = () => {
    setClicks(prevClicks => {
      console.log(
        'incrementing clicks, clicks',
        clicks,
        prevClicks,
        'prevClicks',
      )
      return prevClicks + 1
    })
  }

  const trackClicks = () => {
    console.log('click count:', clicks)
  }

  useEffect(() => {
    window.addEventListener('click', incrementClicks)

    // print total clicks when component unmounts (maybe):
    return trackClicks
  }, [])

  console.log('--- RENDER ---')
  return (
    <div>
      <div>I be countin' clicks! Please click!</div>
      <div>
        Click below to unmount and then look at the console to see the click
        count.
      </div>
    </div>
  )
}

const App = () => {
  const [showClicker, setShowClick] = useState(true)

  return (
    <div>
      {showClicker && <CountClicks />}
      <button
        onClick={() => {
          setShowClick(!showClicker)
        }}
      >
        {showClicker ? 'Unmount' : 'mount'} click tracker
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
