import React, {useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

const buttonStyle = {
  padding: '10px',
  fontSize: '14px',
}

const containerStyle = {
  padding: '30px',
}

const messageStyle = {
  margin: '20px 0',
  fontSize: '18px',
}

const CountClicks = () => {
  const [clicks, setClicks] = useState(0)

  function incrementClicks() {
    // setClicks(clicks + 1)
    setClicks(prevClicks => prevClicks + 1)
  }

  const incrementClicksCallback = useCallback(incrementClicks, [])

  function trackClicks() {
    console.log(`Total Clicks: ${clicks}`)
  }

  const trackClicksCallback = useCallback(trackClicks, [])

  useEffect(() => {
    window.addEventListener('click', incrementClicksCallback)

    return () => {
      window.removeEventListener('click', incrementClicksCallback)

      // print total clicks when component unmounts (maybe):
      trackClicksCallback()
    }
  }, [incrementClicksCallback, trackClicksCallback])

  console.log('rendering, clicks count:', clicks)
  return (
    <div>
      <div style={messageStyle} onClick={incrementClicks}>
        Click Anywhere!
      </div>
    </div>
  )
}

const App = () => {
  const [showClicker, setShowClick] = useState(true)

  return (
    <div style={containerStyle}>
      <h1>Count Clicks on Page</h1>
      {showClicker && <CountClicks />}
      <div style={messageStyle}>
        Click below to unmount the click tracker and see the total clicks in the
        console:
      </div>
      <button
        style={buttonStyle}
        onClick={() => {
          setShowClick(!showClicker)
        }}
      >
        {showClicker ? 'Unmount' : 'Mount'} Click Tracker
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
