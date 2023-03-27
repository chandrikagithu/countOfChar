// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    const {searchInput} = this.state

    this.setState({count: searchInput.length + 1})
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="container">
        <div className="count-container">
          <div className="count">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="myLabel" className="discription">
              Enter the phrase
            </label>
            <input
              id="myLabel"
              type="text"
              placeholder="Enter the phrase"
              className="input-style"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />

            <div className="number-of-count">
              <p className="no-of-letter">No.of letters: {count}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
