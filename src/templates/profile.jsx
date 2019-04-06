// Librairies
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'

// CSS
import './profile.css'

function Profile(props) {
  console.log(props);
  return (
    <Layout>
      <SEO title="Profile" />
      <div className="container">
        <h1>This is a profile page</h1>
        <div className="test">
          <div className="test-name">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis eligendi incidunt eaque aspernatur esse ducimus praesentium illo laboriosam nesciunt temporibus, commodi laborum error, veniam dicta recusandae fugit, deserunt eos!
            </p>
          </div>
        </div>
        
        <Link to="/">Go home</Link>
      </div>
    </Layout>
  )
}

export default Profile
