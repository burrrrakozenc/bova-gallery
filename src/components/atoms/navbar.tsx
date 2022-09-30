import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../../assets/images/LOGO_.svg'
// import LogoWhite from '../../../assets/images/LOGO_WHITE.svg'
import LogoWhitePng from '../atoms/Logo/LOGO_W.png'

// import LogoWhitePng from '../../../assets/images/LOGO_W.png'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import useWindowSize from '../../utils/hooks'
// import {ImCross} from 'react-icons/im'
import '../../assets/css/menuContent.css'
// import { useWindowSize } from '../../static/hooks'

const Navbar = () => {
  const size = useWindowSize()
  // const [menu, setMenu] = useState(false)

  const data = {
    facebook: '',
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <header className={`site-header active`}>
      <nav className="navbar navbar-right navbar-expand-lg navbar-dark">
        <div className="container-fluid d-flex">
          {/*<a className="navbar-brand" href="#">Brand</a>*/}
          <div className="logo">
            <a href="http://localhost:3000/">
              <object
                style={{ overflow: 'hidden' }}
                data={LogoWhitePng}
                width="70"
                height="70"
              />
            </a>
          </div>
          {/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*// @ts-ignore*/}
          {size.width > 680 ? (
            <></>
          ) : (
            <div className="language-bar">
              <a
                className="responsive-language"
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px',
                  color: 'lightgray',
                }}
              >
                TR
              </a>
              <a
                className="responsive-language"
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px',
                  color: 'lightgray',
                }}
              >
                EN
              </a>
              <a
                className="responsive-logo header-fab-icon"
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                // style={{color:'#3458eb'}}
              >
                <AiFillFacebook />
              </a>
              <a
                className="responsive-logo header-fab-icon fab fa-instagram"
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                className="responsive-logo header-fab-icon fa-inverse fab fa-youtube"
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube />
              </a>
            </div>
          )}
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*// @ts-ignore*/}
            {size.width < 680 ? (
              <></>
            ) : (
              <div className="ml-auto language-bar-2" style={{ right: '0' }}>
                <a
                  className="responsive-language"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    color: 'lightgray',
                  }}
                >
                  TR
                </a>
                <a
                  className="responsive-language"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    color: 'lightgray',
                  }}
                >
                  EN
                </a>
                <a
                  className="responsive-logo header-fab-icon"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  // style={{color:'#3458eb'}}
                >
                  <AiFillFacebook />
                </a>
                <a
                  className="responsive-logo header-fab-icon fab fa-instagram"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  className="responsive-logo header-fab-icon fa-inverse fab fa-youtube"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube />
                </a>
              </div>
            )}
            {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
            {/*    /!*<li className="nav-item">*!/*/}
            {/*    /!*    <a className="nav-link active" href="#">Home</a>*!/*/}
            {/*    /!*</li>*!/*/}
            {/*    <li className="nav-item">*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <ul
              className="navbar-nav float-end float-menu"
              style={{ color: 'white' }}
            >
              <li className="nav-item m-2">
                {/*<div className=:>*/}
                <Link to="#">ETKİNLİKLER</Link>
              </li>
              {/*<li className="nav-item m-2">*/}
              {/*    <Link to="#">*/}
              {/*        REZERVASYON*/}
              {/*    </Link>*/}
              {/*</li>*/}
              <li className="nav-item m-2">
                <Link to="#">GALERİ</Link>
              </li>
              <li className="nav-item m-2 nav-item-custom">
                <Link to="#">DUYURULAR</Link>
              </li>
              <li className="nav-item m-2">
                <Link to="#">BASINDA BİZ</Link>
              </li>
              <li className="nav-item m-2">
                <Link to="#">İLETİŞİM</Link>
              </li>
              {/*<li>*/}
              {/*    <a*/}
              {/*        className="responsive-language"*/}
              {/*        href={data.facebook}*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*        style={{*/}
              {/*            fontSize: '12px',*/}
              {/*            color: 'lightgray'*/}
              {/*        }}*/}
              {/*    >EN</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a*/}
              {/*        className="responsive-logo header-fab-icon"*/}
              {/*        href={data.facebook}*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*        // style={{color:'#3458eb'}}*/}
              {/*    >*/}
              {/*        <AiFillFacebook/>*/}
              {/*    </a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a*/}
              {/*        className="responsive-logo header-fab-icon fab fa-instagram"*/}
              {/*        href={data.facebook}*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer">*/}
              {/*        <FaInstagramSquare/>*/}
              {/*    </a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a*/}
              {/*        className="responsive-logo header-fab-icon fa-inverse fab fa-youtube"*/}
              {/*        href={data.facebook}*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*    >*/}
              {/*        <IoLogoYoutube/>*/}
              {/*    </a>*/}

              {/*    /!*<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*!/*/}
              {/*    /!*   data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>*!/*/}
              {/*    /!*<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">*!/*/}
              {/*    /!*    <li><a className="dropdown-item" href="#">Action</a></li>*!/*/}
              {/*    /!*    <li><a className="dropdown-item" href="#">Another action</a></li>*!/*/}
              {/*    /!*</ul>*!/*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </nav>

      {/*<header className={`site-header ${menu ? "active" : ""}`}>*/}
      {/*<div className="container">*/}
      {/*    <div className="header-main">*/}
      {/*        <div className="logo">*/}
      {/*            <Link to="/">*/}
      {/*                <object style={{overflow: 'hidden'}} data={LogoWhitePng} width="70" height="70"/>*/}
      {/*                /!*<img style={{zIndex:'-9999'}} alt="logo" src={LogoWhitePng} width="70" height="70"/>*!/*/}
      {/*                /!*<img   alt="logo" />*!/*/}
      {/*            </Link>*/}
      {/*        </div>*/}
      {/*        <a*/}
      {/*            className="responsive-language"*/}
      {/*            href={data.facebook}*/}
      {/*            target="_blank"*/}
      {/*            rel="noopener noreferrer"*/}
      {/*            style={{*/}
      {/*                fontSize: '12px',*/}
      {/*                color: 'lightgray'*/}
      {/*            }}*/}
      {/*        >TR</a>*/}
      {/*        <a*/}
      {/*            className="responsive-language"*/}
      {/*            href={data.facebook}*/}
      {/*            target="_blank"*/}
      {/*            rel="noopener noreferrer"*/}
      {/*            style={{*/}
      {/*                fontSize: '12px',*/}
      {/*                color: 'lightgray'*/}
      {/*            }}*/}
      {/*        >EN</a>*/}
      {/*        <a*/}
      {/*            className="responsive-logo header-fab-icon"*/}
      {/*            href={data.facebook}*/}
      {/*            target="_blank"*/}
      {/*            rel="noopener noreferrer"*/}
      {/*            // style={{color:'#3458eb'}}*/}
      {/*        >*/}
      {/*            <AiFillFacebook/>*/}
      {/*        </a>*/}
      {/*        <a*/}
      {/*            className="responsive-logo header-fab-icon fab fa-instagram"*/}
      {/*            href={data.facebook}*/}
      {/*            target="_blank"*/}
      {/*            rel="noopener noreferrer">*/}
      {/*            <FaInstagramSquare/>*/}
      {/*        </a>*/}
      {/*        <a*/}
      {/*            className="responsive-logo header-fab-icon fa-inverse fab fa-youtube"*/}
      {/*            href={data.facebook}*/}
      {/*            target="_blank"*/}
      {/*            rel="noopener noreferrer"*/}
      {/*        >*/}
      {/*            <IoLogoYoutube/>*/}
      {/*        </a>*/}
      {/*        */}

      {/*        /!*<div className="test-nav">*!/*/}
      {/*        /!*    <div className="test-nav-wrapper">*!/*/}
      {/*        /!*        <GiHamburgerMenu className="m-auto"/>*!/*/}
      {/*        /!*    </div>*!/*/}
      {/*        /!*    <ul className="nav-ul-wrapper bg-black" style={{width: '120px',border:'2px white solid',borderRadius:'5px'}}>*!/*/}
      {/*        /!*        <li className="mt-1">*!/*/}
      {/*        /!*            Etkinlikler Rezervasyon Galeri Hakkimizda Iletisim*!/*/}
      {/*        /!*        </li>*!/*/}
      {/*        /!*        <li>*!/*/}
      {/*        /!*            Rezervasyon*!/*/}
      {/*        /!*        </li>*!/*/}
      {/*        /!*        <li>*!/*/}
      {/*        /!*            Galeri*!/*/}
      {/*        /!*        </li>*!/*/}
      {/*        /!*        <li>*!/*/}
      {/*        /!*            Hakkimizda*!/*/}
      {/*        /!*        </li>*!/*/}
      {/*        /!*        <li>*!/*/}
      {/*        /!*            Iletisim*!/*/}
      {/*        /!*        </li>*!/*/}
      {/*        /!*    </ul>*!/*/}
      {/*        /!*</div>*!/*/}

      {/*        /!*<div onClick={setTransition} className="menu-wrapper">*!/*/}
      {/*        /!*    /!*    <div id="menu">*!/*!/*/}
      {/*        /!*    /!*        <div id="menu-bar" onClick="menuOnClick()">*!/*!/*/}
      {/*        /!*    /!*            <div id="bar1" className="bar"></div>*!/*!/*/}
      {/*        /!*    /!*            <div id="bar2" className="bar"></div>*!/*!/*/}
      {/*        /!*    /!*            <div id="bar3" className="bar"></div>*!/*!/*/}
      {/*        /!*    /!*        </div>*!/*!/*/}
      {/*        /!*    /!*        <nav className="nav" id="nav">*!/*!/*/}
      {/*        /!*    /!*            <ul>*!/*!/*/}
      {/*        /!*    /!*                <li><a href="#">Home</a></li>*!/*!/*/}
      {/*        /!*    /!*                <li><a href="#">About</a></li>*!/*!/*/}
      {/*        /!*    /!*                <li><a href="#">Contact</a></li>*!/*!/*/}
      {/*        /!*    /!*                <li><a href="#">Blog</a></li>*!/*!/*/}
      {/*        /!*    /!*            </ul>*!/*!/*/}
      {/*        /!*    /!*        </nav>*!/*!/*/}
      {/*        /!*    /!*    </div>*!/*!/*/}

      {/*        /!*    /!*    <div className="menu-bg" id="menu-bg"></div>*!/*!/*/}

      {/*        /!*    <Menu styles={!menu ? styles : onVisible} className="menu-hamburger" width={'20%'}*!/*/}
      {/*        /!*          right={true} noTransition*!/*/}
      {/*        /!*          animationDuration={1}>*!/*/}
      {/*        /!*        <ul className="menu-list">*!/*/}
      {/*        /!*            <li className="menu-item">*!/*/}
      {/*        /!*                <Link to="/#home">Anasayfa</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*            <li key="Blogs" className="menu-item">*!/*/}
      {/*        /!*                <Link to={`/#Blogs`}>Etkinlikler</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*            <li key="Photos" className="menu-item">*!/*/}
      {/*        /!*                <Link to={`/#Photos`}>Galeri</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*            <li key="Services" className="menu-item">*!/*/}
      {/*        /!*                <Link to={`/#Services`}>Guncel</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*            <li key="Contact" className="menu-item">*!/*/}
      {/*        /!*                <Link to={`/#Contact`}>Iletisim</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*            <li key="Work" className="menu-item">*!/*/}
      {/*        /!*                <Link to={`/info`}>Hakkimizda</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*            <li key="English" className="menu-item">*!/*/}
      {/*        /!*                <Link to={`/#Contact`}>English</Link>*!/*/}
      {/*        /!*            </li>*!/*/}
      {/*        /!*        </ul>*!/*/}
      {/*        /!*    </Menu>*!/*/}
      {/*        /!*</div>*!/*/}
      {/*    </div>*/}
      {/*</div>*/}
    </header>
  )
}

export default Navbar
