import React from 'react';
import './Review.css'; // Import your component-specific CSS file
import Navbar from './Navbar';
const Review = () => {
  return (
    <div><Navbar/>
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-row row-first">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="reviews-card" key={index}>
              <img
                className="card-img"
                src={`https://temalcode-agency-portfolio.netlify.app/images/review${index + 1}.png`}
                alt=""
              />
              <div className="card-text">
                <div className="card-title">
                  <p>“A taste explosion that keeps you coming back for more!”</p>
                </div>
                <div className="card-para">
                  <p>
                  This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.
                  </p>
                </div>
                <div className="card-author">
                  <svg
                    width="9"
                    height="2"
                    viewBox="0 0 9 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.526123 1.13867H8.25949"
                      stroke="black"
                      strokeWidth="0.822209"
                    />
                  </svg>
                
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-row row-second">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="reviews-card" key={index}>
              <div className="card-img">
                <img
                  src={`https://temalcode-agency-portfolio.netlify.app/images/review${index + 1}.png`}
                  alt=""
                />
              </div>
              <div className="card-text">
                <div className="card-title">
                  <p>“Flavors so divine, you'll want to write a love letter to the chef!”</p>
                </div>
                <div className="card-para">
                  <p>
                  I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.

 Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.
                  </p>
                </div>
                <p className="card-author">
                  <svg
                    width="9"
                    height="2"
                    viewBox="0 0 9 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.526123 1.13867H8.25949"
                      stroke="black"
                      strokeWidth="0.822209"
                    />
                  </svg>
              
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-row row-third">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="reviews-card" key={index}>
              <div className="card-img">
                <img
                  src={`https://temalcode-agency-portfolio.netlify.app/images/review${index + 6}.png`}
                  alt=""
                />
              </div>
              <div className="card-text">
                <div className="card-title">
                  <p>“Foodie paradise in every bite!”</p>
                </div>
                <div className="card-para">
                  <p>
                  Delicious high quality plates, selection of wines and great service.
We tried all their entrees, one of their desserts, and everything was de-li-cious. Highly recommended.Absolutely amazing! The place is beautiful and staff are super friendly and the food is delicious. I love that you get a lot of food as well for the price. It’s definitely not like other expensive restaurants and you only get a small amount of food. I am definitely going back.
                  </p>
                </div>
                <p className="card-author">
                  <svg
                    width="9"
                    height="2"
                    viewBox="0 0 9 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.526123 1.13867H8.25949"
                      stroke="black"
                      strokeWidth="0.822209"
                    />
                  </svg>
                  CEO of SomeCompany
                </p>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
    </div>
  );
};

export default Review;
