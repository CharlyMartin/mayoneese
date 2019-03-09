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
      <Banner colour="grey" shade="10" position="top" shadows={[]}>
        <div className="container-sm">
          <div className="footer-content">
            <h3>{data.footer.title}</h3>
            <p>{data.footer.description}</p>
          </div>
          <MailchimpForm />
        </div>
      </Banner>
    </footer>
  )
}

export default Footer
