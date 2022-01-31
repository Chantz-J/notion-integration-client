import styled from "styled-components";

export const StyledNavbar = styled.div`
  .navbg {
    width: 100vw;
    background: ${props => props.theme.bg.primary};
    height: 60px;
    top: 0;
    position: fixed;
    z-index: 100;
  }

  .navbg .nav-container {
    max-width: 1440px;
    margin: 0 auto;
  }
  
  .navbg .navbar, .navbg .mobile-nav {
    position: fixed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: ${props => props.theme.bg.primary};
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    height: 60px;
    top: 0;
  }
  
  .navbg .navbar .logo, .navbg .mobile-nav .logo {
    margin-left: 25px;
  }
  
  .navbg .navbar .menu, .navbg .mobile-nav .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
  }
  
  .navbg .navbar .menu .link, .navbg .mobile-nav .menu .link {
    padding: 20px;
  }
  
  .navbg .navbar .menu a, .navbg .mobile-nav .menu a {
    display: inline-block;
    text-decoration: none;
    color: grey;
    -webkit-transition: color .3s ease-in-out;
    transition: color .3s ease-in-out;
    color: ${props => props.theme.text.primary};
  }
  
  
  .navbg .navbar a, .navbg .mobile-nav a {
    text-decoration: none;
  }
  
  .navbg .navbar .nav-btn, .navbg .mobile-nav .nav-btn {
    background: #31d35c;
    background: linear-gradient(97deg, #31d35c 23%, #2bb7da 71%);
    width: 150px;
    text-align: center;
    padding: 13px 25px;
    border-radius: 20px;
    color: #2d314d;
    font-weight: 500;
    margin-right: 25px;
    -webkit-transition: color .3s ease-in-out;
    transition: color .3s ease-in-out;
  }
  
  .navbg .navbar .nav-btn:hover, .navbg .mobile-nav .nav-btn:hover {
    background: #2dc254;
    background: linear-gradient(97deg, #2dc254 23%, #29a1bf 71%);
    color: white;
  }
  
  .navbg .mobile-nav {
    visibility: hidden;
  }
  
  .navbg .hamburger {
    visibility: hidden;
    position: absolute;
    font-size: 2rem;
    right: 25px;
  }
  
  .hidden {
    visibility: hidden;
  }
  
  @media all and (max-width: 800px) {
    .nav-container {
      visibility: hidden;
    }
    .navbg .hamburger {
      visibility: visible;
      cursor: pointer;
    }
    .navbg .mobile-nav {
      visibility: visible;
    }
    .navbg .mobile-nav .logo {
      margin-left: 35px;
    }
    .navbg .mobile-nav .collapse {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-flow: column nowrap;
              flex-flow: column nowrap;
      background: ${props => props.theme.bg.primary};
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
    }
    .navbg .mobile-nav .menu {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-flow: column nowrap;
              flex-flow: column nowrap;
      margin-top: 35px;
    }
    .navbg .mobile-nav .nav-btn {
      margin: 15px auto 0 auto;
    }
    .navbg .mobile-nav .fa-times {
      position: absolute;
      font-size: 2rem;
      right: 25px;
      cursor: pointer;
    }
  }

`;