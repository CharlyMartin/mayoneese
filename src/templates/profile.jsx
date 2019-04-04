import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Profile = () => (
  <Layout>
    <SEO title="Profile" />
    <div className="container">
      <h1>This is a profile page</h1>
      
      <Link to="/">Go home</Link>
    </div>
  </Layout>
)

export default Profile
