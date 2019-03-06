// import { Link } from 'gatsby'
import React from 'react';

// Components
import MailchimpForm from './mailchimp-form';

// CSS
import './footer.css';

// Data
import data from '../data/home'

function Footer() {
  return (
    <footer className="footer">
      <div className="container-sm">
        <h3>{data.footer.title}</h3>
        <p>{data.footer.description}</p>
        <MailchimpForm />
      </div>
    </footer>
  )
}

export default Footer
