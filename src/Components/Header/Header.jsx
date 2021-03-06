import styled from 'styled-components';
import {React, useEffect} from 'react'
import { connect } from 'react-redux';
import {signout} from '../../Redux/auth/authActions';
import {openModal} from './../../Redux/modals/modalActions';
import { useHistory } from 'react-router';

const Header = ({openModal, auth, signout}) => {
  const history = useHistory();
  useEffect(() => {
    if(auth){
      history.push("/home");
    }
    else{
      history.push("/");
    }
  }, [auth])
    return <Nav>
        <Logo>
            <img src="./images/logo.png" alt="Logo" />
        </Logo>
        {auth? 
        <>
                  <NavItems>
          <a href="/home">
              <img src="./images/home-icon.svg" alt="HOME"/>
              <span>Home</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
      </NavItems>
         <SignOut>
            <UserImg src={`${auth.photo}`} alt="user" />
            <DropDown onClick = {signout}>
              <span>Sign out</span>
            </DropDown>
          </SignOut>
        </>
          :
          <>
        <Login onClick= { ()=> openModal({modalType : "OpenSignIn"})}>Login</Login>
        </>
        }
        </Nav>
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 100px;
background: #040714;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
z-index: 3;
`

const Logo = styled.a`
    max-height: 100px;
    width: 80px;
    height: 80px;
    padding: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`
const NavItems = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 850px) {
    display: none;
  } 
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 30px;
      min-width: 30px;
      width: 30px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;
&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
  cursor: pointer;
}
`;

const UserImg = styled.img`
height: 100%;
`;

const DropDown = styled.div`
position: absolute;
top: 0px;
right: 0px;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`;

const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
${UserImg} {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
&:hover {
  ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
  }
  ${UserImg}{
    opacity: 0;
    transition-duration: 1s;
  }
}
`;
var actions = ({
  openModal,
  signout,
})

var mapState = (state) => ({
  auth  : state.auth,
})

export default connect(mapState, actions)(Header)
