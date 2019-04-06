// Librairies
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

// CSS
import './profile.css'

// Data
import data from '../data/user';

function Profile(props) {
  const { user } = props.pageContext
  return (
    <Layout>
      <SEO title="Profile" />

      <Banner colour="yellow" shade="00" blob="bottom">
        <section className="user">
          <div className="container">
            <p className="suggestions">{data.header.selection}</p>
            <h1 className="name">{user.Name}</h1>
          </div>
        </section>
      </Banner>

      <Banner
        colour="yellow"
        shade="20"
        blob="bottom"
        width="150%"
        top="2%"
        left="-25%"
        position="absolute"
        zIndex="-10"
        rotate="1"
      >
        <div className="user">
          <p className="suggestions">{data.header.selection}</p>
          <h1 className="name">A</h1>
        </div>
      </Banner>

      <section id="songs">
      {data.page.background}
      </section>

      {/* <div className="container">
        <div className="test">
          <div className="test-name">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus omnis eligendi incidunt eaque aspernatur esse ducimus
              praesentium illo laboriosam nesciunt temporibus, commodi laborum
              error, veniam dicta recusandae fugit, deserunt eos!
            </p>
          </div>
        </div>

        <Link to="/">Go home</Link>
      </div> */}
    </Layout>
  )
}

export default Profile
