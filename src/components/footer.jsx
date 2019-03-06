// import { Link } from 'gatsby'
import React from 'react';

// Components
import MailchimpForm from './mailchimp-form';

// CSS
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-sm">
        <MailchimpForm />
      </div>
    </footer>
  )
}

export default Footer
