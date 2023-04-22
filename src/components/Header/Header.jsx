import React, {useRef} from 'react';
import { Container, Row,Col } from "reactstrap";
import { Link , NavLink} from "react-router-dom";
import '../../styles/header.css';

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <header className='header'>
      {/* ============== header top ============== */}
      <div className='header__top'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className='header__top__left'>
                <span>Need Help?</span>
                <span className='header__top__help'>
                <i class="ri-phone-fill"></i>+91 9629408852
                </span>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* ============= header middle ==================*/}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Wheels-Car <br /> for Rent
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>Coimbatore,Tamilnadu</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to saturday</h4>
                  <h6>8am - 10pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >

            </Col>
          </Row>
        </Container>
      </div>

      {/*=============main navigation=============*/}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {
                navLinks.map((item, index) => (
                  <NavLink to={item.path}className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"}
                    key={index} >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>


          </div>
        </Container>
      </div>

    </header>
  );
};

export default Header;
