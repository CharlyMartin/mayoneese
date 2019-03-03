// Librairies
import React from 'react'

// CSS
import '../css/components/mailchimp-form.css'

// Data
import data from '../data/form'

class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      honeypot: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    if (event.target.name === 'FNAME') { this.setState({ name: event.target.value }); return };
    if (event.target.name === 'EMAIL') { this.setState({ email: event.target.value }); return };
    this.setState({honeypot: event.target.value});
    // const value = event.target.value;
    // this.setState({ [input]: value })
  }

  handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();
  };

  render() {
    const { name, email, button } = data;

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
            className=""
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
            className="required email"
            id="mce-EMAIL"
            value={this.state.email}
            placeholder={email}
            onChange={this.handleChange}
            pattern='(.+)@(.+){2,}\.(.+){2,}'
            required={true}
          />

          {/* Honeypot */}
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div id="mce-responses" className="clear" style={{display: 'inline'}}>
		        <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
		        <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
	        </div>
          <div style={{position: 'absolute', left: '-5000px', display: 'none'}} aria-hidden="true">
            <input
              type="text"
              name="b_287e3065a33862e29be073e7a_0cd6c680d7"
              tabIndex="-1"
              value={this.state.honeypot}
              onChange={this.handleChange} />
          </div>

          {/* Button */}
          <input
            type="submit"
            name="subscribe"
            className="button"
            value={button}
            id="mc-embedded-subscribe"
            />
        </form>
      </div>
    )
  }
}

export default MailchimpForm

// const data =` 
// (<div id="mc_embed_signup">
// <form action="https://club.us20.list-manage.com/subscribe/post?u=287e3065a33862e29be073e7a&amp;id=0cd6c680d7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe to our mailing list</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-FNAME">First Name </label>
// 	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-LNAME">Last Name </label>
// 	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
// </div>
// <div class="mc-field-group size1of2">
// 	<label for="mce-BIRTHDAY-month">Birthday </label>
// 	<div class="datefield">
// 		<span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / 
// 		<span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> 
// 		<span class="small-meta nowrap">( mm / dd )</span>
// 	</div>
// </div>
// <div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_287e3065a33862e29be073e7a_0cd6c680d7" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup-->)`
