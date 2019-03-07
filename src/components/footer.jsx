// import { Link } from 'gatsby'
import React from 'react';

// Components
import MailchimpForm from './mailchimp-form';
import Banner from './banner';

// CSS
import './footer.css';

// Data
import data from '../data/home'

function Footer() {
  return (
    <Banner colour="grey" shade="10" position="top">
    <footer className="footer">
      <div className="container-sm">
        <div className="footer-content">
          <h2>{data.footer.title}</h2>
          <p>{data.footer.description}</p>
        </div>
        <MailchimpForm />
      </div>
    </footer>
    </Banner>
  )
}

export default Footer
