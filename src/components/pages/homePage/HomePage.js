import React from 'react'
import "./homePage.css"
import heart from "../../../assests/heart.png"
import comment from "../../../assests/comment.png"
import share from "../../../assests/share.png"
import logout from "../../../assests/logout.png"
import { menuItems } from '../../../utils/ConfigMenuItems.js'
import { artists, posts, work } from '../../../utils/Posts.js'
import { signOut } from 'firebase/auth'
import { auth } from '../../../utils/firebase.js'
import { useNavigate } from 'react-router-dom'
import SignInOutAuth from '../../SignInOutAuth.js'

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div>
      <SignInOutAuth />
      {/* SideBar */}
      <div className='sidebar'>
        <div>
          <div className='menu'>
            {menuItems.map((items) => (
              <div className='item' key={items.id}>
                <img className='icon' src={items.icon} alt="" />
                <span className='title'>{items.title}</span>
              </div>

            ))}
            <div className='item'>
              <img className='icon' src={logout} alt="" />
              <span className='logout' onClick={handleSignOut}>Logout</span>
            </div>
          </div>
          <div className='credits'>
            <span className='creditsName'>2022©logo name</span>
            <span className='creditsName'>Developed by ivan Infotech</span>
          </div>

        </div>


        {/* Posts */}
        <div>
          {posts.map((post) => (
            <div className='center'>
              <div className='userInfo'>
                <div className='info'>
                  <img className='userIcon' alt='' src={post.profilePic} />
                  <div className='details'>
                    <span className='userName'>{post.name}</span>
                    <span className='userId'>{post.titleId}</span>
                  </div>
                </div>
                <div className='content'>
                  <p className='desc'>{post.desc}</p>
                  <img className='bg' alt='' src={post.img} />
                </div>
                <div className='interaction'>
                  <div className='interaction1'>
                    <img className='interactionIcon' alt='' src={heart} />
                    <span className='interactionValue'>9.8k</span>
                  </div>
                  <div className='interaction1'>
                    <img className='interactionIcon' alt='' src={comment} />
                    <span className='interactionValue'>8.6k</span>
                  </div>
                  <div className='interaction1'>
                    <img className='interactionIcon' alt='' src={share} />
                    <span className='interactionValue'>7.2k</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
          <div className='scroll'>
            <div className='artistsWork'>
              {work.map((item) => (
                <div className='works'>
                  <img className='workBg' alt='' src={item.img} />
                  <span>{item.name}</span>
                  <div className='rating'>
                    <span>{item.rupee}</span>
                    {
                      [...Array(5)].map((e, i) => <img className='stars' alt='' src={item.stars} />)
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* Artists */}
        <div className='scrollVertical'>
          <div className='rightHeading'>
            <span>Artists</span>
            <span className='rightHeadingItem'>Photographers</span>
          </div>
          <div>

            <div className='artists'>
              {artists.map((artist) => (
                <div className='rightBlock'>
                  <img className='artistBg' alt='' src={artist.img} />
                  <div className='artist'>
                    <img className='artistPic' alt='' src={artist.profilePic} />
                    <div className='artistDesc'>
                      <span className='artistName'>{artist.name}</span>
                      <span className='artistTitle'>{artist.titleId}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className='credits2'>
                <span className='creditsName'>Privacy</span>
                <span className='creditsName'>Terms of Service</span>
                <span className='creditsName'>Cookie</span>
              </div>
            </div>
          </div>
        </div>


        {/*  */}


      </div>
    </div>

  )
}

export default HomePage
