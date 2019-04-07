// Librairies
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/banner';
import A from '../components/a';
import Track from '../components/track';

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

  const renderWallpaper = () => {
    const strings = data.page.background.split(" ");
    return strings.map(s => <h3 className="message" key={s}>{s}</h3>);
  };

  
  return (
    <Layout>
      <SEO title="Profile" />
      <div id="profile-page">

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
          rotate="-1"
        >
          <div className="user">
            {renderHeader()}
          </div>
        </Banner>

        <Banner
          colour="yellow"
          shade="30"
          blob="bottom"
          width="150%"
          top="1%"
          left="-25%"
          position="absolute"
          zIndex="-20"
          rotate="-3"
        >
          <div className="user">
            {renderHeader()}
          </div>
        </Banner>

        {/* <div className="background-messages">
          <div className="container">
            {renderWallpaper()}
          </div>
        </div> */}

        <section id="suggestions">
          <div className="container">
            <div className="column-layout">
              <div className="wallpaper">
                {renderWallpaper()}
              </div>

              <div className="songs">
                <Track/>
              </div>
            </div>
          </div>
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
      </div>
    </Layout>
  )
}

export default Profile
