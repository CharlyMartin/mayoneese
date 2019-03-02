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
    const input = event.target.name;
    const value = event.target.value;
    this.setState({ [input]: value })
  }

  // handleSubmit(event) {
    

  // }

  // Post form data somewhere
  handleSubmit(event) {
    console.log(this.state.name, this.state.email);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    event.preventDefault();
  };

  render() {
    const { name, email, button } = data.form;
    const emailPattern = '(.+)@(.+){2,}\.(.+){2,}';
    const formName = 'contact'
    const honeypot = 'address';

    return (
      <form
        onSubmit={this.handleSubmit}
        className="email-form"
        name={formName}
        method="POST"
        action="/"
        data-netlify="true"
        netlify-honeypot={honeypot}
      >
        {/* This input is for netflify */}
        <input
          type="hidden"
          name="form-name"
          value={formName} />

        {/* Hidden field for bots */}
        <input name={honeypot} type="text" style={{ display: 'none' }} />

        {/* Name field */}
        <input
          name="name"
          placeholder={name}
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          required={true}
        />

        {/* Email field */}
        <input
          name="email"
          placeholder={email}
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          pattern={emailPattern}
          required={true}
        />

        {/* Button */}
        <input type="submit" value={button} />
      </form>
    )
  }
}

export default Form
