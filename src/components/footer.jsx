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
    <footer className="footer">
      <Banner colour="grey" shade="10" zIndex="-10" spread="0" angle="-180" />
      <div className="container-sm">
        <div className="footer-content">
          <h2>{data.footer.title}</h2>
          <p>{data.footer.description}</p>
        </div>
        <MailchimpForm />
      </div>
    </footer>
  )
}

export default Footer
