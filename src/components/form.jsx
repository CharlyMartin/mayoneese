// Librairies
import React from 'react'

// CSS
import '../css/components/form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const input = event.target.name
    const value = event.target.value
    console.log(value)
    this.setState({ [input]: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" className="email-form">
        <input
          name="name"
          placeholder="John"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="email"
          placeholder="john@gmail.com"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input type="submit" value="Go!" />
      </form>
    )
  }
}

export default Form
