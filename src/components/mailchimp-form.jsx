// Librairies
import React from 'react'

// CSS
import './mailchimp-form.css'

// Data
import data from '../data/form'

// Helpers
import { capitalise } from '../helpers/functions'

class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      honeypot: '',
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value)
    if (event.target.name === 'FNAME') {
      this.setState({ name: capitalise(event.target.value) })
      return
    }
    if (event.target.name === 'EMAIL') {
      this.setState({ email: event.target.value })
      return
    }
    this.setState({ honeypot: event.target.value })
  }

  // handleSubmit(event) {
  //   console.log(event.target);
  //   event.preventDefault();
  // };

  render() {
    const { name, email, button } = data

    return (
      <div id="mc_embed_signup">
        <form
          className="email-form validate"
          action="https://club.us20.list-manage.com/subscribe/post?u=287e3065a33862e29be073e7a&amp;id=0cd6c680d7"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          // onSubmit={this.handleSubmit}
        >
          {/* Name field */}
          <input
            name="FNAME"
            type="text"
            className="name input"
            id="mce-FNAME"
            value={this.state.name}
            placeholder={name}
            onChange={this.handleChange}
            required={true}
          />

          {/* Email field */}
          <input
            name="EMAIL"
            type="email"
            className="required email input"
            id="mce-EMAIL"
            value={this.state.email}
            placeholder={email}
            onChange={this.handleChange}
            pattern="(.+)@(.+){2,}\.(.+){2,}"
            required={true}
          />

          {/* Honeypot */}
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div
            id="mce-responses"
            className="clear"
            style={{ display: 'inline' }}
          >
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px', display: 'none' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_287e3065a33862e29be073e7a_0cd6c680d7"
              tabIndex="-1"
              value={this.state.honeypot}
              onChange={this.handleChange}
            />
          </div>

          {/* Button */}
          <input
            type="submit"
            name="subscribe"
            onMouseEnter={this.props.hoverCallback}
            className="button input"
            value={button}
            id="mc-embedded-subscribe"
          />
        </form>
      </div>
    )
  }
}

export default MailchimpForm
