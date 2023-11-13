import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// CSS for the HeroSection component


const heroStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',
};

const leftStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  maxWidth: '350px',
};

const rightStyles = {
  maxWidth: '400px',
  width: '80%',
  margin: '0 auto',
};

const headingStyles = {
  fontFamily: 'Poppins',
  fontWeight: 600,
  lineHeight: '1.4em',
  fontSize: '2.8rem',
  marginBottom: '1.5rem',
  color: 'var(--black-1)',
};

const paragraphStyles = {
  fontSize: '2.0rem',
  marginBottom: '1.5rem',
  color: 'var(--black-2)',
};

const buttonWrapperStyles = {
  
  display: 'flex',
  gap: '20px', // Adjust the gap as needed
  textAlign: 'left',
};

const buttonStyles = {
  backgroundColor: '#26643b', // Background color
  color: '#ffffff', // Text color
  padding: '10px 20px', // Padding
  fontSize: '1.2rem', // Font size
  borderRadius: '4px', // Border radius
  border: 'none', // Remove button border
  cursor: 'pointer', 
  // Add a pointer cursor on hover
};

// CSS for the StoreInfo component
// CSS for the TopDishes component
const topDishesStyles = {
  '#dishGrid': {
    paddingTop: '10rem',
  },

  '.dishGrid__title': {
    fontSize: '2rem',
    color: 'var(--black-1)',
  },

  '.dishGrid__wrapper': {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  '.dishGrid__item': {
    backgroundColor: 'var(--lightGreen-1)',
    borderRadius: '12px',
    width: 'calc(33.33% - 1rem)',
    padding: '1rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },

  '.dishGrid__item__img': {
    marginBottom: '1rem',
  },

  '.dishGrid__item__img img': {
    maxWidth: '100%',
  },

  '.dishGrid__item__title': {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: 'var(--black-1)',
    marginBottom: '0.5rem',
  },

  '.dishGrid__item__price': {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: 'var(--green-1)',
    marginBottom: '0.5rem',
  },

  '.dishGrid__item__stars': {
    height: '1.5rem',
  },

  // Media query for larger screens
  '@media only screen and (min-width: 768px)': {
    '#dishGrid': {
      paddingTop: '15rem',
    },

    '.dishGrid__wrapper': {
      justifyContent: 'flex-start',
    },

    '.dishGrid__item': {
      width: 'calc(50% - 1rem)',
    },
  },

  // Media query for very small screens
  '@media only screen and (max-width: 480px)': {
    '.dishGrid__item': {
      width: '100%',
    },
  },
};

function HeroSection() {
  return (
    <section id="hero">
      <Navbar/>
      <div className="container">
        
        <div className="hero__wrapper" style={heroStyles}>
          <div className="hero__left" data-aos="fade-left" style={leftStyles}>
            <div className="hero__left__wrapper">
              <h1 className="hero__heading" style={headingStyles}>
                The flavor of tradition
              </h1>
              <p className="hero__info" style={paragraphStyles}>
                We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine dining environment.
              </p>
              <div className="button__wrapper" style={buttonWrapperStyles}>
                <Link to="/menu" className="btn primary-btn" style={buttonStyles}>
                  Explore Menu
                </Link>
                <Link to="/reservation" className="btn" style={buttonStyles}>
                  Book Table
                </Link>
              </div>
            </div>
          </div>
          <div className="hero__right" data-aos="fade-right" style={rightStyles}>
            <div className="hero__imgWrapper">
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/heroImg.png?raw=true" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function StoreInfo() {
  const storeInfoWrapperStyles = {
    display: 'flex', // Change to 'flex' to display items in the same row
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '4rem',
  };

  const storeInfoItemStyles = {
    backgroundColor: '',
    padding: '1px 1px',
    textAlign: 'center',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '300px',
    margin: '10 10px', // Added horizontal margin to separate the cards
  };

  const storeInfoIconStyles = {
    width: '30px',
    margin: '0 auto',
    marginBottom: '2.5rem',
  };

  const storeInfoTitleStyles = {
    fontSize: '2.4rem',
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginBottom: '20px',
    color: 'var(--black-1)',
  };

  const storeInfoTextStyles = {
    fontSize: '1.4rem',
    fontFamily: 'Raleway',
    color: 'var(--black-2)',
  };

  return (
    <section id="storeInfo" data-aos="fade-up">
      <div className="container">
        <div className="storeInfo__wrapper" style={storeInfoWrapperStyles}>
          <div className="storeInfo__item" style={storeInfoItemStyles}>
            <div className="storeInfo__icon">
              <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/wall-clock-icon.svg" alt="clock icon" style={storeInfoIconStyles} />
            </div>
            <h3 className="storeInfo__title" style={storeInfoTitleStyles}>9 AM - 10 PM</h3>
            <p className="storeInfo__text" style={storeInfoTextStyles}>Opening Hour</p>
          </div>
          <div className="storeInfo__item" style={storeInfoItemStyles}>
            <div className="storeInfo__icon">
              <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/address-icon.svg" alt="clock icon" style={storeInfoIconStyles} />
            </div>
            <h3 className="storeInfo__title" style={storeInfoTitleStyles}>KEC, Erode</h3>
            <p className="storeInfo__text" style={storeInfoTextStyles}>Address</p>
          </div>
          <div className="storeInfo__item" style={storeInfoItemStyles}>
            <div className="storeInfo__icon">
              <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/phone-icon.svg" alt="clock icon" style={storeInfoIconStyles} />
            </div>
            <h3 className="storeInfo__title" style={storeInfoTitleStyles}>+9688545869</h3>
            <p className="storeInfo__text" style={storeInfoTextStyles}>Call Now</p>
          </div>
        </div>
      </div>
    </section>
  );
}




function TopDishes() {
  return (
    <section id="dishGrid" data-aos="fade-up">
      <div className="container">
        <h1 className="dishGrid__title">
          Top Dishes
        </h1>
        <div className="dishGrid__wrapper" style={topDishesStyles['.dishGrid__wrapper']}>
          <div className="dishGrid__item" style={topDishesStyles['.dishGrid__item']}>
            <div className="dishGrid__item__img" style={topDishesStyles['.dishGrid__item__img']}>
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/food-7.png?raw=true" alt="food img" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title" style={topDishesStyles['.dishGrid__item__title']}>
                Vegan Salad bowl
              </h3>
              <h3 className="dishGrid__item__price" style={topDishesStyles['.dishGrid__item__price']}>
                Rs.170
              </h3>
              <div className="dishGrid__item__stars" style={topDishesStyles['.dishGrid__item__stars']}>
                <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true" alt="3 star" />
              </div>
            </div>
          </div>
          <div className="dishGrid__item" style={topDishesStyles['.dishGrid__item']}>
            <div className="dishGrid__item__img" style={topDishesStyles['.dishGrid__item__img']}>
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/food-1.png?raw=true" alt="food img" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title" style={topDishesStyles['.dishGrid__item__title']}>
                Vegan pesto zoodles
              </h3>
              <h3 className="dishGrid__item__price" style={topDishesStyles['.dishGrid__item__price']}>
                Rs.120
              </h3>
              <div className="dishGrid__item__stars" style={topDishesStyles['.dishGrid__item__stars']}>
                <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true" alt="3 star" />
              </div>
            </div>
          </div>
          <div className="dishGrid__item" style={topDishesStyles['.dishGrid__item']}>
            <div className="dishGrid__item__img" style={topDishesStyles['.dishGrid__item__img']}>
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/food-2.png?raw=true" alt="food img" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title" style={topDishesStyles['.dishGrid__item__title']}>
                GreenBowl
              </h3>
              <h3 className="dishGrid__item__price" style={topDishesStyles['.dishGrid__item__price']}>
                Rs.180
              </h3>
              <div className="dishGrid__item__stars" style={topDishesStyles['.dishGrid__item__stars']}>
                <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true" alt="3 star" />
              </div>
            </div>
          </div>
          
          {/* Repeat the structure for other dish items */}
        </div>
      </div>
    </section>
  );
}
function EventsMedia() {
    const eventsMediaWrapperStyles = {
      display: 'flex',
      gap: '1rem',
    };
  
    const eventsMedia1Styles = {
      position: 'relative',
    };
  
    
  
    return (
      <section id="eventsMedia" data-aos="fade-up">
        <div className="container">
          <div className="eventsMedia__wrapper" style={eventsMediaWrapperStyles}>
            <div className="eventsMedia__1" style={eventsMedia1Styles}>
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/eventsMedia1.png?raw=true" alt="events" />
              
            </div>
            <div className="eventMedia__2">
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/eventsMedia2.png?raw=true" alt="events" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  function EventsInfo() {
    const eventsInfoWrapperStyles = {
      display: 'flex',
      flexDirection: 'column',
    };
  
    const eventsInfoItemStyles = {
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      background: 'var(--lightGreen-1)',
      marginBottom: '1.5rem',
      borderRadius: '12px',
    };
  
    const eventsInfoItemInfoStyles = {
      flex: '4',
    };
  
    const eventsInfoItemTitleStyles = {
      fontSize: '1.4rem',
      marginBottom: '1rem',
      color: 'var(--black-1)',
    };
  
    const eventsInfoItemTextStyles = {
      fontSize: '1.4rem',
      color: 'var(--black-2)',
    };
  
    // eslint-disable-next-line
const eventsInfoTitleStyles = {
  fontSize: '1.8rem',
  color: 'var(--black-1)',
  marginBottom: '1rem',
};

// eslint-disable-next-line
const eventsInfoTextStyles = {
  color: 'var(--black-2)',
  fontSize: '1.4rem',
  marginBottom: '1rem',
};

  
   
  
    return (
      <section id="eventsInfo" data-aos="fade-up">
        <div className="container">
          <div className="eventsInfo__wrapper" style={eventsInfoWrapperStyles}>
            <div className="eventsInfo__left">
              <div className="eventsInfo__item" style={eventsInfoItemStyles}>
                <div className="eventsInfo__item__info" style={eventsInfoItemInfoStyles}>
                  <h2 className="eventsInfo__item__title" style={eventsInfoItemTitleStyles}>
                    Corporate Events & Weddings
                  </h2>
                  <p className="eventsInfo__item__text" style={eventsInfoItemTextStyles}>
                    Yummy's Cuisine is the perfect venue for your corporate events and weddings. We specialize in private parties.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  
  
  function WhyUs() {
    const whyUsWrapperStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
    };
  
    const whyUsLeftStyles = {
      textAlign: 'center',
    };
  
    const whyUsTitleStyles = {
      fontFamily: 'Poppins',
      fontSize: '1.8rem',
      color: 'var(--black-1)',
      fontWeight: 500,
      marginBottom: '1rem',
    };
  
    const whyUsTextStyles = {
      fontSize: '1.4rem',
    };
  
    const whyUsItemsWrapperStyles = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr', // Two columns in the same row
      gap: '1rem',
    };
  
    const whyUsItemStyles = {
      background: 'lightgreen',
      padding: '1.5rem',
      borderRadius: '12px',
    };
  
    const whyUsItemIconStyles = {
      maxWidth: '56px',
      margin: '0 auto',
      marginBottom: '1rem',
    };
  
    const whyUsItemTextStyles = {
      fontFamily: 'Poppins',
      fontSize: '1.4rem',
      fontWeight: 500,
      color: 'var(--black-1)',
    };
  
    return (
      <section id="whyUs">
        <div className="container">
          <div className="whyUs__wrapper" style={whyUsWrapperStyles}>
            <div className="whyUs__left" data-aos="fade-right" style={whyUsLeftStyles}>
              <h2 className="whyUs__title" style={whyUsTitleStyles}>
                Why Choose Our Food
              </h2>
              <p className="whyUs__text" style={whyUsTextStyles}>
                Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant.
                Yummy's Cuisine is one of the most exquisite fine-dining restaurants in Chittagong cities with a captivating
                view of GEC Hills, perfect ambiance, and scrumptious food.
              </p>
            </div>
            <div className="whyUs__right" data-aos="fade-left" style={whyUsItemsWrapperStyles}>
              <div className="whyUs__item" style={whyUsItemStyles}>
                <div className="whyUs__item__icon">
                  <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/whyUs-icon1.svg" alt="quality Food" style={whyUsItemIconStyles} />
                </div>
                <p className="whyUs__item__text" style={whyUsItemTextStyles}>Quality Food</p>
              </div>
              <div className="whyUs__item" style={whyUsItemStyles}>
                <div className="whyUs__item__icon">
                  <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/whyUs-icon2.svg" alt="Classical taste" style={whyUsItemIconStyles} />
                </div>
                <p className="whyUs__item__text" style={whyUsItemTextStyles}>Classical taste</p>
              </div>
              <div className="whyUs__item" style={whyUsItemStyles}>
                <div className="whyUs__item__icon">
                  <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/whyUs-icon3.svg" alt="Skilled chef" style={whyUsItemIconStyles} />
                </div>
                <p className="whyUs__item__text" style={whyUsItemTextStyles}>Skilled chef</p>
              </div>
              <div className="whyUs__item" style={whyUsItemStyles}>
                <div className="whyUs__item__icon">
                  <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/0985e752b8bbd68c4a905fe1b1ba32cc2e73f345/images/whyUs-icon4.svg" alt="Best service" style={whyUsItemIconStyles} />
                </div>
                <p className="whyUs__item__text" style={whyUsItemTextStyles}>Best service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  
  
  
  
  
  
  const Footer = () => {
    const footerStyles = {
      background: '',
      paddingTop: '5rem',
      paddingBottom: '2rem',
    };
  
    const footerWrapperStyles = {
      display: 'flex',
      flexDirection: 'row', // Change to row
      alignItems: 'center', // Align content vertically in the center
      justifyContent: 'space-between', // Distribute content evenly along the row
      gap: '3rem',
    };
  
    const footerColStyles = {
      flex: '1', // Equal width for each column
      minWidth: '100px', // Minimum width to prevent excessive collapsing
    };
  
    const footerSocialsTitleStyles = {
      fontSize: '2.0rem',
      color: 'black', // Change to black
      marginBottom: '1rem',
    };
  
    const footerSocialsListStyles = {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    };
  
    const footerSocialsItemStyles = {
      display: 'inline-block',
      marginRight: '0.5rem',
    };
  
    const footerSocialsLinkStyles = {
      padding: '0.5rem 0.8rem',
      backgroundColor: 'var(--white-1)',
      border: '1px solid var(--green-2)',
      borderRadius: '8px',
    };
  
    const footerTextTitleStyles = {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      color: 'black', // Change to black
      fontWeight: 600,
    };
  
    const footerTextStyles = {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    };
  
    const footerTextItemStyles = {
      fontSize: '1.4rem',
      marginBottom: '0.5rem',
      color: 'black', // Change to black
      fontFamily: 'Raleway',
      fontWeight: 500,
      lineHeight: '1.4em',
    };
  
    return (
      <footer style={footerStyles}>
        <div className="container">
          <div style={footerWrapperStyles} className="footer__wrapper">
            <div className="footer__col1" style={footerColStyles}>
              <div className="footer__socials">
                <h3 style={footerSocialsTitleStyles} className="footer__text__title">Follow us</h3>
                <ol style={footerSocialsListStyles} className="footer__socials__list">
                  <li style={footerSocialsItemStyles}>
                    <a style={footerSocialsLinkStyles} href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                        className="feather feather-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </li>
                  <li style={footerSocialsItemStyles}>
                    <a style={footerSocialsLinkStyles} href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                        className="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </li>
                  <li style={footerSocialsItemStyles}>
                    <a style={footerSocialsLinkStyles} href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                        className="feather feather-twitter">
                        <path
                          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="footer__col2" style={footerColStyles}>
              <h3 style={footerTextTitleStyles} className="footer__text__title">
                Links
              </h3>
              <ol style={footerTextStyles} className="footer__text">
                <li style={footerTextItemStyles}>
                  <Link to="/">Home</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/Menu">Menu</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/Reservation">Book Table</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/About">About Us</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/Gallery">Gallery</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/Review">Review</Link>
                </li>
              </ol>
            </div>
            <div className="footer__col3" style={footerColStyles}>
              <h3 style={footerTextTitleStyles} className="footer__text__title">
                Support
              </h3>
              <ol style={footerTextStyles} className="footer__text">
                <li style={footerTextItemStyles}>
                  <Link to="/Login">Login</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/Signup">Signup</Link>
                </li>
                <li style={footerTextItemStyles}>
                  <Link to="/Reservation">Reserve</Link>
                </li>
              </ol>
            </div>
            <div className="footer__col4" style={footerColStyles}>
              <h3 style={footerTextTitleStyles} className="footer__text__title">
                Contact
              </h3>
              <ol style={footerTextStyles} className="footer__text">
                <li style={footerTextItemStyles}>
                  <Link to="/">+91 9688545869</Link><br/>
                  <Link to="/">+91 9514748009</Link>
                </li>
                
                <li style={footerTextItemStyles}>
                  <Link to="/">KEC,Perundurai,<br/>Erode-638052</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  const Copyright = () => {
    const copyrightStyles = {
      padding: '1rem 0',
    };
  
    return (
      <div id="copyright" style={copyrightStyles}>
        <div className="container">
          <p className="copyright__text">
            © copyright 2023 Yummy’s Cuisine | All rights reserved
          </p>
        </div>
      </div>
    );
  };
  
  
  
function App() {
  return (
    <div className="App">
      <HeroSection />
      
      <TopDishes />
      <EventsMedia/>
      <EventsInfo/>
      <WhyUs/>
            <StoreInfo />

<Footer/>
<Copyright/>
      {/* ... (Other components or content) */}
    </div>
  );
}

export default App;
