// Librairies
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/banner';
import A from '../components/a';

// CSS
import './profile.css'

// Data
import data from '../data/user';

function Profile(props) {
  const { user } = props.pageContext;
  console.log(user);

  const renderHeader = () => (
    <div className="container">
      <p className="suggestions">{data.header.selection}</p>
      <h1 className="name">{user.Name}</h1>

      <A href={user.Contact}>
        <div className="button">
          <p>{data.header.cta}</p>
        </div>
      </A>

    </div>
  );

  
  return (
    <Layout>
      <SEO title="Profile" />

      <Banner colour="yellow" shade="00" blob="bottom">
        <section className="user">
          {renderHeader()}
        </section>
      </Banner>

      <Banner
        colour="yellow"
        shade="20"
        blob="bottom"
        width="150%"
        top="1%"
        left="-25%"
        position="absolute"
        zIndex="-10"
        rotate="1"
      >
        <div className="user">
          {renderHeader()}
        </div>
      </Banner>

      {/* <Banner
        colour="yellow"
        shade="30"
        blob="bottom"
        width="150%"
        top="1%"
        left="-25%"
        position="absolute"
        zIndex="-20"
        rotate="-1"
      >
        <div className="user">
          {renderHeader()}
        </div>
      </Banner> */}

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
