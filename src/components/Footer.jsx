import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faYoutube, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const phoneNumber = '+917371089421'; // Your phone number in international format
  const message = encodeURIComponent('Hello, I need more information about your services'); // URL-encoded message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="contact-text">
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <StyledButton>
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                <span>Contact Us</span>
              </StyledButton>
            </a>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3><span className="stock">Stock</span> <span className="archery">Archery</span></h3>
            <a href="/">
              <p>Besides Babulal Sweets, Manik Sarkar Chowk, Adampur, Bhagalpur - 812001, Bihar.</p>
            </a>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Feel Free to Contact us</h3>
            <form action="https://formspree.io/f/mzzpddag" method="POST">
              <input
                name="phone"
                type="tel"
                required
                autoComplete="off"
                placeholder="Phone number"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <a href="https://www.linkedin.com/company/stockarchery/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} beat style={{ color: "#0077b5" }} className="icons" />
              </a>
              
              <a href="https://www.instagram.com/stock.archery/?hl=en" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} beat style={{ color: "#e1306c" }} className="icons" />
              </a>
              
              <a href="https://www.youtube.com/@stock.archery" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} beat style={{ color: "#ff0000" }} className="icons" />
              </a>
              
              <a href="https://x.com/stockarchery" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} beat style={{ color: "#0077b5" }} className="icons" />
              </a>
              
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <a href="tel:+919229102334"><h3>+91 9229102334</h3></a>
            <a href="tel:+918252052601"><h3>+91 8252052601</h3></a>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} StockArchery. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgba(37, 37, 37, 255);
    border-radius: 2rem;
    border: 3px solid #febb12;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid {
      display: grid;
      gap: 2rem;

      .contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #febb12;
      }

      .contact-short-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none; /* Remove underline from the link */
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(37, 37, 37, 255);

    h3 {
      color: ${({ theme }) => theme.colors.yellow};
      margin-bottom: 2.4rem;
      font-size: 2.3rem;
    }

    .stock {
      color: #ffffff; /* White color for Stock */
    }

    .archery {
      color: #febb12; /* Existing color for Archery */
    }

    p {
      color: #febb12;
      font-size: 2rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      .icons {
        font-size: 2.4rem;
        color: inherit; /* Use color from parent element */
        cursor: pointer;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="email"] {
          width: 250px;
          padding: 0.75rem 1rem;
          border-radius: 1.5rem;
          border: 2px solid ${({ theme }) => theme.colors.yellow};
        }

        input[type="submit"] {
          width: 150px;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid #febb12;
          background-color: #febb12;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #e6c072;
            border-color: #febb12;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .contact-short-btn {
        margin-top: 2rem;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #28a745; /* Green color */
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1.5rem; /* Added border radius */

  .whatsapp-icon {
    font-size: 2rem; /* Size of the WhatsApp icon */
  }

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`;

export default Footer;
