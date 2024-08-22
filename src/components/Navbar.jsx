import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from 'react-icons/cg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav role="navigation" aria-label="Main Navigation">
      <div className="menuIcon">
        <div
          className="mobile-navbar-btn"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          aria-expanded={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <CgCloseR
              className="mobile-nav-icon close-icon"
              aria-hidden="true"
            />
          ) : (
            <CgMenu
              className="mobile-nav-icon"
              aria-hidden="true"
            />
          )}
        </div>
        <ul className={`navbar-list ${openMenu ? 'active' : ''}`} role="menubar">
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
              role="menuitem"
              aria-label="Home"
            >
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
              role="menuitem"
              aria-label="About Us"
            >
              About
            </NavLink>
          </li>
         
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/testimonial"
              role="menuitem"
              aria-label="Testimonials"
            >
              Testimonials
            </NavLink>
          </li>
        
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
              role="menuitem"
              aria-label="Contact Us"
            >
              Contact
            </NavLink>
          </li>

          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/blog"
              role="menuitem"
              aria-label="Contact Us"
            >
              Blogs
            </NavLink>
          </li>
         
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/FAQ"
              role="menuitem"
              aria-label="Frequently Asked Questions"
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(37,37,37,255);
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }

  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 2rem;
          text-transform: uppercase;
          color: #febb12;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: #e9e12b;
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 4rem; /* Adjusted size */
      cursor: pointer;
      color: #febb12; /* Set icon color to yellow */
      transition: color 0.3s ease;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001; /* Ensure the close icon is above other elements */
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
      color: #FDD788;
    }

    .navbar-list {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #252525;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
      transform: translateX(100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
    }

    .navbar-list.active {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
      z-index: 9999;
      background-color: #252525;
      font-size: 5rem;
    }

    .menuIcon {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`;

export default Navbar;
