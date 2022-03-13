import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./SplashPage.css"

import { getAllTracksThunk } from "../../store/tracks"

import LoginFormModal from '../LoginFormModal';
import DemoLogIn from '../LoginFormModal/DemoLogIn';
import logo from '../../media/logoPro.png'
import ProfilePage from '../ProfilePage/ProfilePage';

function SplashPage({isLoaded}){
    const sessionUser = useSelector(state => state.session.user);


    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllTracksThunk())
  }, [dispatch])

  const allTracks = useSelector(state => state.tracks)
  const trackArrayObj = Object.values(allTracks)
  const trackArr = Object.values(trackArrayObj)


    let splash;
    if (sessionUser) {
      splash = (
        <>
          <ProfilePage user={sessionUser} />
        </>
      );
    } else {
      splash = (
        <>
            <body className='splash-body'>
                <div>
                    <div className='content'>
                        <div className='upper-container'>
                            <NavLink exact to="/" >
                              <img className='logo-splash' src={logo} alt="logo" />
                            </NavLink>
                            <div className='signup-login-buttons'>
                                <div>
                                  <LoginFormModal />
                                </div>
                                <div >
                                  <DemoLogIn />
                                </div>
                                <button className='button signup-button'>
                                    <NavLink style={{ textDecoration: 'none', color: 'white', fontFamily: "'Assistant', sans-serif",
                                    letterSpacing: "0.5px", fontSize: "15px"}}
                                    to="/signup">Create account</NavLink>
                                </button>
                            </div>
                        </div>
                        <div className='middle-container'>
                            <h2 className='splash-h2'>Connect on LoudLoud</h2>
                            <p className='splash-p'>
                            Discover, stream, and share a constantly expanding mix of
                            music
                            </p>
                            <p className='splash-p'>
                            from emerging and major artists around the world.
                            </p>
                            <div>
                                <button className='free-button'>
                                  <NavLink style={{ textDecoration: 'none', color: 'white', fontFamily: "'Assistant', sans-serif", letterSpacing: "1px"}}
                                  to="/signup">Sign up for free</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h2 className='splash-h2 more-splash'>Popular Tracks</h2>
                    <ul className='track-list2'>{trackArr.map(track => (
                          <div className='track-group'>
                            <img src={track.artWork} className="track-image" alt='artwork'/>
                            <li className="track-name">{track.name}</li>
                          </div>
                        ))}
                    </ul>
                </div>
            </body>
        </>
      );
    }

    return (
      <div className='splash-main'>
        {isLoaded && splash}
      </div>
    );
  }

  export default SplashPage;
