// Librairies
import React from 'react'

// CSS
import '../css/components/form.css'

// Data
import data from '../data/content'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      address: '',
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
    const { name, email, button } = data.form
    const honeypot = 'address'

    return (
      <form
        onSubmit={this.handleSubmit}
        className="email-form"
        method="POST"
        action="/"
        netlify
        data-netlify="true"
        netlify-honeypot={honeypot}
      >
        {/* This input is for netflify */}
        <input
          type="hidden"
          name="form-name"
          value="contact" />

        <input
          name="name"
          placeholder={name}
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          required={true}
        />
        <input
          name="email"
          placeholder={email}
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          pattern=".+@globex.com"
          required={true}
        />
        <input name={honeypot} type="text" style={{ display: 'none' }} />
        <input type="submit" value={button} />
      </form>
    )
  }
}

export default Form
