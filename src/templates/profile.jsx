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
  // console.log(user);

  const renderHeaderContent = () => (
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

  const renderTracks = (tracks) => {
    return tracks.map(track => {
      return (
        <A href={track.data.SoundCloud} key={track.data.Id}>
          <Track obj={track}/>
        </A>
      )
    });
  }

  const renderHeader = () => (
    <div>
      <Banner colour="yellow" shade="00" blob="bottom">
        <section className="user">
          {renderHeaderContent()}
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
        rotate="-2"
      >
        <div className="user">
          {renderHeaderContent()}
        </div>
      </Banner>

      <Banner
        colour="yellow"
        shade="30"
        blob="bottom"
        width="150%"
        top="2%"
        left="-25%"
        position="absolute"
        zIndex="-20"
        rotate="-4"
      >
        <div className="user">
          {renderHeaderContent()}
        </div>
      </Banner>
    </div>
  )

  
  return (
    <Layout>
      <SEO title={`Suggestions of ${user.Name}`} />
      <div id="profile-page">
      
      {renderHeader()}

        <section id="suggestions">
          <div className="container">
            <div className="column-layout">
              <div className="wallpaper">
                {renderWallpaper()}
              </div>

              <div className="songs">
                {/* <Track /> */}
                {renderTracks(user.Songs)}
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default Profile
