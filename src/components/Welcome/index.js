import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  isSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading1">Welcome</h1>
        <p className="heading2">Thank you! Happy Learning</p>
        {isSubscribed && (
          <button type="button" className="s-button" onClick={this.isSubscribe}>
            Subscribe
          </button>
        )}
        {!isSubscribed && (
          <button type="button" className="s-button" onClick={this.isSubscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
