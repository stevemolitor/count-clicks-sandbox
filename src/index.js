import React, {Component, useState} from 'react'
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

class CountClicks extends Component {
  state = {
    clicks: 0,
  }

  incrementClicks = () => {
    const {state} = this
    this.setState({clicks: state.clicks + 1})
  }

  trackClicks = () => {
    const {state} = this
    console.log(`Total Clicks: ${state.clicks}`)
  }

  componentWillUnmount() {
    this.trackClicks()
  }

  render() {
    const {state} = this
    console.log('rendering, clicks count:', state.clicks)

    return (
      <div>
        <button style={buttonStyle} onClick={this.incrementClicks}>
          Click Here!
        </button>
      </div>
    )
  }
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
